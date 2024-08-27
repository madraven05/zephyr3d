import React, { HTMLAttributes, ReactNode } from "react";
import { BufferGeometry, Material } from "three";
import { WaveFunctionArgs } from "../../utils/particles-wave-function";
export interface ParticlesWaveModelProps {
    particlesCount?: number;
    xLength?: number;
    yLength?: number;
    zLength?: number;
    waveFunction?: (x: number, y: number, z: number, duration: number, args?: WaveFunctionArgs) => [number, number, number];
    duration?: number;
    material?: Material;
    startColor?: string;
    endColor?: string;
    geometry?: BufferGeometry;
}
export declare const ParticlesWaveModel: React.FC<ParticlesWaveModelProps>;
export interface ParticlesWaveProps extends HTMLAttributes<HTMLDivElement> {
    orbitControls?: boolean;
    children: ReactNode;
}
export declare const ParticlesWave: React.FC<ParticlesWaveProps>;
