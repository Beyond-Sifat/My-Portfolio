import { Moon, Sun } from 'lucide-react';
import useDarkTheme from '../hooks/useDarkTheme';
import React, { useState } from 'react';
import { Link } from 'react-router';
const navLinks = ['Home', 'About', 'Skills', 'Education', 'Projects', 'Contact']
const Navbar = () => {
    const { theme, themeToggle } = useDarkTheme()
    const [openMenu, setOpenMenu] = useState(false);

    const handleScroll = (id) => {
        const section = document.getElementById(id.toLowerCase());
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setOpenMenu(false);
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/75 backdrop-blur border-b border-gray-200 dark:border-gray-800">
            <div
                className="container mx-auto px-6 py-5 flex items-center justify-between">
                {/* Brand */}
                <Link className="flex items-baseline gap-1 select-none">
                    <span
                        className="text-xl font-semibold tracking-wide
            bg-[linear-gradient(90deg,_#000_0%,_#2b2b2b_50%,_#6a6a6a_100%)]
            dark:bg-[linear-gradient(90deg,_#fff_0%,_#cfcfcf_50%,_#9a9a9a_100%)]
            bg-clip-text text-transparent
        "
                    >
                        &lt;Beyond
                    </span>
                    <span className="text-xl font-light text-gray-600 dark:text-gray-400">
                        Sifat/&gt;
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link}>
                            <button
                                onClick={() => handleScroll(link)}
                                className="
                text-sm font-medium
                text-gray-600 dark:text-gray-400
                hover:text-black dark:hover:text-white
                transition-colors
            "
                            >
                                {link}
                            </button>
                        </li>
                    ))}

                    {/* Theme Toggle */}
                    <button
                        onClick={themeToggle}
                        className="ml-2 p-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-500 dark:hover:border-gray-400 transition">
                        {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
                    </button>
                </ul>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setOpenMenu(!openMenu)}
                    className="md:hidden
                            text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                >
                    {openMenu ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {openMenu && (
                <div
                    className="md:hidden bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
                    <ul className="px-6 py-4 space-y-3">
                        {navLinks.map((link) => (
                            <li
                                key={link}
                                onClick={() => handleScroll(link)}
                                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                                {link}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>

    );
};

export default Navbar;