import type { PointerEvent, ReactNode } from 'react';
import { useIsTouchDevice } from './use-is-touch-device';

const dispatchKey = (type: 'keydown' | 'keyup', code: string) => {
  window.dispatchEvent(new KeyboardEvent(type, { code }));
};

type ControlButtonProps = {
  code: string;
  children: ReactNode;
  className?: string;
};

const ControlButton = ({ code, children, className }: ControlButtonProps) => {
  const press = (event: PointerEvent) => {
    event.preventDefault();
    dispatchKey('keydown', code);
  };
  const release = (event: PointerEvent) => {
    event.preventDefault();
    dispatchKey('keyup', code);
  };

  return (
    <button
      type="button"
      className={`flex touch-none select-none items-center justify-center rounded-full border-2 border-black bg-white/80 font-bold text-2xl active:bg-white ${className ?? ''}`}
      onContextMenu={(event) => event.preventDefault()}
      onPointerCancel={release}
      onPointerDown={press}
      onPointerLeave={release}
      onPointerUp={release}
    >
      {children}
    </button>
  );
};

export const TouchControls = () => {
  const isTouch = useIsTouchDevice();

  if (!isTouch) {
    return null;
  }

  return (
    <div
      className="absolute inset-x-0 z-10 flex items-end justify-between px-6"
      style={{ bottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}
    >
      <div className="flex gap-3">
        <ControlButton
          code="ArrowLeft"
          className="h-16 w-16"
        >
          ◀
        </ControlButton>
        <ControlButton
          code="ArrowRight"
          className="h-16 w-16"
        >
          ▶
        </ControlButton>
      </div>
      <ControlButton
        code="ArrowUp"
        className="h-16 w-16"
      >
        ▲
      </ControlButton>
    </div>
  );
};
