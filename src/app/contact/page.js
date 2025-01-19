import { Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Discord from "@/../public/discord.svg";
const page = () => {
  return (
    <div className="mx-auto my-0 max-w-screen-xl padding">
      <section className=" font-roboto">
        <div className={"flex justify-between items-center w-full"}>
          <div className={"font-press text-2xl flex items-center ital"}>
            <span className=" text-amber-500"> /</span>&#xa0;<h2> contact</h2>
          </div>
        </div>
        <p className="mt-4">Who am i?</p>
        {/* {content} */}
        <div className="margin-t flex max-md:flex-col gap-6">
          <p className=" text-zinc-700 w-1/3 max-md:w-auto">
            I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
          </p>
          <div className="flex gap-2">
            <div className="border border-border px-3 py-2 h-fit">
              <p className="text-primary">Support me here</p>
              <p className="text-zinc-700">
                <Link href={"#"}>Give me Coffe </Link>
              </p>
            </div>
            <div className="border border-border px-3 py-2 leading-9">
              <p> Message me here</p>
              <div className=" ml-1 text-zinc-700 flex gap-2">
                <Image src={Discord} height={25} width={25} alt="discord" />
                rector43
              </div>
              <div className=" ml-1 text-zinc-700 flex gap-2 items-center">
                <Mail /> rector.dev@gmail.com
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className={"flex justify-between items-center w-full"}>
            <div className={"font-press text-2xl flex items-center ital"}>
              <span className=" text-amber-500"> /</span>&#xa0;<h2>all-media</h2>
            </div>
          </div>
        </div>
        {/* {content} */}
        <div className="flex gap-4 margin-t"> <div><Link className="flex gap-2" href={"#"}><Instagram/>rector_43_</Link></div></div>
      </section>
    </div>
  );
};

export default page;
