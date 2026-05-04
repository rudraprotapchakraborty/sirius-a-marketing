"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"

export function ThemeSwitcher() {
  const { setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme("dark")
  }

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-[1.2rem] w-[1.2rem] -rotate-90 scale-0 transition-all" />
      <Switch checked onCheckedChange={toggleTheme} aria-label="Dark theme enabled" />
      <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
    </div>
  )
}
