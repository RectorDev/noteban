import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Code } from "lucide-react";

const ProjectCard_sm = ({
  techs = "too  oss osos",
  title = "YouBot",
  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, vitae!",
  btn = "git",
  link = "#",
}) => {
  return (
    <div className="border w-1/3 border-border">
      <p className="p-2 border-b border-border">{techs}</p>
      <h3 className="py-4 px-3 text-xl">{title}</h3>
      <p className="px-4">{desc}</p>
      <div className="px-4 py-5 ">
        <Button  variant={"amber"}  >
          <Link className="flex gap-1 items-center" href={link}>{btn}<Code/></Link>
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard_sm;
