"use client";

import { ArrowRightIcon } from "lucide-react";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

const ProjectDetails = ({ project }) => {
  console.log(project);
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <AnimatedShinyText className="inline-flex items-center my-4 cursor-pointer justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span className="text-lg">✨ View Project</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{project.name}</DialogTitle>
            <DialogDescription>
            {project.description}
          </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectDetails;
