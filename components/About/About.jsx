import Image from "next/image";
import photo from "../../public/Tamim.jpg";
import { Button } from "../ui/button";
import { GoArrowUpRight } from "react-icons/go";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "../magicui/animated-grid-pattern";

const About = () => {
  return (
    <div id="about" className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg py-10 bg-background md:shadow-xl">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
      <section className="px-5 lg:px-8 xl:px-[8%] relative z-10">
        <div className="">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h6 className="text-neutral-500 dark:text-neutral-400 text-base font-normal leading-relaxed">
                    About me
                  </h6>
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      Our Journey in Web Development
                    </h2>
                    <p className="text-neutral-500 dark:text-neutral-400 text-base font-normal leading-relaxed lg:text-start text-center">
                      From crafting dynamic user interfaces to building scalable
                      backend solutions, we specialize in creating cutting-edge
                      web applications that enhance user experience,
                      performance, and functionality.
                    </p>
                  </div>
                </div>
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                  <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 dark:border-neutral-700 hover:border-gray-400 dark:hover:border-neutral-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-2xl font-bold font-manrope leading-9">
                        Web Development
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed">
                        Building modern, dynamic web applications.
                      </p>
                    </div>

                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 dark:border-neutral-700 hover:border-gray-400 dark:hover:border-neutral-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-2xl font-bold font-manrope leading-9">
                        20+ Projects
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed">
                        Delivering High-Performance Websites & Applications
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full p-3.5 rounded-xl border border-gray-200 dark:border-neutral-700 hover:border-gray-400 dark:hover:border-neutral-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-2xl font-bold font-manrope leading-9">
                        10+ Tech Stacks
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed">
                        Expertise in React, Next.js, MongoDB, Node.js, and More
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 dark:border-neutral-700 hover:border-gray-400 dark:hover:border-neutral-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-2xl font-bold font-manrope leading-9">
                        Secure & Scalable
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed">
                        Fast, secure, and efficient web solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#contact">
                <Button>
                  Contact <GoArrowUpRight />
                </Button>
              </a>
            </div>
            <div className="w-full lg:justify-start justify-center items-start flex">
              <div className="sm:w-[564px] w-full sm:h-[646px] h-full bg-gray-100 dark:bg-neutral-900 rounded-3xl border border-gray-200 dark:border-neutral-600 p-5 flex justify-center items-center">
                <Image
                  className="w-full h-full rounded-2xl object-cover"
                  src={photo}
                  alt="Web Development Team"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
