import { idleFrame } from './character-sprites';
import type { Decoration } from './decorations';
import { PixelSprite } from './pixel-sprite';

const DECORATION_BUILDING_HEIGHT = 425;

const SmallBuilding = ({ image }: { image: string }) => (
  <img
    src={image}
    alt=""
    draggable={false}
    className="pointer-events-none select-none"
    style={{ height: DECORATION_BUILDING_HEIGHT, width: 'auto' }}
  />
);

const statuePalette = {
  H: '#6b6f73',
  S: '#9a9ea3',
  E: '#4a4e52',
  B: '#7d8085',
  b: '#63666a',
  W: '#9a9ea3',
  T: '#7d8085',
  P: '#55585c',
  F: '#3a3d40',
};

const PEDESTAL_WIDTH = 56;
const PEDESTAL_HEIGHT = 28;

type StatueProps = {
  title: string;
};

export const Statue = ({ title }: StatueProps) => (
  <div
    className="relative"
    style={{ width: PEDESTAL_WIDTH, height: PEDESTAL_HEIGHT + 108 }}
  >
    <div
      className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap border-2 border-black bg-white px-2 py-0.5 font-bold font-mono text-[11px] text-neutral-900"
      style={{ top: -30 }}
    >
      {title}
    </div>
    <div
      className="absolute left-1/2 -translate-x-1/2"
      style={{
        bottom: PEDESTAL_HEIGHT,
      }}
    >
      <PixelSprite
        frame={idleFrame}
        palette={statuePalette}
        pixelSize={9}
      />
    </div>
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2"
      style={{
        width: PEDESTAL_WIDTH,
        height: PEDESTAL_HEIGHT,
        background: '#9497a0',
        border: '2px solid #4a4e52',
      }}
    />
  </div>
);

const POLE_WIDTH = 6;
const POLE_HEIGHT = 110;
const LAMP_SIZE = 22;

const Lamppost = () => (
  <div
    className="relative"
    style={{ width: LAMP_SIZE, height: POLE_HEIGHT + LAMP_SIZE }}
  >
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2"
      style={{ width: POLE_WIDTH, height: POLE_HEIGHT, background: '#2b2b2b' }}
    />
    <div
      className="absolute left-1/2 -translate-x-1/2"
      style={{
        bottom: POLE_HEIGHT,
        width: LAMP_SIZE,
        height: LAMP_SIZE,
        background: '#2b2b2b',
        border: '2px solid #1a1a1a',
      }}
    >
      <div
        className="absolute"
        style={{ inset: 3, background: '#ffd873' }}
      />
    </div>
  </div>
);

type DecorationSpriteProps = {
  decoration: Decoration;
};

export const DecorationSprite = ({ decoration }: DecorationSpriteProps) => {
  if (decoration.kind === 'building') {
    return <SmallBuilding image={decoration.image} />;
  }
  return <Lamppost />;
};
