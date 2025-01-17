'use client'
import './page.css'
import {Typewriter} from 'react-simple-typewriter'
import {Button} from "@/components/ui/button";
import {ArrowRight, MailOpen, Quote} from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
    return (<div className="mx-auto my-0 max-w-screen-xl mt-10 padding justify-center flex flex-col ">

        <section id={"get-started"}>
            <div className={"relative flex justify-between  items-center gap-4 max-lg:flex-col"}>
                <div>
                    <h1 className={'text-2xl ml-1 font-press  max-md:h-20'}>Hello im, <span
                        className="absolute max-lg:relative"><Typewriter
                        delaySpeed={10000}
                        words={["Rector", 'a Web Developer']}
                        loop={true} cursor={true}/></span></h1>
                    <p className={'font-roboto my-10  font-[400]'}>I craft responsive Websites where technologies meet
                        creativity</p>
                    <Button variant={"outline"}><MailOpen/>Contact me</Button>

                </div>

                <div className={"relative flex justify-center items-end"}>
                    <Image className={"object-contain"} width={350} height={350} src={"/avatar.png"} alt="Brain Rot"/>
                    <div className={"border-border border w-full flex items-center px-1 pos-center -bottom-9"}><span
                        className={"h-4 w-4 bg-border inline-block"}></span> &#xa0;Currently working on <span
                        className={"font-bold text-amber-500"}>&#xa0; <Link href={""}>Nothing</Link></span></div>
                </div>
            </div>
            <div className={"max-container my-20 sm:my-32 mx-auto w-fit flex justify-center items-center flex-col"}>
                <div
                    className={"  self-center border-border border p-3 sm:p-6 relative "}>
                    <div className={"flex absolute -top-1/4 bg-background p-2 text-border"}><Quote/></div>
                    <h2 className={"text-2xl font-roboto font-medium"}>A man's manners are due to his wealth.</h2>
                </div>
                <div className={"border-border self-end border font-roboto text-xl p-2"}>Mr.Yakarim</div>
            </div>
        </section>
        <section id={"projects"}>
            <div>

                <div className={"flex justify-between items-center w-full"}>

                    <div className={"font-press text-2xl flex items-center"}># <h2> projects</h2>
                        <div className={"h-[1px] ml-1 flex-shrink-0 w-1/4 md:px-44 bg-amber-500"}/>
                    </div>


                    <div className={"flex border-b-2 border-border"}>View all <ArrowRight/></div>
                </div>
                <div className={"flex mt-8 sm:mt-16 justify-center gap-10  xl:justify-between flex-wrap "}>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>

            </div>

        </section>
    </div>);
}
