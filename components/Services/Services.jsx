"use client";

import { Code2, Database, Palette, Rocket, File as Mobile, Gauge } from "lucide-react";
import { DotPattern } from "../magicui/dot-pattern";
import { cn } from "@/lib/utils";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Web Development",
      description:
        "Building fast, responsive web apps with modern technologies and best practices.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Crafting beautiful, intuitive interfaces that deliver exceptional user experiences and drive engagement.",
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description:
        "Supercharging web applications for lightning-fast performance and optimal search engine rankings.",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Engineering robust server-side solutions and scalable APIs that power modern web applications.",
    },
    {
      icon: Mobile,
      title: "Responsive Design",
      description:
        "Creating fluid, adaptive layouts that provide a seamless experience across all devices and platforms.",
    },
    {
      icon: Gauge,
      title: "Technical Consulting",
      description:
        "Guiding technical decisions with expert insights on architecture, technology stack, and development strategy.",
    },
  ];

  return (
    <div
      id="services"
      className="relative px-5 lg:px-8 xl:px-[8%] mt-10 overflow-hidden"
    >
      {/* Background Dot Pattern */}
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
        )}
      />
      
      <div className="text-center mb-20 relative z-10 mt-10">
        <h2>Services</h2>
        <p className="mt-3 text-4xl font-bold sm:text-5xl">
          Elevate Your Digital Presence
        </p>
        <p className="mt-4 max-w-2xl text-xl dark:text-gray-400 mx-auto">
          Transforming ideas into exceptional web experiences with modern
          technology and creative innovation
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
