import React from "react";
import Image from "next/image";

const ProjectCard = ({ title, description, image, tags, link, github }) => {
  return (
    <div>
      <Image src={image} alt="Project cover" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          {tags.map((tag, i) => {
            <span key={i}>{tag}</span>;
          })}
        </div>
        <div>
          {link && (
            <a href={link} target="_blank">
              Live
            </a>
          )}{" "}
          {github && (
            <a href={github} target="_blank">
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
