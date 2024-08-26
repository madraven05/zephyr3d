import React, { HTMLAttributes } from "react";
export interface ParticlesWaveModelProps {
    particlesCount?: number;
    particleColor?: string;
    xLength?: number;
    zLength?: number;
    waveFunction?: (particle: number[], duration: number) => [number, number, number];
    duration?: number;
}
export declare const ParticlesWaveModel: React.FC<ParticlesWaveModelProps>;
export interface ParticlesWaveProps extends HTMLAttributes<HTMLDivElement> {
    orbitControls?: boolean;
}
export declare const ParticlesWave: React.FC<ParticlesWaveProps>;
