import { useEffect, useRef, useState } from 'react';

const MOVE_SPEED = 233;
const FRAME_INTERVAL = 140;

const LEFT_KEYS = new Set(['ArrowLeft', 'KeyA']);
const RIGHT_KEYS = new Set(['ArrowRight', 'KeyD']);

export type Direction = 'left' | 'right';

type UseSideScrollerOptions = {
  worldWidth: number;
  viewportWidth: number;
  avatarWidth: number;
  initialX?: number;
};

export const useSideScroller = ({
  worldWidth,
  viewportWidth,
  avatarWidth,
  initialX = 0,
}: UseSideScrollerOptions) => {
  const [avatarX, setAvatarX] = useState(initialX);
  const [direction, setDirection] = useState<Direction>('right');
  const [moving, setMoving] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);

  const pressedKeys = useRef(new Set<string>());
  const frameElapsed = useRef(0);
  const lastTimestamp = useRef<number | null>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (LEFT_KEYS.has(event.code) || RIGHT_KEYS.has(event.code)) {
        event.preventDefault();
      }
      pressedKeys.current.add(event.code);
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      pressedKeys.current.delete(event.code);
    };
    const handleBlur = () => {
      pressedKeys.current.clear();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('blur', handleBlur);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('blur', handleBlur);
    };
  }, []);

  useEffect(() => {
    const halfWidth = avatarWidth / 2;
    const minX = halfWidth;
    const maxX = Math.max(halfWidth, worldWidth - halfWidth);

    const step = (timestamp: number) => {
      if (lastTimestamp.current === null) {
        lastTimestamp.current = timestamp;
      }
      const dt = (timestamp - lastTimestamp.current) / 1000;
      lastTimestamp.current = timestamp;

      const keys = pressedKeys.current;
      const goingLeft = [...keys].some((key) => LEFT_KEYS.has(key));
      const goingRight = [...keys].some((key) => RIGHT_KEYS.has(key));
      const isMoving = goingLeft !== goingRight;

      if (isMoving) {
        const delta = (goingRight ? 1 : -1) * MOVE_SPEED * dt;
        setAvatarX((x) => Math.min(maxX, Math.max(minX, x + delta)));
        setDirection(goingRight ? 'right' : 'left');

        frameElapsed.current += dt * 1000;
        if (frameElapsed.current >= FRAME_INTERVAL) {
          frameElapsed.current = 0;
          setFrameIndex((i) => (i + 1) % 2);
        }
      } else {
        frameElapsed.current = 0;
      }
      setMoving(isMoving);

      rafId.current = requestAnimationFrame(step);
    };

    rafId.current = requestAnimationFrame(step);
    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
      lastTimestamp.current = null;
    };
  }, [worldWidth, avatarWidth]);

  const maxCameraX = Math.max(0, worldWidth - viewportWidth);
  const cameraX = Math.min(
    maxCameraX,
    Math.max(0, avatarX - viewportWidth / 2)
  );

  return { avatarX, cameraX, direction, moving, frameIndex };
};
