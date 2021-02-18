import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sean Tarzy', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welsome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sean Tarzy',
  subtitle: 'Software Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'linkedInPhoto.png',
  paragraphOne:
    'Sean Tarzy is a software engineer with a knack for problem solving and creativity.',
  paragraphTwo: 'Languages: Javascript, Ruby, SQL, HTML5, CSS3',
  paragraphThree: 'Education: Binghamton University, Flatiron School',
  paragraphFour: 'Hobbies: Baseball, Movies, Bass Guitar, Science-Fiction',
  resume: "",
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Mnemonic Maker',
    info:
      'Ever use Quizlet? Now imagine those digital flashcards incorporating your favorite song lyrics to help make studying effective and fun. And not just any lyrics, but lyrics whose initials line up perfectly to those of the phrase or list you need to remember. Add these mnemonic devices to a playlist of your choosing and listen to your flashcards come to life!',
    info2: 'Tools Used: React.js, Redux, Ruby on Rails, Rest-Client (for web scraping)',
    url: 'https://mnemonicmaker.netlify.app/',
    repo: 'https://github.com/seantarzy/Mnemonic-2.0-front-end', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bitcoin-project.jpg',
    title: "What is Bitcoin's Price?",
    info:
      "I couldn't buy Bitcoin when I could afford it, so I decided to capitalize on the hype in other ways. A fun site to answer the million dollar question at any moment. In addition to live pricing and conversion rates, this site provides stock graphs, articles and even an item of the day! Check it out.",
    info2: 'Tools Used: React.js, Node.js, Puppeteer (for web scraping),     * Currently Working on this project so it is not live yet!',
    repo: 'https://github.com/seantarzy/bitcoin-project-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'babe-ruth.png',
    title: 'War Games',
    info:
      "Like the card game 'War', except using baseball players and a particulair baseball statistic for the card's value",
    info2: 'Tools Used: Vanilla JS, Ruby on Rails, React-Native',
    url: 'https://mlbwargames.netlify.app/',
    repo: 'https://github.com/seantarzy/war-games-2.0-frontend', // if no repo, the button will not show up
  },
];
export const blogsData = [
  {
    id: nanoid(),
    img: 'genuine-leader.png',
    title: 'The Genuine Leader',
    info: 'A sci-fi short story. What if AI was big brother all along?',
    url: 'https://seantarzy.medium.com/the-genuine-leader-39ed769e5b7c',
  },
  {
    id: nanoid(),
    img: 'teacher-to-coder.jpg',
    title: 'How Teaching Set me up to be a Coder',
    info:
      'In this blog post I talk about how teaching helped me become a coder and draw the parallels between pedogogy and programming.',
    info2: '',
    url: 'https://medium.com/swlh/how-being-a-school-teacher-set-me-up-to-be-a-coder-3d977cbc30b3',
  },
  {
    id: nanoid(),
    img: 'sea-monster-riddle',
    title: 'Solving the Sea Monster Ted-Ed Riddle using Vanilla Javascript',
    info:
      'TED-Ed riddles flex the same kind of problem-solving muscles excersized in creating apps. I found that there was such a strong link between TED-Ed Riddles and coding, that I decided to bridge the gap even closer.',
    info2: '',
    url:
      'https://seantarzy.medium.com/solving-the-sea-monster-ted-ed-riddle-using-vanilla-javascript-800fe02be6e0',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'seantarzy@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://seantarzy.medium.com/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sean-tarzy-997076110/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/seantarzy',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
