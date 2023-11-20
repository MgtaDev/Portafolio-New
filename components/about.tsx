"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Hello! I'm a junior full-stack developer with experience in various technologies such as React, Redux, JavaScript, Typescript, Sequelize, MongoDB, PostgreSQL, MySQL, Tailwind, Bootstrap, Express, Framer Motion and Node.js.
      <br /><br />
      
       I'm passionate about working on challenging projects and finding creative solutions to complex problems. I'm an autonomous, responsible person with teamwork skills, which has allowed me to work on collaborative projects and be part of efficient development teams.
       <br /><br />
       
        My goal is to continue improving my programming skills and learn new technologies to contribute to more ambitious projects. I love taking on new challenges and working in an environment of innovation and constant growth.
        <br /><br />
        
         If you're considering a web development project, I'm confident that I can add value with my knowledge and skills. Please don't hesitate to contact me!
      </p>

     
    </motion.section>
  );
}
