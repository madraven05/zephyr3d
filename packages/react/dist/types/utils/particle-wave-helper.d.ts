/**
 * Helps in providing position of a particle in an animating sine wave across the X-Z plane
 *
 * @param particle a `[number, number, number]` that stores the current position of a particle in the wave
 * @param duration speed with which the particles of the wave move in the animation
 * @returns a new `[number, number,number]` that provides the new position of a given particle in the wave
 */
export declare const sineWaveXZ: (x: number, y: number, z: number, duration: number) => [number, number, number];
/**
 * Helps in providing position of a particle in an animating circular wave across the Y-Z plane
 *
 * @param particle a `[number, number, number]` that stores the current position of a particle in the wave
 * @param duration speed with which the particles of the wave move in the animation
 * @returns a new `[number, number,number]` that provides the new position of a given particle in the wave
 */
export declare const circularMotionYZ: (x: number, y: number, z: number, duration: number) => [number, number, number];
/**
 * Helps in providing position of a particle in an animating circular wave across the X-Z plane
 *
 * @param particle a `[number, number, number]` that stores the current position of a particle in the wave
 * @param duration speed with which the particles of the wave move in the animation
 * @returns a new `[number, number,number]` that provides the new position of a given particle in the wave
 */
export declare const circularMotionXZ: (x: number, y: number, z: number, duration: number) => [number, number, number];
