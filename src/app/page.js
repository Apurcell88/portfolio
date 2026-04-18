/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 text-center max-h-full">
      {/* HERO SECTION */}
      <motion.div
        className="flex flex-col mt-24 gap-7 items-center md:mt-32"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1
          className={`text-4xl md:text-6xl font-bold leading-snug ${playfair.className}`}
        >
          Hi, I&apos;m Adam, <br /> a Web Developer
        </h1>
        <button className="bg-purple-600 w-[150px] h-9 text-sm md:text-base rounded-md cursor-pointer hover:shadow-[0_4px_12px_rgba(255,255,255,0.3)] transition-shadow duration-300">
          <a href="/projects">View My Work</a>
        </button>
      </motion.div>

      {/* FEATURED PROJECTS */}
      <div className="mt-24">
        <h2 className={`text-3xl font-semibold mb-10 ${playfair.className}`}>
          Featured Projects
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>

      {/* ABOUT ME SECTION */}
      <div
        className={`px-4 my-28 flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto ${playfair.className}`}
      >
        <div className="flex justify-center">
          <img
            src="/images/profile.jpg"
            alt="Adam"
            className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full"
          />
        </div>
        <div className="max-w-md text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-3">About Me</h3>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            I'm a self-taught web developer currently working as a <b>Junior IT Developer,</b>
            where I focus on backend developement, database systems, and improving existing
            workflows. I work extensively with SQL Server, writing and optimizing queries and
            stored procedures, as well as refactoring and testing code in a collaborative team
            environment.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            My background in personal training shaped how I approach development - understanding
            problems deeply, communicating clearly, and building solutions that actually work
            for people. I enjoy building full-stack applications with{" "}
            <span className="text-purple-600">JavaScript</span>,{" "}
            <span className="text-purple-600">Node.js</span>,{" "}
            <span className="text-purple-600">PostgreSQL</span>, and{" "}
            <span className="text-purple-600">Next.js</span>, and I’m always
            exploring new ways to improve both performance and usability.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            I'm currently seeking opportunities in backend or full-stack development, ideally
            remote or in the Orlando area, where I can continue to grow and contribute to
            real-world systems.
          </p>
        </div>
      </div>
    </main>
  );
}
