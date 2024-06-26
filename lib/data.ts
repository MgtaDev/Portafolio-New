import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dentalCareImg from "../public/Dentalcare.png";
import enmableImg from "../public/Enmable.png";
import carhubImg from "../public/CarHub.png";
import NetflixClone from '../public/NetlfixClone.png'
import Touluse from '../public/Toulouse.png'
import Havre from '../public/Havre.png'
import independant from '../public/independant.png'
import Reims from '../public/Reims.png'
import K from '../public/KontrolFreek.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Henry Bootcamp",
    location: "Argentina",
    description:
      " I certify myself as a fullstack developer after completing five months of intensive study in the bootcamp program.",
    icon: React.createElement(LuGraduationCap),
    date: "March - Sep 2023",
  },
  {
    title: "Full-stack Developer",
    location: "Venezuela",
    description:
      "After enhancing and strengthening the skills and knowledge acquired earlier and during the bootcamp working in freelance and personal projects, I decided to take a new step as a developer in any professional company.",
    icon: React.createElement(FaReact),
    date: "Sep 2023",
  },
  {
    title: "Freelance Developer",
    location: "Remote",
    description:
      "I am currently working as a freelance developer for months now, and applying for positions in foreign companies.",
    icon: React.createElement(CgWorkAlt),
    date: "Present",
  },
] as const;

export const projectsData = [
{
    title: "KontrolFreek Gaming",
    description:
    "Project focused on developing an e-commerce platform for kontrolfreek store in Venezuela.",
    tags: ["React", "Postgres", "Express.js", "Node.js", "Redux", "Tailwind", "Email.js", "Framer Motion", "Auth 0", "Intersection-Observer"],
    imageUrl: K,
    url:'https://kontrol-freek-front.vercel.app/'
  },
{
    title: "DISTRIBUTION EN REIMS",
    description:
    "Info-blog created with a personalized CMS, HTML and CSS and other tools from the CMS for a French Tech Company wich is developing his own CMS.",
    tags: ["CMS", "HTML", "CSS"],
    imageUrl: Reims,
    url:'https://www.distribution-prospectus-reims.fr/'
  },
  {
    title: "DISTRIBUTION INDEPENDANT",
    description:
    "Info-blog created with a personalized CMS, HTML and CSS and other tools from the CMS for a French Tech Company wich is developing his own CMS.",
    tags: ["CMS", "HTML", "CSS"],
    imageUrl: independant,
    url:'https://job-distributeur.fr/'
  },
  {
    title: "DentalCare, a Web Booking App",
    description:
      "Project focused on developing an administrative platform, appointment scheduling, and other functionalities for a Medical Clinic in Venezuela.",
      tags: ["React", "Postgres", "Express.js", "Node.js", "Redux", "Tailwind", "Resend", "React-Spring", "Google Maps", "Firebase"],
      imageUrl: dentalCareImg,
      url:'https://consultorio-chi.vercel.app/'
  },
  {
    title: "DISTRIBUTION DE FLYERS À TOULOUSE ",
    description:
    "Info-blog created with apersonalized CMS, HTML and CSS and other tools from the CMS for a French Tech Company wich is developing his own CMS.",
    tags: ["CMS", "HTML", "CSS"],
    imageUrl: Touluse,
    url:'https://www.distribution-flyers-toulouse.fr/index.html'
  },
  {
    title: "Netflix Clone",
    description:
      "Project focused on developing an Netflix clone with similar functionalities and firebase authenticaction",
      tags: ["React", "MongoDb", "Express.js", "Node.js", "Redux", "Styled-Components", "Firebase", "Framer Motion", "Resend" , "React Toast"],
    imageUrl: NetflixClone,
    url:'https://netflixx-clone-i6im.vercel.app/'
  },
  {
    title: "Carhub, a Car Rent app",
    description:
      "This project centered around developing a Landing page for filtering and sorting cars, which will serve as the foundation for creating a car showcase and an online car rental and appointment scheduling application.",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "Framer Motion"],
    imageUrl: carhubImg,
    url:'https://car-rent-app-beta.vercel.app/'
  },
  {
    title: "MgtaTech Ecommerce",
    description:
      "Project focused on developing an e-commerce platform for a hybrid electronics store in Venezuela.",
      tags: ["React", "Postgres", "Express.js", "Node.js", "Redux", "Tailwind", "Email js", "React-Spring", "Google Maps", "Auth 0", "React Toast"],
    imageUrl: enmableImg,
    url:'https://e-commerce-1-one.vercel.app/'
  }
  

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
