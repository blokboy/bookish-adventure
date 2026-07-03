import { useEffect, useRef, useState } from 'react';

const THOUGHT_INTERVAL = 15000;
const THOUGHT_DURATION = 4500;

export const useRandomThoughts = (thoughts: string[]) => {
  const [text, setText] = useState<string | null>(null);
  const lastIndex = useRef<number | null>(null);

  useEffect(() => {
    let hideTimeout: ReturnType<typeof setTimeout>;

    const showThought = () => {
      let index = Math.floor(Math.random() * thoughts.length);
      if (thoughts.length > 1 && index === lastIndex.current) {
        index = (index + 1) % thoughts.length;
      }
      lastIndex.current = index;
      setText(thoughts[index]);
      hideTimeout = setTimeout(() => setText(null), THOUGHT_DURATION);
    };

    const interval = setInterval(showThought, THOUGHT_INTERVAL);
    return () => {
      clearInterval(interval);
      clearTimeout(hideTimeout);
    };
  }, [thoughts]);

  return text;
};
