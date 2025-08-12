import { useEffect, useState } from "react"

export default function useDarkTheme() {
    const [theme, setTheme] = useState("light")
    const themeToggle = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        document.documentElement.classList.toggle("dark", newTheme === "dark")
        localStorage.setItem("theme", newTheme)
    }
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        const defaultTheme = storedTheme || "light"; // ✅ Default is light
        setTheme(defaultTheme);
        document.documentElement.classList.toggle("dark", defaultTheme === "dark");
    }, [])

    return { theme, themeToggle }
}