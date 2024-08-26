import React, { HTMLAttributes, ReactNode } from "react";
import { Material } from "three";
export interface ParticlesWaveModelProps {
    particlesCount?: number;
    particleColor?: string;
    xLength?: number;
    yLength?: number;
    zLength?: number;
    waveFunction?: (particle: number[], duration: number) => [number, number, number];
    duration?: number;
    material?: Material;
}
export declare const ParticlesWaveModel: React.FC<ParticlesWaveModelProps>;
export interface ParticlesWaveProps extends HTMLAttributes<HTMLDivElement> {
    orbitControls?: boolean;
    children: ReactNode;
}
export declare const ParticlesWave: React.FC<ParticlesWaveProps>;
