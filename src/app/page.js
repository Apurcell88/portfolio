import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export default function Home() {
  return (
    <main className="text-center max-h-full">
      <div className="flex flex-col mt-12 gap-7 items-center">
        <h1 className="text-3xl">
          Hi, I&apos;m Adam, <br /> a Web Developer
        </h1>
        <button className="bg-purple-600 w-[37%] h-9 text-sm rounded-md">
          <a href="/projects">View My Work</a>
        </button>
      </div>
      <div className="mt-24">
        <h2 className="text-2xl">Featured Projects</h2>
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}
