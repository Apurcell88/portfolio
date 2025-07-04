import React from "react";
import { Playfair_Display } from "next/font/google";
import ProjectCard from "../../../components/ProjectCard";
import { allProjects } from "../../../data/allProjects";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const projects = () => {
  return (
    <div>
      <div className="mt-22">
        <h1
          className={`text-4xl font-bold text-center md:text-left mb-12 md:ml-6 ${playfair.className}`}
        >
          Things I&apos;ve <span className="text-purple-600">Built</span>
        </h1>
        <div className="text-center md:text-left md:ml-6">
          <Link href="/" className="text-purple-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>

      <div className="mt-24 max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8">
          {allProjects.map((project, i) => (
            <div key={i} className="w-full md:w-[45%]">
              <ProjectCard key={i} {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default projects;
