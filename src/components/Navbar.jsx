
import dynamic from 'next/dynamic'
import React from 'react'
import {MailOpen} from "lucide-react"
import {Button} from "@/components/ui/button"
import ThemeToggle from "@/components/ThemeToggle";
import {NavMenu} from "@/components/Navmenu";
import Link from "next/link";


const Navbar = () => {


    return (<div  className={'max-container padding-x py-4 max-sm:py-6 flex flex-1 justify-between border-b border-border items-center'}>
        <div className={'text-2xl font-press text-primary'}><Link href="/"> Brain Rot</Link></div>
        <div className={'font-roboto font-bold max-md:hidden'}>
            <ul className={"flex gap-2 "}>

                <li><NavMenu/></li>
                <li>
                    <div className={'w-[1px] h-full bg-primary'}></div>
                </li>
                <li><ThemeToggle /></li>
                <li>
                    <div className={'w-[1px] h-full bg-primary'}></div>
                </li>

                <li><Button className={"bg-primary"}><MailOpen/>Contact me
                </Button></li>
            </ul>
        </div>
    </div>)
}
export default Navbar
