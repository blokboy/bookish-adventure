export type ContactLink = {
  label: string;
  href: string;
};

export type InfoLandmark = {
  id: string;
  type: 'info';
  title: string;
  x: number;
  body: string[];
  links?: ContactLink[];
};

export type SkillColor =
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

export type Skill = {
  label: string;
  color: SkillColor;
};

export type ProjectLandmark = {
  id: string;
  type: 'project';
  title: string;
  x: number;
  url?: string;
  image: string;
  body?: string[];
  tag?: string;
  skills?: Skill[];
};

export type StatueLandmark = {
  id: string;
  type: 'statue';
  title: string;
  x: number;
  body: string[];
  tag?: string;
  url: string;
};

export type Landmark = InfoLandmark | ProjectLandmark | StatueLandmark;

const SKILL_COLORS: Record<string, SkillColor> = {
  Python: 'red',
  'SciPy + NumPy': 'orange',
  Pandas: 'amber',
  AWS: 'yellow',
  Ansible: 'lime',
  'Spring Boot': 'green',
  TypeScript: 'emerald',
  Go: 'teal',
  'C#': 'cyan',
  Blender: 'sky',
  Unity: 'blue',
  Figma: 'indigo',
  Solidity: 'violet',
  Actions: 'purple',
  'React Native': 'fuchsia',
  'iOS + Android': 'pink',
  Rust: 'rose',
  'Llama CPP': 'lime',
};

const skillsFor = (labels: string[]): Skill[] =>
  labels.map((label) => {
    const color = SKILL_COLORS[label];
    if (!color) {
      throw new Error(`Missing skill color mapping for "${label}"`);
    }
    return { label, color };
  });

export const aboutLandmark: InfoLandmark = {
  id: 'about',
  type: 'info',
  title: 'About Me',
  x: 500,
  body: [
    "My name is Blokboy, and I've been an engineer (professionally) for a decade in August 2027.",
    "As you take the journey forward, you'll be able to see some of the work I've been fortunate enough to be apart of.",
    "Try to avoid the dragon, they're cool, but they keep asking for my Netflix password, and I'm over it.",
  ],
};

export const contactLandmark: InfoLandmark = {
  id: 'contact',
  type: 'info',
  title: 'Contact',
  x: 7661,
  body: ["Thanks for making it all the way here. Let's talk:"],
  links: [
    { label: 'jordanthedev@gmail.com', href: 'mailto:jordanthedev@gmail.com' },
    {
      label: 'https://github.com/blokboy',
      href: 'https://github.com/blokboy',
    },
  ],
};

export const projectLandmarks: ProjectLandmark[] = [
  {
    id: 'project-1',
    type: 'project',
    title: 'Wolfram Alpha',
    x: 1196,
    url: 'https://www.wolframalpha.com/',
    image: '/Hires/cropped/City-03.png',
    tag: 'Work Experience',
    skills: skillsFor(['Python', 'SciPy + NumPy', 'Pandas', 'AWS', 'Ansible']),
    body: [
      "This was my first job after finishing undergrad, and I was excited to work on the Mathematica team on something that hadn't accumulated so much legacy it couldn't still be ambitious.",
      'The majority of my time was spent finding better ways to break algebraic expressions from the "search" engine down into component parts so the underlying logic could be followed more acutely.',
      "It was almost the perfect job, but living in Champaign, IL wasn't something I wanted for my 20s...",
    ],
  },
  {
    id: 'project-2',
    type: 'project',
    title: 'EnergyHub',
    x: 2433,
    url: 'https://www.energyhub.com/',
    image: '/Hires/cropped/City-05.png',
    tag: 'Work Experience',
    skills: skillsFor([
      'Python',
      'Spring Boot',
      'AWS',
      'Ansible',
      'SciPy + NumPy',
      'Pandas',
    ]),
    body: [
      'A friend from Robotics Club/Math Team introduced me to the Recurse Center, a self-directed programmer collective in New York City, which led to my connection with EnergyHub.',
      "The work turned out to be more compelling than I expected, especially given the backdrop of the 2021 Texas power outage, though the work we did couldn't help those affected since Texas runs an independent power grid.",
      'This was the first time in my career I had to reckon with the real-world impact and limits of my work.',
      "It also pushed me to think more about the regulatory environments shaping the energy industry, since those rules can define the boundaries of what's technically possible.",
    ],
  },
  {
    id: 'project-3',
    type: 'project',
    title: 'Eternal',
    x: 3236,
    url: 'https://www.crunchbase.com/organization/eternal',
    image: '/Hires/cropped/City-07.png',
    tag: 'Work Experience',
    skills: skillsFor(['TypeScript', 'Go', 'C#', 'Blender', 'Unity', 'Figma']),
    body: [
      "A friend who had just raised a round for a startup approached me about blurring the lines between online gaming and social networking, and I was excited to apply what I'd learned about CRDTs in production to real-time data.",
      'As the first backend hire, I helped shape the architecture alongside the Unity Lead to build what became Place, a mobile app blending social presence with live gameplay.',
      'It was a fun project that let me work across a lot of different technologies and with people from many different skill sets and backgrounds, which was arguably the best part.',
      "Watching a technical artist's asset take shape, get given character by the client, and then persist the consequences of that character's actions was a genuinely rewarding experience.",
      'But the thing about startups...',
    ],
  },
  {
    id: 'project-4',
    type: 'project',
    title: 'Zora',
    x: 4431,
    url: 'https://nouns.build/',
    image: '/Hires/cropped/City-10.png',
    tag: 'Work Experience',
    skills: skillsFor(['TypeScript', 'Python', 'Solidity', 'Figma', 'Actions']),
    body: [
      "At the end of my previous role, I'd gotten intrigued by the growing progress of Web3, especially in Brooklyn where it felt like a lot of new startups were being built.",
      "I'd been building a side project with a few friends that let individual crypto wallets act as signers on a group wallet, making collective purchases of digital assets.",
      "One of Zora's founders noticed the project and had been thinking about something similar, so my friends and I were hired to build what became NounsBuilder, an app enabling collective auctioning strategies for groups buying and selling digital art.",
      "The project felt like a success, which wasn't something I was used to in the startup world, where most projects are still hunting for product-market fit.",
    ],
  },
  {
    id: 'project-5',
    type: 'project',
    title: 'Rainbow Wallet',
    x: 5403,
    url: 'https://rainbow.me/',
    image: '/Hires/cropped/City-12.png',
    tag: 'Work Experience',
    skills: skillsFor([
      'React Native',
      'TypeScript',
      'iOS + Android',
      'Figma',
      'Solidity',
    ]),
    body: [
      "I'd been getting more and more interested in Web3, and I'd been following and contributing to Rainbow, an open-source mobile wallet for Ethereum and other EVM-compatible chains.",
      'After meeting the founders, I was offered a role on the backend and protocol side as the wallet outgrew what its original stack could support, and most of my time went into backend services powering Rainbow Router.',
      'Rainbow Router let users swap tokens across different exchanges and liquidity pools in a single transaction while routing them through the least gas-intensive path.',
    ],
  },
  {
    id: 'project-6',
    type: 'project',
    title: 'Blok Labs',
    x: 7249,
    image: '/Hires/cropped/City-15.png',
    tag: 'Work Experience',
    skills: skillsFor(['TypeScript', 'Python', 'Rust', 'Llama CPP', 'Figma']),
    body: [
      "My old roommate from college, now a litigator at a firm in Houston, wanted to contract a small engineering team to build specialized AI tools to automate some of the firm's day-to-day work.",
      'After a few months of that, I went into business with my friend and we started Blok Labs, a small consultancy building AI tools exclusively for law firms.',
      'Most of my time goes into crafting agents tailored to the many different tasks a law firm has to handle.',
      "We never made a website — the lawyers didn't care about that. *sigh*",
    ],
  },
];

export const statueLandmarks: StatueLandmark[] = [
  {
    id: 'statue-1',
    type: 'statue',
    title: 'ParlayRace',
    x: 608,
    url: 'https://parlayrace-production.up.railway.app',
    body: [
      'Too many of my friends think they are sports gurus, so I thought it would be fun to make a game to see if that holds up.',
      'This is a simple game where you can compete against your friends to see who can make the best predictions on sports, politics, even the weather.',
      'Built with React, TypeScript, TanStack, Postgres, and Rust for some pulling and crunching of odds from various providers.',
    ],
    tag: 'Open Source Contributions',
  },
  {
    id: 'statue-2',
    type: 'statue',
    title: 'TorLink',
    x: 2862,
    url: 'https://www.npmjs.com/package/torlnk',
    body: [
      'A simple CLI tool that allows you to easily create a Tor hidden service and link it to your local machine for searching for torrents.',
      'Built with TypeScript and Node.js. I started contributing after I used it to find lost seasons of Jackass because my Gen Z nephews did not believe it was real.',
    ],
    tag: 'Open Source Contributions',
  },
  {
    id: 'statue-3',
    type: 'statue',
    title: 'Maxim',
    x: 5614,
    url: 'https://github.com/j4redux/maxim',
    body: [
      'A self-hostable, agent-native multiplayer chat client — humans share workspaces and threads, and @-mentioning the bot kicks off an agent turn that replies right in the conversation.',
      'Built with Rust, TypeScript, and Python, it runs against a stub runtime out of the box or plugs into Centaur for real agent execution.',
    ],
    tag: 'Open Source Contributions',
  },
  {
    id: 'statue-4',
    type: 'statue',
    title: 'Autumn',
    x: 6900,
    url: 'https://github.com/blokboy/autumn',
    body: [
      'A terminal command center for GEPA prompt-optimization runs, wrapping a live Textual dashboard around runs, a persistent chat surface, and local or hosted model routing.',
      'Inspired by TorLink and built with Textual and Python, it lets you watch optimization runs in real time and manage models without leaving the terminal.',
    ],
    tag: 'Open Source Contributions',
  },
];

export const landmarks: Landmark[] = [
  aboutLandmark,
  ...projectLandmarks,
  ...statueLandmarks,
  contactLandmark,
];
