"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isRotating, setIsRotating] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleClick = () => {
    setIsRotating(true);
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
      setIsRotating(false);
    }, 300); // Sync with the animation duration
  };

  const isDarkMode = theme === "dark";

  return (
    <button
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
      className="relative flex items-center justify-center w-6 h-6 rounded-full bg-transparent"
      onClick={handleClick}
    >
      <span
        className={`absolute transition-transform duration-300 ${
          isRotating ? "rotate-360" : ""
        }`}
      >
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-400" />
        ) : (
          <Moon className="h-6 w-6 text-gray-600" />
        )}
      </span>
    </button>
  );
}
