import React from "react";

const SkillCard = ({ text = "Yook", title = "Yook" }) => {
  return (
    <div className="border border-border font-roboto w-36 text-md h-fit my-0">
      <div className="border-b broder-border p-2">{title}</div>
      <div className="p-2 text-zinc-700 leading-6">{text}</div>
    </div>
  );
};

export default SkillCard;
