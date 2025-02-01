"use client";
import "./page.css";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MailOpen, Quote } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import Discord from "@/../public/discord.svg";
export default function Home() {
  return (
    <div className="mx-auto my-0 max-w-screen-xl mt-10 padding justify-center flex flex-col ">
      <section id={"get-started"}>
        <div className={"relative flex justify-between  items-center gap-4 max-lg:flex-col"}>
          <div>
            <h1 className={"text-2xl ml-1 font-press  max-md:h-20"}>
              Hello im,{" "}
              <span className="absolute max-lg:relative">
                <Typewriter delaySpeed={10000} words={["Rector", "a Web Developer"]} loop={true} cursor={true} />
              </span>
            </h1>
            <p className={"font-roboto my-10  font-[400]"}>I craft responsive Websites where technologies meet creativity</p>
            <Button variant={"amber"}>
              <MailOpen />
              Contact me
            </Button>
          </div>

          <div className={"relative flex justify-center items-end"}>
            <Image className={"object-contain"} width={350} height={350} src={"/avatar.png"} alt="Brain Rot" />
            <div className={"border-border border w-full flex items-center px-1 pos-center -bottom-9"}>
              <span className={"h-4 w-4 bg-border inline-block"}></span> <span className="text-amber-500"></span>&#xa0;Currently working on{" "}
              <span className={"font-bold text-amber-500"}>
                &#xa0; <Link href={""}>Nothing</Link>
              </span>
            </div>
          </div>
        </div>
        <div className={"max-container my-20 sm:my-32 mx-auto w-fit flex justify-center items-center flex-col"}>
          <div className={"  self-center border-border border p-3 sm:p-6 relative "}>
            <div className={"flex absolute -top-1/4 bg-background p-2 text-border"}>
              <Quote />
            </div>
            <h2 className={"text-2xl font-roboto font-medium"}>A man's manners are due to his wealth.</h2>
          </div>
          <div className={"border-border self-end border font-roboto text-xl p-2"}>Mr.Yakarim</div>
        </div>
      </section>
      <section id={"projects"}>
        <div>
          <div className={"flex justify-between items-center w-full"}>
            <div className={"font-press text-2xl flex items-center"}>
              <span className="text-amber-500 italic">#</span>&#xa0;<h2> projects</h2>
              <div className={"h-[1px] ml-1 flex-shrink-0 w-1/4 md:px-44 bg-amber-500"} />
            </div>

            <div className={"flex border-b-2 border-border"}>
              View all <ArrowRight />
            </div>
          </div>
          <div className={"flex mt-8 sm:mt-16 justify-center gap-10  xl:justify-between flex-wrap "}>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </section>

      {/* {new Section} */}
      <section id={"skills"} className={"sm:mt-16 mt-10"}>
        <div>
          <div className={"flex justify-between items-center w-full"}>
            <div className={"font-press text-2xl flex items-center ital"}>
              <span className="text-amber-500 italic">#</span>&#xa0;<h2> Skills</h2>
              <div className={"h-[1px] ml-1 flex-shrink-0 w-1/4 md:px-44 bg-amber-500"} />
            </div>
          </div>

          {/* {skills start} */}
          <div className="flex max-md:flex-col items-center gap-4 mt-8 sm:mt-16">
            {/* {skill paper} */}
            <div>
              <Image className="object-cover aspect-square" src={"/elie.jpg"} height={375} width={375} alt="Cover" />
            </div>
            {/* {skill cards} */}
            <div className="flex flex-1 flex-wrap gap-4 justify-center ">
              <SkillCard title="Languages" text="JavaScript Python" />
              <SkillCard title="Databases" text="Mongo SQlite" />
              <SkillCard title="Tools" text="VSCode WebStorm Linux Git Notion GPT Shadcn" />
              <SkillCard title="Other" text="HTML CSS" />
              <SkillCard title="Frameworks" text="Next.js Tailwind Lucide" />
            </div>
          </div>
        </div>
      </section>

      <section id="about-me" className="sm:my-16 my-8">
        {/* {title} */}
        <div className={"flex justify-between items-center w-full"}>
          <div className={"font-press text-2xl flex items-center ital"}>
            <span className="italic text-amber-500"> #</span>&#xa0;<h2> About me</h2>
            <div className={"h-[1px] ml-1 flex-shrink-0 w-1/4 md:px-44 bg-amber-500"} />
          </div>
        </div>
        {/* content */}
        <div className="flex sm:my-16 my-8 ">
          <div className="font-roboto text-wrap text-zinc-700 w-1/2">
            <p>
              I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
            </p>
            <p className="my-12 sm:my-20">
              Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online.
              I always strive to learn about the newest technologies and frameworks.
            </p>
            <div className="text-primary">
              <Button variant={"amber"}>
                Read more
                <ArrowRight />
              </Button>
            </div>
          </div>
          {/* {picture side} */}
          <div className="w-1/2 flex relative justify-center">
            <Image className="object-cover aspect-[9/16]" src={"/elie.jpg"} height={350} width={250} alt="Picture of man" />
            <div className="absolute pos-center bottom-0 w-full h-[2px] bg-amber-500" />
          </div>
        </div>
      </section>

      <section id="contact" className="sm:my-16 my-8">
        <div className={"font-press text-2xl flex items-center"}>
          #&#xa0;<h2>Contact</h2>
          <div className={"h-[1px] ml-1 flex-shrink-0 w-1/4 md:px-44 bg-amber-500"} />
        </div>
        {/* {content} */}
        <div className="flex items-center relative max-sm:flex-col max-h-60 sm:h-52 ">
          <div className="flex flex-1">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</div>
          <div className="absolute max-sm:mt-6 max-sm:static bottom-0 right-0 border border-border flex flex-col gap-4 p-2 flex-1 ">
            <p>Message me here</p>
            <div className="flex gap-2 text-zinc-700">
              <Mail /> rector.dev@gmail.com
            </div>
            <div className="flex gap-2 text-zinc-700">
              <Image src={Discord} height={25} width={25} alt="discord" />
              Rector43
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
