import { Canvas, useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { MeshStandardMaterial, MeshToonMaterial, Object3D, SphereGeometry, } from "three";
import { circularMotionXZ, sineWaveXZ } from "../../utils/particle-wave-helper";
export const ParticlesWaveModel = ({ particlesCount = 500, particleColor = "#32e7e7", xLength = 14, yLength = 14, zLength = 4, duration = 1000, material = new MeshStandardMaterial({ color: particleColor }), waveFunction = sineWaveXZ, }) => {
    const meshRef = useRef(null);
    const dummy = useMemo(() => new Object3D(), []);
    //   const material = new MeshStandardMaterial({ color: particleColor });
    const particles = useMemo(() => {
        const particlesArray = [];
        for (let i = 0; i < particlesCount; i++) {
            particlesArray.push([
                Math.random() * xLength - xLength / 2,
                Math.random() * yLength - yLength / 2,
                Math.random() * zLength - zLength / 2,
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
    return (React.createElement("instancedMesh", { ref: meshRef, args: [new SphereGeometry(0.02, 4, 4), material, particlesCount] }));
};
export const ParticlesWave = ({ orbitControls = false, children, ...props }) => {
    const material = new MeshToonMaterial({ color: "#e3c6e5" });
    return (React.createElement("div", { ...props },
        React.createElement(Canvas, null,
            React.createElement("ambientLight", null),
            React.createElement("directionalLight", { position: [10, 10, 10] }),
            React.createElement(ParticlesWaveModel, { particleColor: "#e3c6e5", particlesCount: 1000, material: material, xLength: 24, zLength: 4, yLength: 20, waveFunction: circularMotionXZ }),
            orbitControls ? React.createElement(OrbitControls, null) : null,
            children)));
};
//#endregion
