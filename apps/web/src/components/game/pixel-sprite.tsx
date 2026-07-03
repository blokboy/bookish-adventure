export type PixelFrame = string[];
export type PixelPalette = Record<string, string>;

type PixelSpriteProps = {
  frame: PixelFrame;
  palette: PixelPalette;
  pixelSize: number;
  flip?: boolean;
  className?: string;
};

export const PixelSprite = ({
  frame,
  palette,
  pixelSize,
  flip = false,
  className,
}: PixelSpriteProps) => {
  const height = frame.length;
  const width = frame.reduce((max, row) => Math.max(max, row.length), 0);

  return (
    <svg
      role="presentation"
      width={width * pixelSize}
      height={height * pixelSize}
      viewBox={`0 0 ${width} ${height}`}
      shapeRendering="crispEdges"
      className={className}
      style={{
        transform: flip ? 'scaleX(-1)' : undefined,
        imageRendering: 'pixelated',
      }}
    >
      {frame.map((row, y) =>
        [...row].map((char, x) => {
          const color = palette[char];
          if (!color) {
            return null;
          }
          return (
            <rect
              key={`${y}-${x}`}
              x={x}
              y={y}
              width={1}
              height={1}
              fill={color}
            />
          );
        })
      )}
    </svg>
  );
};
