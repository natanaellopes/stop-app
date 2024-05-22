"use client"

import { useTheme } from "next-themes"

export const useThemeToggle = () => {
  const { setTheme } = useTheme();

  const setLightTheme = () => {
    setTheme("light");
  }

  const setDarkTheme = () => {
    setTheme("dark");
  }

  const setSystemTheme = () => {
    setTheme("system");
  }

  return {
    setLightTheme,
    setDarkTheme,
    setSystemTheme
  }
}
