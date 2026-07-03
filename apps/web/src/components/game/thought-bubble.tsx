type Align = 'left' | 'right' | 'center';

type ThoughtBubbleProps = {
  visible: boolean;
  text: string;
  align?: Align;
};

const CONTAINER_CLASSES: Record<Align, string> = {
  left: '-translate-x-full',
  right: '',
  center: '-translate-x-1/2',
};

const TAIL_1_CLASSES: Record<Align, string> = {
  left: 'right-2',
  right: 'left-2',
  center: 'left-1/2 -translate-x-3',
};

const TAIL_2_CLASSES: Record<Align, string> = {
  left: 'right-0',
  right: 'left-0',
  center: 'left-1/2 translate-x-1',
};

export const ThoughtBubble = ({
  visible,
  text,
  align = 'center',
}: ThoughtBubbleProps) => (
  <div
    className={`pointer-events-none absolute left-1/2 transition-opacity duration-300 ${CONTAINER_CLASSES[align]}`}
    style={{ bottom: '100%', marginBottom: 12, opacity: visible ? 1 : 0 }}
  >
    <div className="relative whitespace-nowrap rounded-2xl border-2 border-black bg-white px-3 py-2 font-mono text-[10px] text-neutral-900 shadow-[3px_3px_0_rgba(0,0,0,0.25)]">
      {text}
    </div>
    <div
      className={`absolute top-full mt-1 h-2.5 w-2.5 rounded-full border-2 border-black bg-white ${TAIL_1_CLASSES[align]}`}
    />
    <div
      className={`absolute top-full mt-4 h-1.5 w-1.5 rounded-full border-2 border-black bg-white ${TAIL_2_CLASSES[align]}`}
    />
  </div>
);
