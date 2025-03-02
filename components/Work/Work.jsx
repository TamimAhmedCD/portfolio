import React from "react";
import { Timeline } from "../ui/timeline";
import projects from "../../public/projects.json";

export function Work() {
  const data = projects.projects.map((project) => ({
    title: project.name,
    tech: "Tech Used:",
    techIcons: project.techIcons.map((icon, index) => (
      <span key={index} dangerouslySetInnerHTML={{ __html: icon }} />
    )),
    desc: project.desc,
    view: "✨ View Project",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          {project.shortDesc}
        </p>
        <div className="grid grid-cols-2 gap-4">
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={project.name}
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
