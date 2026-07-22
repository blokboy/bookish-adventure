type InfoPanelLink = {
  label: string;
  href: string;
};

type SkillColor =
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose';

type InfoPanelSkill = {
  label: string;
  color: SkillColor;
};

type InfoPanelProps = {
  title: string;
  tag?: string;
  tagColor?: 'amber' | 'purple';
  skills?: InfoPanelSkill[];
  body?: string[];
  url?: string;
  links?: InfoPanelLink[];
  onClose: () => void;
};

const TAG_COLOR_CLASSES: Record<'amber' | 'purple', string> = {
  amber: 'bg-amber-400',
  purple: 'bg-purple-400',
};

const SKILL_COLOR_CLASSES: Record<SkillColor, string> = {
  red: 'border-red-600 text-red-700',
  orange: 'border-orange-600 text-orange-700',
  amber: 'border-amber-600 text-amber-700',
  yellow: 'border-yellow-600 text-yellow-700',
  lime: 'border-lime-600 text-lime-700',
  green: 'border-green-600 text-green-700',
  emerald: 'border-emerald-600 text-emerald-700',
  teal: 'border-teal-600 text-teal-700',
  cyan: 'border-cyan-600 text-cyan-700',
  sky: 'border-sky-600 text-sky-700',
  blue: 'border-blue-600 text-blue-700',
  indigo: 'border-indigo-600 text-indigo-700',
  violet: 'border-violet-600 text-violet-700',
  purple: 'border-purple-600 text-purple-700',
  fuchsia: 'border-fuchsia-600 text-fuchsia-700',
  pink: 'border-pink-600 text-pink-700',
  rose: 'border-rose-600 text-rose-700',
};

export const InfoPanel = ({
  title,
  tag,
  tagColor = 'amber',
  skills,
  body,
  url,
  links,
  onClose,
}: InfoPanelProps) => (
  <div className="absolute inset-0 z-20 flex items-start justify-center overflow-y-auto bg-black/40 px-4 py-8">
    <div
      className="my-auto w-full max-w-md border-4 border-black bg-[#fdf6e3] p-5 font-mono"
      style={{ boxShadow: '8px 8px 0 rgba(0,0,0,0.4)' }}
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <h2 className="font-bold text-lg tracking-wide">{title}</h2>
        {tag && (
          <span
            className={`rounded-full border-2 border-black px-2 py-0.5 font-bold text-[10px] text-neutral-900 ${TAG_COLOR_CLASSES[tagColor]}`}
          >
            {tag}
          </span>
        )}
      </div>
      {skills && skills.length > 0 && (
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {skills.map((skill) => (
            <span
              key={skill.label}
              className={`rounded-full border-2 bg-white px-2 py-0.5 font-bold text-[10px] ${SKILL_COLOR_CLASSES[skill.color]}`}
            >
              {skill.label}
            </span>
          ))}
        </div>
      )}
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 mb-3 inline-block border-2 border-black bg-blue-600 px-3 py-1 font-bold text-white text-xs"
        >
          Visit {title} ↗
        </a>
      )}
      {body?.map((line) => (
        <p
          key={line}
          className="mb-2 text-neutral-800 text-sm leading-relaxed"
        >
          {line}
        </p>
      ))}
      {links && links.length > 0 && (
        <div className="mb-2 flex flex-col items-start gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 text-sm underline underline-offset-2 hover:text-blue-900"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
      <div>
        <button
          type="button"
          onClick={onClose}
          className="mt-3 border-2 border-black bg-neutral-900 px-3 py-1 font-bold text-white text-xs"
        >
          Close (Esc / ↓ / S)
        </button>
      </div>
    </div>
  </div>
);
