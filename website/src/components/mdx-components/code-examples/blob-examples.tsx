import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { Blob, MusicBlob } from "@zephyr3D/react";
import { OrbitControls } from "@react-three/drei";
import { Leva, useControls } from "leva";

export const BlobExample = () => {
  return (
    <div className="flex bg-white/10 h-96 rounded-md shadow-md">
      <Canvas>
        <ambientLight />
        <directionalLight position={[0, 0, 0]} />
        <Blob />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export const BlobColorsExample = () => {
  return (
    <div className="flex bg-white/10 h-96 rounded-md shadow-md">
      <Canvas camera={{position: [0,0,8]}}>
        <ambientLight />
        <directionalLight position={[0, 0, 0]} />
        <Blob color1="skyblue" color2="pink" meshProps={{ position: [-5, 0, 0] }} />
        <Blob color1="#636dd8" color2="#dbffcc" meshProps={{ position: [0, 0, 0] }} />
        <Blob color1="#ff9393" color2="#ffe478" meshProps={{ position: [5, 0, 0] }} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export const MusicBlobExample = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-white/10 h-96 rounded-md shadow-md">
      <Canvas>
        <MusicBlob audioRef={audioRef} />
      </Canvas>
      <audio controls ref={audioRef}>
        <source src={"/assets/summer-party.mp3"} type="audio/mpeg" />
      </audio>
    </div>
  );
};
