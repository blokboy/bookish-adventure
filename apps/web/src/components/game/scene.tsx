import { useEffect, useState } from 'react';
import { Building } from './building';
import { Butterflies } from './butterfly';
import { characterPalette, idleFrame, walkCycle } from './character-sprites';
import { ControlsHint } from './controls-hint';
import { DecorationSprite, Statue } from './decoration';
import { decorations } from './decorations';
import { Dragon } from './dragon';
import { GameTitle } from './game-title';
import { InfoPanel } from './info-panel';
import { aboutLandmark, landmarks } from './landmarks';
import { PixelSprite } from './pixel-sprite';
import { RANDOM_THOUGHTS } from './random-thoughts';
import { Signpost } from './signpost';
import { ThoughtBubble } from './thought-bubble';
import { TouchControls } from './touch-controls';
import { useLandmarkTriggers } from './use-landmark-triggers';
import { useRandomThoughts } from './use-random-thoughts';
import { useSideScroller } from './use-side-scroller';
import { useViewportWidth } from './use-viewport-width';
import { Clouds, GROUND_HEIGHT, Ground, Hills, Sky } from './world';

const CHARACTER_PIXEL_SIZE = 8.1;
const SPRITE_COLUMNS = 8;
const AVATAR_WIDTH = SPRITE_COLUMNS * CHARACTER_PIXEL_SIZE;
const WORLD_WIDTH = 8150;
const AVATAR_SPAWN_X = aboutLandmark.x - 220;
const firstLamppost = decorations
  .filter((decoration) => decoration.kind === 'lamppost')
  .reduce((closest, decoration) =>
    decoration.x < closest.x ? decoration : closest
  );
const FIRST_LAMPPOST_CLEAR_X = firstLamppost.x + 60;

export const Scene = () => {
  const viewportWidth = useViewportWidth();
  const { avatarX, cameraX, direction, moving, frameIndex } = useSideScroller({
    worldWidth: WORLD_WIDTH,
    viewportWidth,
    avatarWidth: AVATAR_WIDTH,
    initialX: AVATAR_SPAWN_X,
  });
  const { nearbyId, activeInfoId, closeInfo } = useLandmarkTriggers(
    avatarX,
    landmarks
  );
  const activeInfo = landmarks.find((landmark) => landmark.id === activeInfoId);

  const [hintVisible, setHintVisible] = useState(true);
  useEffect(() => {
    if (avatarX > FIRST_LAMPPOST_CLEAR_X) {
      setHintVisible(false);
    }
  }, [avatarX]);

  const frame = moving ? walkCycle[frameIndex] : idleFrame;
  const atLeftWall = avatarX <= AVATAR_WIDTH / 2 + 1;
  const rightWallX = Math.max(AVATAR_WIDTH / 2, WORLD_WIDTH - AVATAR_WIDTH / 2);
  const atRightWall = avatarX >= rightWallX - 1;
  const randomThought = useRandomThoughts(RANDOM_THOUGHTS);
  const bubbleText =
    atLeftWall || atRightWall ? 'Is this the glass ceiling?' : randomThought;

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Sky />
      <Clouds />
      <Dragon />
      <Butterflies />
      <Hills cameraX={cameraX} />

      <div
        className="absolute inset-y-0 left-0"
        style={{ width: WORLD_WIDTH, transform: `translateX(${-cameraX}px)` }}
      >
        <Ground />

        {decorations.map((decoration) => (
          <div
            key={decoration.id}
            className="absolute -translate-x-1/2"
            style={{ left: decoration.x, bottom: GROUND_HEIGHT - 4 }}
          >
            <DecorationSprite decoration={decoration} />
          </div>
        ))}

        {landmarks.map((landmark) => (
          <div
            key={landmark.id}
            className="absolute"
            style={{
              left: landmark.x,
              bottom: GROUND_HEIGHT - 4,
              transform: 'translateX(-50%)',
            }}
          >
            {landmark.type === 'project' ? (
              <Building
                title={landmark.title}
                image={landmark.image}
              />
            ) : landmark.type === 'statue' ? (
              <Statue title={landmark.title} />
            ) : (
              <Signpost title={landmark.title} />
            )}
            {landmark.id === nearbyId && (
              <div
                className="absolute left-1/2 -translate-x-1/2 animate-bounce whitespace-nowrap border-2 border-black bg-yellow-300 px-2 py-0.5 font-bold font-mono text-[10px] text-neutral-900"
                style={{ bottom: '100%', marginBottom: 44 }}
              >
                Press ▲ / W
              </div>
            )}
          </div>
        ))}

        <div
          className="absolute"
          style={{
            left: avatarX - AVATAR_WIDTH / 2,
            bottom: GROUND_HEIGHT - 4,
          }}
        >
          <ThoughtBubble
            visible={Boolean(bubbleText)}
            text={bubbleText ?? ''}
            align={atRightWall ? 'left' : 'right'}
          />
          <PixelSprite
            frame={frame}
            palette={characterPalette}
            pixelSize={CHARACTER_PIXEL_SIZE}
            flip={direction === 'left'}
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-2 z-10 flex flex-col items-center gap-2">
        <GameTitle visible={hintVisible} />
        <ControlsHint visible={hintVisible} />
      </div>
      <TouchControls />

      {activeInfo && (
        <InfoPanel
          title={activeInfo.title}
          tag={
            activeInfo.type === 'project' || activeInfo.type === 'statue'
              ? activeInfo.tag
              : undefined
          }
          tagColor={activeInfo.type === 'statue' ? 'purple' : 'amber'}
          body={activeInfo.body}
          url={activeInfo.type !== 'info' ? activeInfo.url : undefined}
          onClose={closeInfo}
        />
      )}
    </div>
  );
};
