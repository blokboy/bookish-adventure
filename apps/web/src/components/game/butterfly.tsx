type ButterflyProps = {
  color: string;
  top: string;
  duration: number;
  delay: number;
};

export const Butterfly = ({ color, top, duration, delay }: ButterflyProps) => (
  <div
    className="pointer-events-none absolute left-0"
    style={{
      top,
      animation: `butterfly-drift ${duration}s linear ${delay}s infinite`,
    }}
  >
    <div
      className="relative"
      style={{ width: 26, height: 18 }}
    >
      <div
        className="absolute"
        style={{
          left: 0,
          top: 0,
          width: 11,
          height: 15,
          background: color,
          border: '1px solid rgba(0,0,0,0.5)',
          clipPath: 'polygon(100% 0%, 100% 100%, 0% 50%)',
          transformOrigin: 'right center',
          animation: 'butterfly-flap 0.18s ease-in-out infinite alternate',
        }}
      />
      <div
        className="absolute"
        style={{
          right: 0,
          top: 0,
          width: 11,
          height: 15,
          background: color,
          border: '1px solid rgba(0,0,0,0.5)',
          clipPath: 'polygon(0% 0%, 0% 100%, 100% 50%)',
          transformOrigin: 'left center',
          animation:
            'butterfly-flap 0.18s ease-in-out infinite alternate-reverse',
        }}
      />
      <div
        className="absolute"
        style={{
          left: 11,
          top: 2,
          width: 4,
          height: 15,
          background: '#2b2b2b',
        }}
      />
    </div>
  </div>
);

const BUTTERFLY_CONFIGS: ButterflyProps[] = [
  { color: '#f2a53d', top: '55%', duration: 14, delay: 0 },
  { color: '#4a90d9', top: '68%', duration: 18, delay: 4 },
  { color: '#e05a8f', top: '48%', duration: 16, delay: 9 },
];

export const Butterflies = () => (
  <>
    {BUTTERFLY_CONFIGS.map((config) => (
      <Butterfly
        key={config.color}
        {...config}
      />
    ))}
  </>
);
