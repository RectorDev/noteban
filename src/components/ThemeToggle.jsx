'use client';
import {useEffect, useState} from 'react';
import {Toggle} from "@/components/ui/toggle"
import {Sun, Moon} from 'lucide-react';

export default function ThemeToggle() {

    const [theme, setTheme] = useState(
        typeof window !== undefined && localStorage.getItem('theme') === 'dark'
            ? 'dark'
            : 'light'
    );

    useEffect(() => {
        console.log()

        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    return (
        <Toggle
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="px-2 py-1 text-sm font-medium bg-gray-200 bg-secondary text-primary rounded"
        >
            <div >
                {theme === 'dark' ? <Moon/> : <Sun/>}</div>
        </Toggle>
    );
}