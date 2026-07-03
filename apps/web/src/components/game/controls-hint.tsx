import { useIsTouchDevice } from './use-is-touch-device';

type ControlsHintProps = {
  visible: boolean;
};

export const ControlsHint = ({ visible }: ControlsHintProps) => {
  const isTouch = useIsTouchDevice();

  return (
    <div
      className="whitespace-nowrap border-2 border-black bg-white/80 px-3 py-1 font-mono text-[11px] text-neutral-900 transition-opacity duration-700"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {isTouch
        ? 'Use the arrows below to walk · ▲ to interact'
        : '← → / A D to walk · ↑ / W to interact'}
    </div>
  );
};
