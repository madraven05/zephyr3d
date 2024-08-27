import { NumberLiteralType } from "typescript";

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
export const sineWave = (
  x: number,
  y: number,
  z: number,
  duration: number,
  args: WaveFunctionArgs = {}
): [number, number, number] => {
  const time = performance.now() / duration;
  const { amplitude = 2, frequency = 1, speed = 2, phase = 0 } = args;
  const newY = amplitude * Math.sin(frequency * (x + z) - speed * time + phase);
  return [x, Math.sin(x + z + time), z];
};

/**
 * Helps in providing position of a particle in an animating circular wave across the X-Z plane
 *
 * @param particle a `[number, number, number]` that stores the current position of a particle in the wave
 * @param duration speed with which the particles of the wave move in the animation
 */
export const circularMotionXZ = (
  x: number,
  y: number,
  z: number,
  duration: number
): [number, number, number] => {
  const radius = 2;
  const time = performance.now() / duration;
  return [x, radius * Math.cos(time + y), radius * Math.sin(time + z)];
};

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
export const spiralWave = (
  x: number,
  y: number,
  z: number,
  duration: number,
  args: WaveFunctionArgs = {}
): [number, number, number] => {
  const { a = 0.1, b = 0.1, c = 0.05, angularSpeed = 1 } = args;
  const time = performance.now() / duration;

  const angle = angularSpeed * time + Math.sqrt(x * x + z * z);
  const radius = a + b * angle;

  const newX = radius * Math.cos(angle);
  const newZ = radius * Math.sin(angle);
  const newY = c * angle;

  return [newX, newY, newZ];
};

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
export const radialBurstWave = (
  x: number,
  y: number,
  z: number,
  duration: number,
  args: WaveFunctionArgs = {}
): [number, number, number] => {
  const { maxRadius = 5, frequency = 2, phase = 0.5 } = args;
  const time = performance.now() / duration;

  const distance = Math.sqrt(x * x + z * z) || 1; // Prevent division by zero
  const radius = maxRadius * Math.sin(frequency * time + phase);

  const newX = (x / distance) * radius;
  const newZ = (z / distance) * radius;
  const newY = y;

  return [newX, newY, newZ];
};

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
export const helixWave = (
  x: number,
  y: number,
  z: number,
  duration: number,
  args: WaveFunctionArgs = {}
): [number, number, number] => {
  const { radius = 5, turns = 2, verticalSpeed = 0.5, phase = 0.5 } = args;
  const time = performance.now() / duration;

  const angle = turns * time + phase;

  const newX = radius * Math.cos(angle);
  const newY = verticalSpeed * time;
  const newZ = radius * Math.sin(angle);

  return [newX, newY, newZ];
};

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
export const multiAxisSineWave = (
  x: number,
  y: number,
  z: number,
  duration: number,
  args: WaveFunctionArgs = {}
): [number, number, number] => {
  const { amplitude = 1, frequency = 2, speed = 1 } = args;
  const time = performance.now() / duration;

  const newY = amplitude * Math.sin(frequency * x - speed * time);
  const newZ = amplitude * Math.cos(frequency * x - speed * time);

  return [x, newY, newZ];
};

/**
 *
 * @param x X position of the particle
 * @param y Y position of the particle
 * @param z Z position of the particle
 * @param duration time in ms used to calculate the time in each frame
 * @param args
 * `radius` - determines the size of the meatball
 */
export const meatballWave = (
  x: number,
  y: number,
  z: number,
  duration: number,
  args: WaveFunctionArgs = {}
): [number, number, number] => {
  const { radius = 1.5 } = args;
  const time = performance.now() / duration;

  const centerX = Math.sin(time) * 2;
  const centerZ = Math.cos(time) * 2;

  const distance = Math.sqrt((x - centerX) ** 2 + (z - centerZ) ** 2);
  const influence = radius / distance;

  const newY = influence > 1 ? (influence - 1) * radius : 0;

  return [x, newY, z];
};

/**
 *
 * @param x X position of the particle
 * @param y Y position of the particle
 * @param z Z position of the particle
 * @param duration time in ms used to calculate the time in each frame
 * @param args
 * `radius` - determines the size of the meatball
 */
export const torusWave = (
  x: number,
  y: number,
  z: number,
  duration: number,
  args: WaveFunctionArgs = {}
): [number, number, number] => {
  const { majorRadius = 1.5, minorRadius = 1, frequency = 2, speed = 1 } = args;
  const time = performance.now() / duration;

  const u = x;
  const v = z;

  const wave = Math.cos(frequency * v + speed * time);

  const newX = (majorRadius + minorRadius * wave) * Math.cos(u);
  const newY = (majorRadius + minorRadius * wave) * Math.sin(u);
  const newZ = minorRadius * Math.sin(frequency * v + speed * time);

  return [newX, newY, newZ];
};
