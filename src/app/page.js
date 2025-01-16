'use client'
import './page.css'
import { Typewriter } from 'react-simple-typewriter'

export default function Home() {
    return (<div className="background max-container padding relative">

        <h1 className={'text-5xl font-press'}>Hello im,<Typewriter words={["Rector",'a Web Developer']} loop={true} cursor={true}/></h1>
    </div>);
}
