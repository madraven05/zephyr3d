/**
 * Helps in providing position of a particle in an animating sine wave across the X-Z plane
 *
 * @param particle a `[number, number, number]` that stores the current position of a particle in the wave
 * @param duration speed with which the particles of the wave move in the animation
 * @returns a new `[number, number,number]` that provides the new position of a given particle in the wave
 */
export function sineWaveXZ(particle, duration) {
    const time = performance.now() / duration;
    return [particle[0], Math.sin(particle[0] + particle[2] + time), particle[2]];
}
/**
 * Helps in providing position of a particle in an animating circular wave across the Y-Z plane
 *
 * @param particle a `[number, number, number]` that stores the current position of a particle in the wave
 * @param duration speed with which the particles of the wave move in the animation
 * @returns a new `[number, number,number]` that provides the new position of a given particle in the wave
 */
export function circularMotionYZ(particle, duration) {
    const radius = 2;
    const time = performance.now() / duration;
    const [x, y, z] = particle;
    return [radius * Math.cos(time + x), y, radius * Math.sin(time + z)];
}
/**
 * Helps in providing position of a particle in an animating circular wave across the X-Z plane
 *
 * @param particle a `[number, number, number]` that stores the current position of a particle in the wave
 * @param duration speed with which the particles of the wave move in the animation
 * @returns a new `[number, number,number]` that provides the new position of a given particle in the wave
 */
export function circularMotionXZ(particle, duration) {
    const radius = 2;
    const time = performance.now() / duration;
    const [x, y, z] = particle;
    return [x, radius * Math.cos(time + y), radius * Math.sin(time + z)];
}
