import React from "react";
import Image from "next/image";
import SkillCard from "@/components/SkillCard";
import FactCard from "@/components/FactCard";

const page = () => {
  return (
    <div className="mx-auto my-0 max-w-screen-xl padding">
      <section id="about-me" className="sm:my-16 my-8">
        {/* {title} */}
        <div className={"flex justify-between items-center w-full"}>
          <div className={"font-press text-2xl flex items-center ital"}>
            <span className=" text-amber-500"> /</span>&#xa0;<h2> About me</h2>
          </div>
        </div>
        <p className="font-roboto mt-2">Who am i</p>
        {/* content */}
        <div className="flex sm:my-16 my-8 ">
          <div className="font-roboto text-wrap text-zinc-700 w-1/2">
            <p>Hello, i’m Elias!</p>
            <p className="my-6 sm:my-1-">
              I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
            </p>
            <p>
              Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online.
              I always strive to learn about the newest technologies and frameworks.
            </p>
          </div>
          {/* {picture side} */}
          <div className="w-1/2 flex relative justify-center">
            <Image className="object-cover aspect-[9/16]" src={"/elie.jpg"} height={350} width={250} alt="Picture of man" />
            <div className="absolute pos-center bottom-0 w-full h-[2px] bg-amber-500" />
          </div>
        </div>
      </section>

      <section className={"sm:mt-16 mt-10"}>
        <div>
          <div className={"flex justify-between items-center w-full"}>
            <div className={"font-press text-2xl flex items-center ital"}>
              <span className="text-amber-500 italic">#</span>&#xa0;<h2> Skills</h2>
              <div className={"h-[1px] ml-1 flex-shrink-0 w-1/4 md:px-44 bg-amber-500"} />
            </div>
          </div>

          {/* {skills start} */}
          <div className="gap-4 mt-9 sm:mt-18 mx-auto">
            {/* {skill cards} */}
            <div className="flex flex-wrap gap-4 justify-center ">
              <SkillCard title="Languages" text="JavaScript Python" />
              <SkillCard title="Databases" text="Mongo SQlite" />
              <SkillCard title="Tools" text="VSCode WebStorm Linux Git Notion GPT Shadcn" />
              <SkillCard title="Other" text="HTML CSS" />
              <SkillCard title="Frameworks" text="Next.js Tailwind Lucide" />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-9 sm:mt-18">
        <div>
          <div className={"flex justify-between items-center w-full"}>
            <div className={"font-press text-2xl flex items-center ital"}>
              <span className="text-amber-500 italic">#</span>&#xa0;<h2> my-fun-facts</h2>
              <div className={"h-[1px] ml-1 flex-shrink-0 w-1/4 md:px-44 bg-amber-500"} />
            </div>
          </div>
          {/* {content} */}
          <div className="flex mt-9 sm:mt-18">
            <div className="flex flex-1  flex-wrap gap-4">
              <FactCard text={"yer ye yey ey y y eye ye ye y eeyedsaddsadsad yyeye"} />
              <FactCard text={"yer ye yey ey y y edsadyyeye"} />
              <FactCard text={"yer ye yey ey dsaddasd ye ye y eeye yyeye"} />
              <FactCard text={"yer ye yeysd asdsadd as dasde ye"} />
              <FactCard text={"yer ye yeysd asdsadd as dasde ye"} />
              <FactCard text={"yer ye yeysd asdsadd adsadsadsadsa ad sade"} />
              <FactCard text={"yer ye yey ey sadd as dasde ye ye y eeye yyeye"} />
              <FactCard text={"yer ye yeysd asdsadd as dasde ye"} />
              <FactCard text={"yer ye yeysd asdsadd as dasde ye"} />
              <FactCard text={"yer ye yey  as dasde ye ye y eeye yyeye"} />
            </div>
            <div className="w-1/3 max-lg:hidden">
              <Image className="object-cover aspect-square" src={"/bat.jpg"} width={300} height={300} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
