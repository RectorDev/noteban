'use client'
import './page.css'
import {Typewriter} from 'react-simple-typewriter'
import {Button} from "@/components/ui/button";
import {MailOpen} from "lucide-react";
import React from "react";
import Image from "next/image";

export default function Home() {
    return (<div className="mx-auto my-0 max-w-screen-xl mt-10 padding ">
        <div className={"relative flex justify-between  items-center gap-4 max-lg:flex-col"}>
            <div>
                <h1 className={'text-2xl ml-1 font-press text-nowrap max-lg:text-wrap'}>Hello im, <span className="absolute max-lg:relative"><Typewriter
                    words={["Rector", 'a Web Developer']}
                    loop={true} cursor={true}/></span></h1>
                <p className={'font-roboto my-10  font-[400]'}>I craft responsive Websites where technologies meet
                    creativity</p>
                <Button className={"bg-primary"}><MailOpen/>Contact me</Button>

            </div>

            <div className={"relative flex justify-center items-end"}>
                <Image className={"object-contain"} width={350} height={350} src={"/avatar.png"} alt="Brain Rot"/>
                <div className={"border-border border w-full flex items-center px-1 pos-center -bottom-9"}><span
                    className={"h-4 w-4 bg-border inline-block"}></span> &#xa0;Currently working on <span
                    className={"font-bold text-amber-500"}>&#xa0; Nothing</span></div>
            </div>
        </div>
    </div>);
}
