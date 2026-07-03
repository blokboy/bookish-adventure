import type { PixelFrame, PixelPalette } from './pixel-sprite';

export const characterPalette: PixelPalette = {
  H: '#000000',
  S: '#674d32',
  E: '#241a12',
  B: '#2c3e50',
  b: '#1b2733',
  W: '#f4f4f4',
  T: '#b8302a',
  P: '#2b2b3d',
  F: '#1a1a1a',
};

const torso: PixelFrame = [
  '..HHHH..',
  '.HHHHHH.',
  '.HSSSSH.',
  '.SSEESS.',
  '..SSSS..',
  '.BBWWBB.',
  '.BBTTBB.',
  '.bBTTBb.',
];

export const idleFrame: PixelFrame = [
  ...torso,
  '..PPPP..',
  '..PPPP..',
  '.PP..PP.',
  '.FF..FF.',
];

export const walkFrameA: PixelFrame = [
  ...torso,
  '..PPPP..',
  '..PPPP..',
  '.P....P.',
  '.F....F.',
];

export const walkFrameB: PixelFrame = [
  ...torso,
  '..PPPP..',
  '..PPPP..',
  '...PP...',
  '...FF...',
];

export const walkCycle: PixelFrame[] = [walkFrameA, walkFrameB];
