/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const ProjectCard = ({ title, description, image, tags, link, github }) => {
  return (
    <div className="my-8 rounded-xl shadow-md overflow-hidden bg-white dark:bg-zinc-900">
      <img
        src={image}
        alt="Project cover"
        width={180}
        height={180}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
        <div className="flex flex-wrap mt-3 gap-2 justify-center">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-4 justify-center">
          {link && (
            <a
              href={link}
              target="_blank"
              className="text-purple-600 hover:underline"
            >
              Live
            </a>
          )}{" "}
          {github && (
            <a
              href={github}
              target="_blank"
              className="text-gray-500 hover:underline"
            >
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
