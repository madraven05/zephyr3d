import { Canvas, useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { MeshStandardMaterial, Object3D, SphereGeometry, } from "three";
import { circularMotionYZ, sineWaveXZ } from "../../utils/particle-wave-helper";
export const ParticlesWaveModel = ({ particlesCount = 500, particleColor = "#32e7e7", xLength = 14, zLength = 4, duration = 1000, waveFunction = sineWaveXZ }) => {
    const meshRef = useRef(null);
    const dummy = useMemo(() => new Object3D(), []);
    const particles = useMemo(() => {
        const particlesArray = [];
        for (let i = 0; i < particlesCount; i++) {
            particlesArray.push([
                Math.random() * xLength - 2,
                Math.random() * 14 - 2,
                Math.random() * zLength - 2,
            ]);
        }
        return particlesArray;
    }, [particlesCount]);
    useFrame(() => {
        particles.forEach((particle, i) => {
            const [newX, newY, newZ] = waveFunction(particle, duration);
            dummy.position.set(newX, newY, newZ);
            dummy.updateMatrix();
            meshRef.current.setMatrixAt(i, dummy.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
    });
    return (React.createElement("instancedMesh", { ref: meshRef, args: [
            new SphereGeometry(0.1, 3, 3),
            new MeshStandardMaterial({ color: particleColor }),
            particlesCount,
        ] }));
};
export const ParticlesWave = ({ orbitControls = false, ...props }) => {
    return (React.createElement("div", { ...props },
        React.createElement(Canvas, null,
            React.createElement("ambientLight", null),
            React.createElement(ParticlesWaveModel, { waveFunction: circularMotionYZ }),
            orbitControls ? React.createElement(OrbitControls, null) : null)));
};
//#endregion
