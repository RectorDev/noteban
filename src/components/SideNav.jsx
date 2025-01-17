import React from 'react'
import {Github, Instagram, Send} from "lucide-react";
import Link from "next/link";

const SideNav = () => {
    return (
        <div className={'fixed right-0 top-40 flex items-center justify-center flex-col gap-3'}>
            <div className={"flex items-center"}>

                <div><Link href={"https://github.com/RectorDev"}> <Github/></Link></div>
                <div className={"h-[1px] w-3 bg-border"}/>
            </div>
            <div className={"flex items-center"}>

                <div><Link href={""}> <Instagram/></Link></div>

                <div className={"h-[1px] w-3 bg-border"}/>

            </div>
            <div className={"flex items-center"}>
                <div>
                    <Link href={""}> <Send/></Link></div>
                <div className={"h-[1px] w-3 bg-border"}/>

            </div>
        </div>
    )
}
export default SideNav
