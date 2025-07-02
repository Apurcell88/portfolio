"use client";

import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="text-center max-h-full">
      <motion.div
        className="flex flex-col mt-12 gap-7 items-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl">
          Hi, I&apos;m Adam, <br /> a Web Developer
        </h1>
        <button className="bg-purple-600 w-[37%] h-9 text-sm rounded-md">
          <a href="/projects">View My Work</a>
        </button>
      </motion.div>
      <div className="mt-24">
        <h2 className="text-2xl">Featured Projects</h2>
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
      <div className="px-4 my-14 flex flex-col gap-6">
        <div>
          <img src="/public/profile.png" alt="Adam" />
        </div>
        <div>
          <h3 className="text-2xl">About Me</h3>
          <p>
            I enjoy building web applications with{" "}
            <span className="text-purple-600">JavaScript</span>,{" "}
            <span className="text-purple-600">Node.js</span>, and{" "}
            <span className="text-purple-600">PostgreSQL</span>. I appreciate a
            good philosophical discussion, too.
          </p>
        </div>
      </div>
    </main>
  );
}
