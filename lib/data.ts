import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dentalCareImg from "@/public/DentalCare.png";
import enmableImg from "@/public/Enmable.png";
import carhubImg from "@/public/CarHub.png";

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
    date: "2019",
  },
  {
    title: "Full-stack Developer",
    location: "Venezuela",
    description:
      "After enhancing and strengthening the skills and knowledge acquired earlier and during the bootcamp, I decided to start working as a freelance developer.",
    icon: React.createElement(FaReact),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "Currently looking for a job",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "DentalCare",
    description:
      "Project focused on developing an administrative platform, appointment scheduling, and other functionalities for a Medical Clinic in Venezuela.",
      tags: ["React", "Postgres", "Express.js", "Node.js", "Redux", "Tailwind", "Resend", "React-Spring", "Google Maps", "0Auth2.0", "React Toast"],
      imageUrl: dentalCareImg,
      url:'https://consultorio-chi.vercel.app/'
  },
  {
    title: "Enmable Ecommerce",
    description:
      "Project focused on developing an e-commerce platform for a hybrid electronics store in Venezuela.",
      tags: ["React", "Postgres", "Express.js", "Node.js", "Redux", "Tailwind", "Email js", "React-Spring", "Google Maps", "Auth 0", "React Toast"],
    imageUrl: enmableImg,
    url:'https://e-commerce-1-one.vercel.app/'
  },
  {
    title: "Car Rent app",
    description:
      "This project centered around developing a Landing page for filtering and sorting cars, which will serve as the foundation for creating a car showcase and an online car rental and appointment scheduling application.",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "Framer Motion"],
    imageUrl: carhubImg,
    url:'https://car-rent-app-beta.vercel.app/'
  },
  

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
