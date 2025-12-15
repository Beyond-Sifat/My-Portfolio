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

    // bg-gradient-to-br from-gray-100 via-blue-100 to-purple-100 dark:bg-gradient-to-br dark:from-slate-900 dark:via-gray-900 dark:to-slate-800

    return (
        <nav
            className='fixed top-0 w-full z-50 backdrop-blur-sm border-b border-gray-200/20 dark:border-gray-700/30'
        >
            <div className='flex justify-between items-center px-6 py-5'>

                <div className='text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'>
                    <Link to='/'> &lt;BeyondSifat/&gt;</Link>
                </div>

                <ul className='hidden md:flex items-center gap-6'>
                    <button
                        onClick={themeToggle}
                        className="rounded-full p-2 shadow-md shadow-purple-400/30 dark:shadow-blue-400/30 cursor-pointer text-gray-600 hover:text-purple-500 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-300 ease-in-out bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700"
                    >
                        {theme === "light" ? <Moon /> : <Sun />}
                    </button>
                    {navLinks.map((links) => (
                        <li key={links}>
                            <button
                                onClick={() => handleScroll(links)}
                                className='text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 cursor-pointer'>
                                {links}
                            </button>

                        </li>
                    ))}

                </ul>
                <div className='md:hidden flex items-center gap-3'>
                    <button
                        onClick={themeToggle}
                        className="rounded-full p-2 shadow-md shadow-purple-400/30 dark:shadow-blue-400/30 cursor-pointer text-gray-600 hover:text-purple-500 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-300 ease-in-out bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700"
                    >
                        {theme === "light" ? <Moon /> : <Sun />}
                    </button>
                    <button
                        onClick={() => setOpenMenu(!openMenu)}
                        className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 p-1'>
                        {openMenu ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {openMenu && (
                <div className='md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-4 pt-2 pb-4 space-y-2 border-t border-gray-200/30 dark:border-gray-700/30 shadow-lg'>
                    {navLinks.map((link) => (
                        <li
                            key={link}
                            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200 list-none cursor-pointer font-medium py-3 px-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                            onClick={() => handleScroll(link)}
                        >
                            {link}
                        </li>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;