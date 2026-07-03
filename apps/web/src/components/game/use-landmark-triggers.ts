import { useEffect, useRef, useState } from 'react';
import type { Landmark } from './landmarks';

const PROJECT_TRIGGER_HALF_WIDTH = 30;
const INFO_TRIGGER_HALF_WIDTH = 44;
const INTERACT_KEYS = new Set(['KeyW', 'ArrowUp']);
const EXIT_KEYS = new Set(['KeyS', 'ArrowDown']);

export const useLandmarkTriggers = (avatarX: number, landmarks: Landmark[]) => {
  const [nearbyId, setNearbyId] = useState<string | null>(null);
  const [activeInfoId, setActiveInfoId] = useState<string | null>(null);
  const nearbyRef = useRef<string | null>(null);

  useEffect(() => {
    const nearby = landmarks.find((landmark) => {
      const halfWidth =
        landmark.type === 'project'
          ? PROJECT_TRIGGER_HALF_WIDTH
          : INFO_TRIGGER_HALF_WIDTH;
      return Math.abs(avatarX - landmark.x) <= halfWidth;
    });
    const nextId = nearby?.id ?? null;
    nearbyRef.current = nextId;
    setNearbyId(nextId);
    setActiveInfoId((current) =>
      current && current !== nextId ? null : current
    );
  }, [avatarX, landmarks]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || EXIT_KEYS.has(event.code)) {
        event.preventDefault();
        setActiveInfoId(null);
        return;
      }
      if (!INTERACT_KEYS.has(event.code) || event.repeat) {
        return;
      }
      const landmark = landmarks.find((item) => item.id === nearbyRef.current);
      if (!landmark) {
        return;
      }
      event.preventDefault();
      setActiveInfoId(landmark.id);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [landmarks]);

  return {
    nearbyId,
    activeInfoId,
    closeInfo: () => setActiveInfoId(null),
  };
};
