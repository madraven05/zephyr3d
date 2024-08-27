export interface WaveFunctionArgs {
    amplitude?: number;
    frequency?: number;
    phase?: number;
    speed?: number;
    a?: number;
    b?: number;
    c?: number;
    angularSpeed?: number;
    maxRadius?: number;
    radius?: number;
    majorRadius?: number;
    minorRadius?: number;
    verticalSpeed?: number;
    turns?: number;
}
/**
 *
 * @param x X position of the particle
 * @param y Y position of the particle
 * @param z Z position of the particle
 * @param duration time in ms used to calculate the time in each frame
 * @param args
 * `amplitude` - determines the amplitude of the wave,
 *
 * `frequency` - determines the frequency of the wave,
 *
 * `speed` - how fast the wave moves over time,
 *
 * `phase` - offset to move the wave across X-axis.
 */
export declare const sineWave: (x: number, y: number, z: number, duration: number, args?: WaveFunctionArgs) => [number, number, number];
/**
 * Helps in providing position of a particle in an animating circular wave across the X-Z plane
 *
 * @param particle a `[number, number, number]` that stores the current position of a particle in the wave
 * @param duration speed with which the particles of the wave move in the animation
 */
export declare const circularMotionXZ: (x: number, y: number, z: number, duration: number) => [number, number, number];
/**
 *
 * @param x X position of the particle
 * @param y Y position of the particle
 * @param z Z position of the particle
 * @param duration time in ms used to calculate the time in each frame
 * @param args
 * `a` and `b - determines the spacing of the spiral turns in the wave,
 *
 * `c` - determines the vertical movement along the Y-axis,
 *
 * `angularSpeed` - how fast the wave moves over time,
 *
 */
export declare const spiralWave: (x: number, y: number, z: number, duration: number, args?: WaveFunctionArgs) => [number, number, number];
/**
 *
 * @param x X position of the particle
 * @param y Y position of the particle
 * @param z Z position of the particle
 * @param duration time in ms used to calculate the time in each frame
 * @param args
 * `maxRadius` - determines how far the particles move from the center,
 *
 * `frequency` - determines the frequency of the wave,
 *
 * `phase` - offset to move the wave across X-axis.
 */
export declare const radialBurstWave: (x: number, y: number, z: number, duration: number, args?: WaveFunctionArgs) => [number, number, number];
/**
 *
 * @param x X position of the particle
 * @param y Y position of the particle
 * @param z Z position of the particle
 * @param duration time in ms used to calculate the time in each frame
 * @param args
 * `radius` - determines the size of the helix,
 *
 * `turns` - determines the number of turns in the helix,
 *
 * `verticalSpeed` - determines the speed along the Y-axis,
 *
 * 'phase' - offset to move the wave across X-axis.
 */
export declare const helixWave: (x: number, y: number, z: number, duration: number, args?: WaveFunctionArgs) => [number, number, number];
/**
 *
 * @param x X position of the particle
 * @param y Y position of the particle
 * @param z Z position of the particle
 * @param duration time in ms used to calculate the time in each frame
 * @param args
 * `amplitude` - determines the amplitude of the wave,
 *
 * `frequency` - determines the frequency of the wave,
 *
 * `speed` - how fast the wave moves over time,
 */
export declare const multiAxisSineWave: (x: number, y: number, z: number, duration: number, args?: WaveFunctionArgs) => [number, number, number];
/**
 *
 * @param x X position of the particle
 * @param y Y position of the particle
 * @param z Z position of the particle
 * @param duration time in ms used to calculate the time in each frame
 * @param args
 * `radius` - determines the size of the meatball
 */
export declare const meatballWave: (x: number, y: number, z: number, duration: number, args?: WaveFunctionArgs) => [number, number, number];
/**
 *
 * @param x X position of the particle
 * @param y Y position of the particle
 * @param z Z position of the particle
 * @param duration time in ms used to calculate the time in each frame
 * @param args
 * `radius` - determines the size of the meatball
 */
export declare const torusWave: (x: number, y: number, z: number, duration: number, args?: WaveFunctionArgs) => [number, number, number];
