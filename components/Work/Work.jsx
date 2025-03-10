"use client";

import { Timeline } from "../ui/timeline";
import projects from "../../public/projects.json";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import { useEffect, useState } from "react";

export function Work() {
  const [isMdScreen, setIsMdScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 0 && window.innerWidth < 1024); // md: 768px - 1023px
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = projects.map((project) => {
    const imagesToShow = isMdScreen ? project.images.slice(0, 1) : project.images.slice(0,2); // Fix applied here

    return {
      title: project.name,
      tech: "Tech Used:",
      projectDetailsButton: <ProjectDetails project={project} />,
      techIcons: project.techStack.slice(0, 3).map((tech, index) => (
        <div key={index}>
          <img
            src={tech.logo}
            alt={tech.name}
            className="h-6 w-6 inline-block mr-2 object-contain"
          />
        </div>
      )),
      desc: project.description,
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {project.shortDescription}
          </p>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            {imagesToShow.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={project.name}
                className="rounded-lg w-full shadow-md border"
              />
            ))}
          </div>
        </div>
      ),
    };
  });

  return (
    <div>
      <Timeline data={data} />
    </div>
  );
}
