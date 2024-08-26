/**
 * Helps in providing position of a particle in an animating sine wave across the X-Z plane
 *
 * @param particle a `[number, number, number]` that stores the current position of a particle in the wave
 * @param duration speed with which the particles of the wave move in the animation
 * @returns a new `[number, number,number]` that provides the new position of a given particle in the wave
 */
export const sineWaveXZ = (x, y, z, duration) => {
    const time = performance.now() / duration;
    return [x, Math.sin(x + z + time), z];
};
/**
 * Helps in providing position of a particle in an animating circular wave across the Y-Z plane
 *
 * @param particle a `[number, number, number]` that stores the current position of a particle in the wave
 * @param duration speed with which the particles of the wave move in the animation
 * @returns a new `[number, number,number]` that provides the new position of a given particle in the wave
 */
export const circularMotionYZ = (x, y, z, duration) => {
    const radius = 2;
    const time = performance.now() / duration;
    return [radius * Math.cos(time + x), y, radius * Math.sin(time + z)];
};
/**
 * Helps in providing position of a particle in an animating circular wave across the X-Z plane
 *
 * @param particle a `[number, number, number]` that stores the current position of a particle in the wave
 * @param duration speed with which the particles of the wave move in the animation
 * @returns a new `[number, number,number]` that provides the new position of a given particle in the wave
 */
export const circularMotionXZ = (x, y, z, duration) => {
    const radius = 2;
    const time = performance.now() / duration;
    return [x, radius * Math.cos(time + y), radius * Math.sin(time + z)];
};
