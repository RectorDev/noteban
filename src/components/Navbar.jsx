'use client'
import {useState} from "react";
import {LucideMenu, LucideX, MailOpen} from "lucide-react"
import {Button} from "@/components/ui/button"
import ThemeToggle from "@/components/ThemeToggle";
import {NavMenu} from "@/components/Navmenu";
import Link from "next/link";


const Navbar = () => {


    const [toggle, setToggle] = useState(false);
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

                <li><Button><MailOpen/>Contact me
                </Button></li>
            </ul>
        </div>
        <div className={'font-roboto fixed top-7 z-10 right-8 font-bold hidden max-md:block'}>
            <div className={'fixed top-7  right-8 z-20'}>{!toggle ? <LucideMenu className={'z-20'} onClick={() => setToggle((prev) => !prev)}/> :
              <LucideX className={'z-20'} onClick={() => setToggle((prev) => !prev)}/>}</div>
            {toggle && <div className={'fixed  h-screen right-0 top-0 min-w-full z-10 bg-slate-600/50'}>


                <div className={'p-4'}><NavMenu/></div>

                <span className={'absolute right-10 bottom-10'}><ThemeToggle/></span>
            </div>}


        </div>
    </div>)
}
export default Navbar
