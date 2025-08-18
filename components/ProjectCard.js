/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectCard = ({ title, description, image, tags, link, github }) => {
  return (
    <div className="my-8 rounded-xl shadow-md overflow-hidden bg-white dark:bg-zinc-900 flex flex-col w-full max-w-sm">
      {/* Image */}
      <img
        src={image}
        alt="Project cover"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>

          <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-4">
            {description}
          </p>

          <div className="flex flex-wrap mt-2 gap-2 justify-center">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex gap-4 justify-center">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline"
            >
              Live
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
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
