import ProjectCard from "@/components/ProjectCard";
import ProjectCardSm from "@/components/ProjectCard_sm";
import React from "react";

const page = () => {
  return (
    <div className="padding my-0 mx-auto max-w-screen-xl">
      <div>
        <h2 className="font-press text-2xl">
          <span className="text-amber-500">/</span>about-me
        </h2>
        <p className="my-4 sm:my-6 ml-2">List of my projects</p>
      </div>
      <section id="complete-apps" className="">
        <div className={"flex justify-between items-center w-full"}>
          <div className={"font-press text-2xl flex items-center"}>
            <span className="text-amber-500 italic">#</span>&#xa0;<h2> complete-apps</h2>
            <div className={"h-[1px] ml-1 flex-shrink-0 w-1/4 md:px-44 bg-amber-500"} />
          </div>
        </div>

        {/* {content} */}
        <div className="my-8 sm:my-12">
          <ProjectCard />
        </div>
      </section>
      <section id="complete-apps" className="">
        <div className={"flex justify-between items-center w-full"}>
          <div className={"font-press text-2xl flex items-center"}>
            <span className="text-amber-500 italic">#</span>&#xa0;<h2>small-projects</h2>
            <div className={"h-[1px] ml-1 flex-shrink-0 w-1/4 md:px-44 bg-amber-500"} />
          </div>
        </div>

        {/* {content} */}
        <div className="my-8 sm:my-12">
          <ProjectCardSm/>
        </div>
      </section>
    </div>
  );
};

export default page;
