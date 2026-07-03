type GameTitleProps = {
  visible: boolean;
};

const TITLE_WORDS = ['Employment', 'Quest'];

const lineStyle = {
  fontFamily: '"Ithaca", serif',
  color: '#ffcf4d',
  WebkitTextStroke: '3px #1a1a1a',
  textShadow: '6px 6px 0 rgba(0,0,0,0.35)',
  letterSpacing: '4px',
  lineHeight: 1.05,
} as const;

export const GameTitle = ({ visible }: GameTitleProps) => (
  <h1
    className="text-center"
    style={{
      opacity: visible ? 1 : 0,
      transition: 'opacity 2.2s ease',
      fontSize: 'clamp(48px, 10.5vw, 108px)',
    }}
  >
    {TITLE_WORDS.map((word) => (
      <span
        key={word}
        className="block"
        style={lineStyle}
      >
        {word}
      </span>
    ))}
  </h1>
);
