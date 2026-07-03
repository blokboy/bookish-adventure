type ThoughtBubbleProps = {
  visible: boolean;
  text: string;
  align?: 'left' | 'right';
};

export const ThoughtBubble = ({
  visible,
  text,
  align = 'right',
}: ThoughtBubbleProps) => (
  <div
    className={`pointer-events-none absolute left-1/2 transition-opacity duration-300 ${
      align === 'left' ? '-translate-x-full' : ''
    }`}
    style={{ bottom: '100%', marginBottom: 12, opacity: visible ? 1 : 0 }}
  >
    <div className="relative whitespace-nowrap rounded-2xl border-2 border-black bg-white px-3 py-2 font-mono text-[10px] text-neutral-900 shadow-[3px_3px_0_rgba(0,0,0,0.25)]">
      {text}
    </div>
    <div
      className={`absolute top-full mt-1 h-2.5 w-2.5 rounded-full border-2 border-black bg-white ${
        align === 'left' ? 'right-2' : 'left-2'
      }`}
    />
    <div
      className={`absolute top-full mt-4 h-1.5 w-1.5 rounded-full border-2 border-black bg-white ${
        align === 'left' ? 'right-0' : 'left-0'
      }`}
    />
  </div>
);
