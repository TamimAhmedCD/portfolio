"use client";

import { MagicCard } from "../magicui/magic-card";
import { useTheme } from "next-themes";

const ServicesCard = ({ icon: Icon, title, description }) => {
  const { theme } = useTheme();
  return (
    <div>
      <div className="group relative">
        <MagicCard className="relative glass rounded-2xl p-8 gradient-border transition-all duration-300 hover:-translate-y-1" gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
          <div className="w-14 h-14 rounded-xl  flex items-center justify-center mb-6 animate-float">
            <Icon className="w-7 h-7" strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-bold">
            {title}
          </h3>
          <p className="dark:text-gray-400 leading-relaxed">{description}</p>
        </MagicCard>
      </div>
    </div>
  );
};

export default ServicesCard;
