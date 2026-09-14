import fitnessTrackerBlack from '@/src/assets/Projects/fitnessTrackerBlack.png';
import fitnessTrackerWhite from '@/src/assets/Projects/fitnessTrackerWhite.png';
import skillSwaprBlack from '@/src/assets/Projects/skillSwaprBlack.png';
import skillSwaprWhite from '@/src/assets/Projects/skillSwaprWhite.png';
import techInnovateHubBlack from '@/src/assets/Projects/techInnovateHubBlack.png';
import techInnovateHubWhite from '@/src/assets/Projects/techInnovateHubWhite.png';
import eventManagement from '@/src/assets/Projects/eventManagement.png';

import react from '@/src/assets/icons/react.png';
import mongo from '@/src/assets/icons/mongo.png';
import tailwind from '@/src/assets/icons/tailwind.png';
import firebase from '@/src/assets/icons/firebase.png';
import express from '@/src/assets/icons/express.png';
import javaScript from '@/src/assets/icons/JavaScript.png';

const projects = [
  {
    id: 1,
    name: "Fitness Tracker",
    tagline: "Comprehensive Full-Stack Gym Management & Tracking Platform",
    featured: true,
    category: "fullstack",
    liveLink: "https://fitness-tracker-a12.web.app/",
    GithubLink: "https://github.com/mahfuj80/Fitness-Tracker-Client-A12",
    serverLink: "https://github.com/mahfuj80/Fitness-Tracker-Server-A12",
    images: [fitnessTrackerBlack, fitnessTrackerWhite],
    description:
      "A complete gym and health portal featuring role-based dashboards (Admin, Trainer, Member), Stripe payment integration, personalized training session booking, forums, and community wellness blogs.",
    highlights: [
      "Role-based access control (RBAC) with Firebase Auth & JWT",
      "Stripe payment gateway integration for monthly subscriptions",
      "Dynamic workout scheduling and real-time community forum",
    ],
    technologies: [
      { name: "React", icon: react },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "Firebase", icon: firebase },
      { name: "MongoDB", icon: mongo },
      { name: "Express.js", icon: express },
    ],
  },
  {
    id: 2,
    name: "Skill-Swapr",
    tagline: "Micro-Services Marketplace for Freelance Skill Exchange",
    featured: true,
    category: "fullstack",
    liveLink: "https://skillswapr-a11.web.app/",
    GithubLink: "https://github.com/mahfuj80/SkillSwapr-client-a11",
    serverLink: "https://github.com/mahfuj80/SkillSwapr-server-a11",
    images: [skillSwaprWhite, skillSwaprBlack],
    description:
      "Streamlined gig and freelance marketplace connecting buyers and service providers. Enables user job postings, real-time bid evaluations, project deadlines, and status workflow management.",
    highlights: [
      "Real-time bid management and interactive applicant review",
      "Category-based talent search with responsive filtering",
      "Secure REST APIs with MongoDB aggregation pipelines",
    ],
    technologies: [
      { name: "React", icon: react },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "Firebase", icon: firebase },
      { name: "MongoDB", icon: mongo },
      { name: "Express.js", icon: express },
    ],
  },
  {
    id: 3,
    name: "Tech Innovate Hub",
    tagline: "Brand-Centric E-Commerce & Tech Hardware Catalog",
    featured: false,
    category: "frontend",
    liveLink: "https://tech-innovate-hub.web.app/",
    GithubLink: "https://github.com/mahfuj80/tech-innovate-hub-a10-client",
    serverLink: "https://github.com/mahfuj80/tech-innovate-hub-a10-server",
    images: [techInnovateHubWhite, techInnovateHubBlack],
    description:
      "Modern electronics and tech gadget store with multi-brand inventory management, real-time cart synchronization, and complete CRUD product lifecycle handling.",
    highlights: [
      "Custom brand filtering with instant catalog updates",
      "Cart state management with persistent storage",
      "Interactive product evaluation with dynamic ratings",
    ],
    technologies: [
      { name: "React", icon: react },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "Firebase", icon: firebase },
      { name: "MongoDB", icon: mongo },
    ],
  },
  {
    id: 4,
    name: "Event Management",
    tagline: "Interactive Booking & Event Production Portal",
    featured: false,
    category: "frontend",
    liveLink: "https://event-management-a9-7fba6.web.app/",
    GithubLink: "https://event-management-a9-7fba6.web.app/",
    images: [eventManagement],
    description:
      "Showcase of exquisite corporate and private event services with interactive quotation calculators, instant booking inquiries, and customer testimonials.",
    highlights: [
      "Dynamic service packages with cost estimates",
      "Firebase authentication with protected user bookings",
      "Mobile-optimized fluid layouts and photo galleries",
    ],
    technologies: [
      { name: "React", icon: react },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "Firebase", icon: firebase },
      { name: "JavaScript", icon: javaScript },
    ],
  },
];

export default projects;
