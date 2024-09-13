import React, { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import { getLoudness } from "../../utils/music-blob-utils";
import { BlobProps } from "./blob";
import { useFrame } from "@react-three/fiber";
import { fragmentShader, vertexShader } from "./shaders";

export interface MusicBlobProps extends BlobProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

export const MusicBlob = forwardRef<THREE.Mesh, MusicBlobProps>(
  (
    {
      audioRef,
      color1 = "orange",
      color2 = "purple",
      ambientIntensity = 0.4,
      lightPosition = [2, 2, 2],
      noiseScale = 2.0,
      speed = 1,
    },
    ref
  ) => {
    const [sampleRate, setSampleRate] = useState(0);

    const materialRef = useRef<THREE.ShaderMaterial>(null);

    const audioContext = useRef<AudioContext | null>(null);
    const source = useRef<MediaElementAudioSourceNode | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const dataArrayRef = useRef<Uint8Array | null>(null);

    const uniforms = useMemo(() => {
      return {
        time: {
          value: 0.0,
        },
        color1: {
          value: new THREE.Color(color1),
        },
        color2: {
          value: new THREE.Color(color2),
        },
        noiseScale: {
          value: noiseScale,
        },
        noiseIntensity: {
          value: 0.0,
        },
        speed: {
          value: speed,
        },
        lightPosition: {
          value: lightPosition,
        },
        ambientIntensity: {
          value: ambientIntensity,
        },
      };
    }, []);

    const handlePlay = () => {
      audioContext.current = new window.AudioContext();

      if (!source.current) {
        const analyser = audioContext.current.createAnalyser();
        source.current = audioContext.current.createMediaElementSource(
          audioRef.current!
        );
        source.current.connect(analyser);
        analyser.connect(audioContext.current.destination);
        setSampleRate(audioContext.current.sampleRate);
        analyser.fftSize = 1024; // Adjust for more or fewer samples
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        analyserRef.current = analyser;
        dataArrayRef.current = dataArray;
      }
    };

    useEffect(() => {
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.addEventListener("play", handlePlay);
        }
      }, 2000);

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener("play", handlePlay);
        }
        audioContext.current?.close();
      };
    }, []);

    useFrame(({ clock }) => {
      if (analyserRef.current && dataArrayRef.current && materialRef.current) {
        const material = materialRef.current as THREE.ShaderMaterial;
        material.uniforms.time.value = clock.getElapsedTime();

        analyserRef.current.getByteFrequencyData(dataArrayRef.current);
        const loudness = getLoudness(
          dataArrayRef.current,
          analyserRef.current,
          sampleRate
        ).overallLoudness;

        loudness > 0
          ? (material.uniforms.noiseIntensity.value = loudness * 4 - 2 + 0.001)
          : (material.uniforms.noiseIntensity.value = 0);
      }
    });

    return (
      <>
        <Html visible={true} position={[-2.9, -2.5, 0]}></Html>
        <mesh ref={ref}>
          <sphereGeometry args={[2, 32, 32]} />
          <shaderMaterial
            ref={materialRef}
            uniforms={uniforms}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
          />
        </mesh>
      </>
    );
  }
);
