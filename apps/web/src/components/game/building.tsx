const DISPLAY_HEIGHT = 475;

type BuildingProps = {
  title: string;
  image: string;
};

export const Building = ({ title, image }: BuildingProps) => (
  <div
    className="relative flex flex-col items-center"
    style={{ height: DISPLAY_HEIGHT }}
  >
    <div
      className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap border-2 border-black bg-white px-2 py-0.5 font-bold font-mono text-[11px] text-neutral-900"
      style={{ top: -30 }}
    >
      {title}
    </div>
    <img
      src={image}
      alt={title}
      draggable={false}
      className="pointer-events-none select-none"
      style={{ height: DISPLAY_HEIGHT, width: 'auto' }}
    />
  </div>
);
