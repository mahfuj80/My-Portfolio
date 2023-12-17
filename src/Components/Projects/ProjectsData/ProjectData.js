import fitnessTrackerBlack from '../../../assets/Projects/fitnessTrackerBlack.png';
import fitnessTrackerWhite from '../../../assets/Projects/fitnessTrackerWhite.png';
import skillSwaprBlack from '../../../assets/Projects/skillSwaprBlack.png';
import skillSwaprWhite from '../../../assets/Projects/skillSwaprWhite.png';
import techInnovateHubBlack from '../../../assets/Projects/techInnovateHubBlack.png';
import techInnovateHubWhite from '../../../assets/Projects/techInnovateHubWhite.png';
import eventManagement from '../../../assets/Projects/eventManagement.png';

import react from '../../../assets/icons/react.png';
import mongo from '../../../assets/icons/mongo.png';
import tailwind from '../../../assets/icons/tailwind.png';
import firebase from '../../../assets/icons/firebase.png';
import express from '../../../assets/icons/express.png';
import javaScript from '../../../assets/icons/JavaScript.png';

const projects = [
  {
    id: 1,
    name: 'Fitness Tracker',
    liveLink: 'https://fitness-tracker-a12.web.app/',
    GithubLink: 'https://github.com/mahfuj80/Fitness-Tracker-Client-A12',
    serverLink: 'https://github.com/mahfuj80/Fitness-Tracker-Server-A12',
    images: [fitnessTrackerBlack, fitnessTrackerWhite],
    description:
      'Elevate your fitness journey with our comprehensive gym website. Seamlessly manage payments, access user-friendly dashboards for clients, trainers, and admins. Schedule personalized training sessions, explore insightful blogs, and engage in forums. A holistic fitness experience awaits.',
    technologies: [
      {
        name: 'React',
        icon: react,
      },
      {
        name: 'Tailwind',
        icon: tailwind,
      },
      {
        name: 'Firebase',
        icon: firebase,
      },
      {
        name: 'MongoDB',
        icon: mongo,
      },
      {
        name: 'Express Js',
        icon: express,
      },
    ],
  },
  {
    id: 2,
    name: 'Skill-Swapr',
    liveLink: 'https://skillswapr-a11.web.app/',
    GithubLink: 'https://github.com/mahfuj80/SkillSwapr-client-a11',
    serverLink: 'https://github.com/mahfuj80/SkillSwapr-server-a11',
    images: [skillSwaprWhite, skillSwaprBlack],
    description:
      'Skill-Swapr is your all-in-one platform for job postings, requests, and bids, resembling a streamlined Fiverr. Effortlessly connect with a diverse talent pool, post or bid on jobs, and immerse yourself in a world of seamless skill exchange. Unlock opportunities and foster collaboration on our dynamic and user-friendly platform.',
    technologies: [
      {
        name: 'React',
        icon: react,
      },
      {
        name: 'Tailwind',
        icon: tailwind,
      },
      {
        name: 'Firebase',
        icon: firebase,
      },
      {
        name: 'MongoDB',
        icon: mongo,
      },
      {
        name: 'Express Js',
        icon: express,
      },
    ],
  },
  {
    id: 3,
    name: 'Tech Innovate Hub',
    liveLink: 'https://tech-innovate-hub.web.app/',
    GithubLink: 'https://github.com/mahfuj80/tech-innovate-hub-a10-client',
    serverLink: 'https://github.com/mahfuj80/tech-innovate-hub-a10-server',
    images: [techInnovateHubWhite, techInnovateHubBlack],
    description:
      'Welcome to Tech Innovate Hub! Seamlessly add and manage products by brand with our user-friendly interface. Explore simple CRUD operations, effortlessly customize your cart, and experience the convenience of tech innovation.',
    technologies: [
      {
        name: 'React',
        icon: react,
      },
      {
        name: 'Tailwind',
        icon: tailwind,
      },
      {
        name: 'Firebase',
        icon: firebase,
      },
    ],
  },
  {
    id: 4,
    name: 'Event Management',
    liveLink: 'https://event-management-a9-7fba6.web.app/',
    GithubLink: 'https://event-management-a9-7fba6.web.app/',
    images: [eventManagement],
    description:
      'Embark on an enchanting journey through our Event Management Page. Discover a curated selection of exquisite items and their prices. Transform your vision into reality with seamless booking. Elevate your events and create unforgettable moments with us.',
    technologies: [
      {
        name: 'React',
        icon: react,
      },
      {
        name: 'Tailwind',
        icon: tailwind,
      },
      {
        name: 'Firebase',
        icon: firebase,
      },
      {
        name: 'Java Script',
        icon: javaScript,
      },
    ],
  },
];

export default projects;
