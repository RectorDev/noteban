'use client';

import { useEffect, useState } from 'react';
import { Toggle } from "@/components/ui/toggle";
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light"); // Default to "light"

    useEffect(() => {
        // Check if localStorage is available and set the initial theme
        if (typeof window !== "undefined") {
            const storedTheme = localStorage.getItem('theme');
            setTheme(storedTheme === 'dark' ? 'dark' : 'light');
        }
    }, []);

    useEffect(() => {
        // Apply the theme to the document and update localStorage
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
            <div>
                {theme === 'dark' ? <Moon /> : <Sun />}
            </div>
        </Toggle>
    );
}
