import type { Decoration } from './decorations';

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

type LandmarkLamppostProps = {
  title: string;
};

export const LandmarkLamppost = ({ title }: LandmarkLamppostProps) => (
  <div
    className="relative"
    style={{ width: LAMP_SIZE, height: POLE_HEIGHT + LAMP_SIZE }}
  >
    <div
      className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap border-2 border-black bg-white px-2 py-0.5 font-bold font-mono text-[11px] text-neutral-900"
      style={{ top: -30 }}
    >
      {title}
    </div>
    <Lamppost />
  </div>
);

type DecorationSpriteProps = {
  decoration: Decoration;
};

export const DecorationSprite = ({ decoration }: DecorationSpriteProps) => (
  <SmallBuilding image={decoration.image} />
);
