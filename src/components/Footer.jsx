import React from 'react'
import Link from 'next/link'
import {Github, Instagram, Send, UserRound} from "lucide-react";

const Footer = () => {
    return (
        <div className={"max-container text-primary padding-sm border-t mt-10 flex flex-1 flex-col "}>
            <div className={"flex justify-between max-sm:flex-col items-center gap-4"}>

                <div className={"gap-4 flex flex-col"}>
                    <div className={"flex gap-10 "}><span className={"font-bold flex gap-2 items-center font-press"}>
                    <UserRound/>Rector</span>
                        <span className={"text-primary opacity-80"}> <Link
                            href={"mailto:rector.dev@gmail.com"}>rector.dev@gmail.com</Link></span>


                    </div>
                    <div>Front-end developer</div>
                </div>

                <div className={"flex justify-center items-end flex-col"}>
                    <div className={"mr-4 font-press"}>Media</div>
                    <div className={"flex"}> <Instagram/><Github/> <Send/></div>
                </div>
            </div>
            <div className={"text-center "}><span className={"text-amber-500"}><Link
                href={""}>    Rector</Link></span> was here.
            </div>

        </div>
    )
}
export default Footer
