import { createFileRoute } from '@tanstack/react-router';
import { Scene } from '@/components/game/scene';

export const Route = createFileRoute('/')({
  component: Scene,
  head: () => ({
    meta: [{ title: 'Portfolio' }],
  }),
});
