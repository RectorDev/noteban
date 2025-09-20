"use client";

import * as React from "react";
import { type ThemeProviderProps } from "next-theme/dist/provider/index.props";
import { ThemeProvider as NextThemeProvider } from "next-theme";
type ColorTheme =
  | "default"
  | "green"
  | "rose"
  | "orange"
  | "violet"
  | "yellow"
  | "red"
  | "blue";

interface ColorThemeContextType {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
}

const ColorThemeContext = React.createContext<
  ColorThemeContextType | undefined
>(undefined);

export function useColorTheme() {
  const context = React.useContext(ColorThemeContext);
  if (context === undefined) {
    throw new Error("useColorTheme must be used within a ColorThemeProvider");
  }
  return context;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [colorTheme, setColorTheme] = React.useState<ColorTheme>("default");

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("color-theme") as ColorTheme;
    if (savedTheme) {
      setColorTheme(savedTheme);
    }
  }, []);

  React.useEffect(() => {
    const root = document.documentElement;

    // Remove all theme classes
    root.classList.remove(
      "theme-green",
      "theme-rose",
      "theme-orange",
      "theme-violet",
      "theme-red",
      "theme-yellow",
      "theme-red"
    );

    // Add the current theme class
    if (colorTheme !== "default") {
      root.classList.add(`theme-${colorTheme}`);
    }

    // Save to localStorage
    localStorage.setItem("color-theme", colorTheme);
  }, [colorTheme]);

  return (
    <NextThemeProvider {...props}>
      <ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>
        {children}
      </ColorThemeContext.Provider>
    </NextThemeProvider>
  );
}
