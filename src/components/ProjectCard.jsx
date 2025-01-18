import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Code, Terminal } from "lucide-react";
import Link from "next/link";

const ProjectCard = ({
  cover = "/elie.jpg",
  techs = "React Express Python Discord.js HTML Flask Node.js",
  title = "Title",
  detail = "Just something what ever ",
  cached = true,
  link = "#",
  cache = "#",
}) => {
  return (
    <div className={"border border-border font-roboto w-[350px]"}>
      <div>
        <Image className={"object-contain"} width={350} height={250} src={cover} alt={"Project Cover"} />
      </div>
      <div className={"p-2 border-b border-border leading-8 text-zinc-700"}>{techs}</div>
      <div className={"font-semibold text-2xl px-4 py-6"}>
        <h3>{title}</h3>
      </div>
      <div className={"px-4 text-zinc-700"}>{detail}</div>
      <div className={"px-4 py-6 flex gap-4 "}>
        <Button variant={"amber"}>
          {" "}
          <Link className={"flex items-center gap-1"} href={link}>
            Live <Code />
          </Link>{" "}
        </Button>
        {cached && (
          <Button variant={"secondary"}>
            <Link href={cache} className={"flex gap-1 items-center"}>
              {" "}
              Cached <Terminal />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};
export default ProjectCard;
