const WIDTH = 74;
const HEIGHT = 92;
const PLANK_HEIGHT = 34;

export const SIGNPOST_WIDTH = WIDTH;
export const SIGNPOST_HEIGHT = HEIGHT;

type SignpostProps = {
  title: string;
};

export const Signpost = ({ title }: SignpostProps) => (
  <div
    className="relative"
    style={{ width: WIDTH, height: HEIGHT }}
  >
    <div
      className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center border-2 border-black bg-[#8a5a34] px-1 text-center font-bold font-mono text-[10px] text-white"
      style={{ top: 0, width: WIDTH, height: PLANK_HEIGHT }}
    >
      {title}
    </div>
    <div
      className="absolute left-1/2 -translate-x-1/2 bg-[#5c3d22]"
      style={{ top: PLANK_HEIGHT, width: 10, height: HEIGHT - PLANK_HEIGHT }}
    />
  </div>
);
