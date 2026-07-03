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

export type ProjectLandmark = {
  id: string;
  type: 'project';
  title: string;
  x: number;
  url?: string;
  image: string;
  body?: string[];
  tag?: string;
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
    { label: 'abonraws@gmail.com', href: 'mailto:abonraws@gmail.com' },
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
    body: [
      "My first job after finishing undergrad, where I was excited to get to work on the Mathematica team. It was a pleasure to work on something that hadn't allowed extensive legacy to prevent it from still being ambitious.",
      'The majority of my time here would be spent finding better ways to break down algebraic expressions from the "search" engine into component parts so that the logic could be followed more acutely. And the majority of the work I did was in Python (back when pandas was all the rage).',
      'It was almost the perfect job, but living in Champaign, IL was not something I wanted for my 20s...',
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
    body: [
      "An old friend from high school who I used to be in Robotics Club/Math Team had reached out to tell me about the Recurse Center. It's a collective of programmers who go to this hallowed institution to learn and build whatever feels compelling.",
      'And because it was in New York City, a place that felt so different from the midwest, it seemed like a good idea to try to go. While there I worked on CRDTs due to my obsession with Figma, and I ended up getting connected to EnergyHub through RC.',
      "The work was far more exciting than I had expected, especially since Texas had experienced a massive power outage in 2021, and the work we did wasn't able to do much for the people who had been affected because TX has an independent energy grid.",
      "And this was the first time in my nascent career that I had to confront the material impact of my work, as well as its limitations. I also started to think more about the regulatory environments that surrounded the industry I wanted to be apart of because in some cases it dictates the boundaries of what is possible, and I'd never had to think about that before.",
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
    body: [
      `I was approached by a friend who had just raised a round for a startup that was interested in trying to blur the lines between online gaming and social networking. I was excited to get to take what I had learned about CRDTs in production and apply it 
       to something complex like managing real time data for a game. I was the first backend hire, so I got to help shape the architecture of the backend with the help of the Unity Lead to build what ultimately became Place, an iOS/Android app, that was built using
       Unity and C# on the client, and TypeScript/NestJS on the backend with sporadic pepperings of Python and Golang for data processing. This was a fun project because I got to work with a lot of different technologies, and I got to learn a lot about how to build a product that was both performant and scalable. 
       I also got to work with a lot of different people, and I learned a lot about how to work with people who have different skill sets and backgrounds, which was arguably the best part. Seeing the technical artists craft a new asset, then seeing that asset be given character by the client, and then to persist 
       the consequences of that character's actions was a really rewarding experience. But the thing about start ups...
      `,
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
    body: [
      'At the end of my previous role, I had gotten intrigued by the working progress of Web3, especially in Brooklyn where it seemed like a lot of new startups were being built.',
      'I had been working on a side project with a few friends that would allow individual crypto wallets to act as individual signers on a group crypto wallet and make collective purchases of digital assets.',
      'This was a fun project that was noticed by one of the founders of Zora who had been thinking of building something along a similar premise. So, me and my friends were hired to build what would become known as NounsBuilder, an app that allowed collective auctioning strategies for groups buying and selling digital art.',
      'The vast majority of my work here was in Solidity/Foundry and React/TypeScript. Occasionally, I got to mess around with the backend and CI/CD processes, which meant I got to sneak in some AWS here too.',
      "The project felt like a success and that wasn't something that was very familiar in the startup world, where many projects are attempts at finding product market fit.",
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
    body: [
      'I had been getting more and more interested in the world of Web3 and the markets it was creating, and I had been following and contributing to an open source project called Rainbow, which was a mobile wallet for Ethereum and other EVM compatible chains.',
      'After meeting the founders, I was offered a role to work on the backend and protocol side for the wallet as they began to expand beyond the capacities of what Reach Native could provide. The vast majority of my time here was spent working on backend services that would be used for Rainbow Router.',
      'A smart contract that would allow users to swap their tokens across different exchanges and LPs in a single transaction while allowing user to take the least gas intensive route to do so.',
    ],
  },
  {
    id: 'project-6',
    type: 'project',
    title: 'Blok Labs',
    x: 7249,
    image: '/Hires/cropped/City-15.png',
    tag: 'Work Experience',
    body: [
      'My old roommate from college had been working as a litigator as a swanky firm in Houston, and they were interested in contracting with a small engineering team to build a set of specialized AI tools (LLMs/Agents) to help them with automating some of the day to day tasks of running the firm.',
      'After working with them for a few months, I decided to go into business with my friend and we started Blok Labs, a small consultancy that specialized in building AI tools for law firms (and only law firms).',
      'Most of my time here is spent working with LangChain to craft agents that are more uniquely tailored to the myriad of tasks that a law firm has to do. We never made a website. The lawyers did not care about that. *sigh*',
    ],
  },
];

export const statueLandmarks: StatueLandmark[] = [
  {
    id: 'statue-1',
    type: 'statue',
    title: 'ParlayRace',
    x: 2244,
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
    x: 4627,
    url: 'https://www.npmjs.com/package/torlnk',
    body: [
      'A simple CLI tool that allows you to easily create a Tor hidden service and link it to your local machine for searching for torrents.',
      'Built with TypeScript and Node.js. I started contributing after I used it to find lost seasons of Jackass because my Gen Z nephews did not believe it was real.',
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
