export const GROUND_HEIGHT = 140;

export const Sky = () => (
  <div
    className="absolute inset-0"
    style={{
      background:
        'linear-gradient(to bottom, #6ec6ff 0%, #a7dcff 55%, #d9f1ff 100%)',
    }}
  />
);

const CLOUD_POSITIONS = [
  { top: '12%', left: '8%', scale: 1 },
  { top: '22%', left: '38%', scale: 0.7 },
  { top: '9%', left: '68%', scale: 1.2 },
  { top: '28%', left: '85%', scale: 0.6 },
];

const Cloud = ({ scale }: { scale: number }) => (
  <svg
    role="presentation"
    width={48 * scale}
    height={24 * scale}
    viewBox="0 0 12 6"
    shapeRendering="crispEdges"
  >
    <g fill="#ffffff">
      <rect
        x="2"
        y="1"
        width="8"
        height="3"
      />
      <rect
        x="0"
        y="2"
        width="12"
        height="2"
      />
      <rect
        x="4"
        y="0"
        width="4"
        height="1"
      />
    </g>
  </svg>
);

export const Clouds = () => (
  <div
    className="absolute inset-0"
    style={{ opacity: 0.9 }}
  >
    {CLOUD_POSITIONS.map((cloud) => (
      <div
        key={`${cloud.top}-${cloud.left}`}
        className="absolute"
        style={{ top: cloud.top, left: cloud.left }}
      >
        <Cloud scale={cloud.scale} />
      </div>
    ))}
  </div>
);

const TILE_WIDTH = 400;
const TILE_HEIGHT = 220;

const HillLayer = ({
  color,
  bottom,
  points,
  factor,
  cameraX,
  tileCount,
}: {
  color: string;
  bottom: number;
  points: string;
  factor: number;
  cameraX: number;
  tileCount: number;
}) => {
  const offset = cameraX * factor;
  return (
    <div
      className="absolute left-0"
      style={{
        bottom,
        width: TILE_WIDTH * tileCount,
        height: TILE_HEIGHT,
        transform: `translateX(${-offset}px)`,
      }}
    >
      {Array.from({ length: tileCount }).map((_, index) => (
        <svg
          key={index}
          role="presentation"
          preserveAspectRatio="none"
          width={TILE_WIDTH}
          height={TILE_HEIGHT}
          viewBox={`0 0 ${TILE_WIDTH} ${TILE_HEIGHT}`}
          className="absolute top-0"
          style={{ left: index * TILE_WIDTH }}
        >
          <polygon
            points={points}
            fill={color}
          />
        </svg>
      ))}
    </div>
  );
};

export const Hills = ({ cameraX }: { cameraX: number }) => (
  <>
    <HillLayer
      color="#7fc9a8"
      bottom={GROUND_HEIGHT - 20}
      points="0,220 0,130 70,90 150,140 230,85 310,135 400,130 400,220"
      factor={0.35}
      cameraX={cameraX}
      tileCount={20}
    />
    <HillLayer
      color="#4fa583"
      bottom={GROUND_HEIGHT - 30}
      points="0,220 0,150 90,110 170,160 260,100 340,150 400,150 400,220"
      factor={0.55}
      cameraX={cameraX}
      tileCount={27}
    />
  </>
);

export const Ground = () => (
  <div
    className="absolute inset-x-0 bottom-0"
    style={{ height: GROUND_HEIGHT }}
  >
    <div
      className="h-5 w-full"
      style={{
        background: '#5fb356',
        backgroundImage:
          'repeating-linear-gradient(90deg, #5fb356 0 16px, #55a34c 16px 32px)',
        borderBottom: '4px solid #3d7a37',
      }}
    />
    <div
      className="h-full w-full"
      style={{
        background: '#8a5a34',
        backgroundImage:
          'repeating-linear-gradient(90deg, #8a5a34 0 16px, #7c4f2d 16px 32px)',
      }}
    />
  </div>
);
