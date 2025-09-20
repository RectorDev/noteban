"use client";
import { Moon, Sun, Palette } from "lucide-react";

import { useColorTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useTheme from "next-theme";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const { colorTheme, setColorTheme } = useColorTheme();

  const colorThemes = [
    { name: "Default", value: "default" as const, color: "bg-slate-500" },
    { name: "Green", value: "green" as const, color: "bg-green-500" },
    { name: "Rose", value: "rose" as const, color: "bg-rose-500" },
    { name: "Orange", value: "orange" as const, color: "bg-orange-500" },
    { name: "Violet", value: "violet" as const, color: "bg-violet-500" },
    { name: "Red", value: "red" as const, color: "bg-red-500" },
    { name: "Yellow", value: "yellow" as const, color: "bg-yellow-500" },
    { name: "Blue", value: "blue" as const, color: "bg-blue-500" },
  ];

  return (
    <div className="flex items-center gap-2">
      {/* Dark/Light Mode Toggle */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      {/* Color Theme Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Palette className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Select color theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Color Themes</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {colorThemes.map((themeOption) => (
            <DropdownMenuItem
              key={themeOption.value}
              onClick={() => setColorTheme(themeOption.value)}
              className="flex items-center gap-2"
            >
              <div className={`w-4 h-4 rounded-full ${themeOption.color}`} />
              <span>{themeOption.name}</span>
              {colorTheme === themeOption.value && (
                <span className="ml-auto text-xs">✓</span>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
