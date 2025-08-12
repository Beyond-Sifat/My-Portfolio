import { useEffect, useState } from "react"

export default function useDarkTheme() {
    const [theme, setTheme] = useState("light")
    const themeToggle = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        document.documentElement.classList.toggle("dark", newTheme === "dark")
    }
    useEffect(() => {
        const storeTheme = localStorage.getItem("theme") || "light"
        setTheme(storeTheme);
        document.documentElement.classList.toggle("dark", storeTheme === "dark")
    }, [])

    return { theme, themeToggle }
}