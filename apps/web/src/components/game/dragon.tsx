const DRAGON_WIDTH = 96;
const DRAGON_HEIGHT = 56;

export const Dragon = () => (
  <div
    className="pointer-events-none absolute"
    style={{
      width: DRAGON_WIDTH,
      height: DRAGON_HEIGHT,
      animation: 'dragon-flight 15s linear infinite',
    }}
  >
    <div
      className="absolute"
      style={{
        top: -6,
        left: 24,
        width: 40,
        height: 26,
        background: '#4a7a58',
        clipPath: 'polygon(0% 100%, 100% 0%, 100% 40%, 30% 100%)',
        transformOrigin: 'bottom left',
        animation: 'dragon-flap 0.5s ease-in-out infinite alternate',
      }}
    />
    <div
      className="absolute"
      style={{
        top: 26,
        left: 0,
        width: 22,
        height: 8,
        background: '#3f6b4a',
        clipPath: 'polygon(0% 40%, 100% 0%, 100% 100%, 0% 60%)',
      }}
    />
    <div
      className="absolute"
      style={{
        top: 20,
        left: 18,
        width: 46,
        height: 16,
        background: '#3f6b4a',
      }}
    />
    <div
      className="absolute"
      style={{
        top: 16,
        left: 60,
        width: 16,
        height: 14,
        background: '#3f6b4a',
      }}
    />
    <div
      className="absolute"
      style={{ top: 20, left: 74, width: 10, height: 7, background: '#3f6b4a' }}
    />
    <div
      className="absolute"
      style={{ top: 19, left: 68, width: 3, height: 3, background: '#e04b3f' }}
    />
    <div
      className="absolute"
      style={{
        top: 14,
        left: 20,
        width: 44,
        height: 30,
        background: '#5a9068',
        clipPath: 'polygon(0% 60%, 100% 0%, 90% 50%, 40% 100%)',
        transformOrigin: 'bottom left',
        animation: 'dragon-flap 0.5s ease-in-out infinite alternate-reverse',
      }}
    />
  </div>
);
