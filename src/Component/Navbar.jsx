import { Moon, Sun } from 'lucide-react';
import useDarkTheme from '../hooks/useDarkTheme';
import React, { useState } from 'react';
const navLinks = ['Home', 'About', 'Projects', 'Contact']
const Navbar = () => {
    const { theme, themeToggle } = useDarkTheme()
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav className='bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:bg-gray-900bg-gradient-to-br dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 fixed top-0 w-full z-50'>
            <div className='flex justify-between items-center px-6 py-5'>

                <div className='text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>
                    &lt;BeyondSifat/&gt;
                </div>

                <ul className='hidden md:flex items-center gap-6'>
                <button
                    onClick={themeToggle}
                    className="rounded-full p-2 shadow-md shadow-purple-400 cursor-pointer text-gray-600 hover:text-purple-400 transition-all ease-in-out dark:bg-white dark:shadow-amber-400 dark:hover:text-amber-400"
                >
                    {theme === "light" ? <Moon /> : <Sun />}
                </button>
                    {navLinks.map((links) => (
                        <li key={links}>
                            <button className='bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent cursor-pointer'>
                                {links}
                            </button>

                        </li>
                    ))}

                </ul>
                <div className='md:hidden'>
                    <button
                        onClick={() => setOpenMenu(!openMenu)}
                        className='text-[#0c1758] dark:text-white'>
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
                <ul className="md:hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-black px-4 pt-2 pb-4 space-y-2 border-t border-dashed border-gray-400">
                    {navLinks.map((link) => (
                        <li
                            key={link}
                            className="text-gray-700 hover:text-blue-600 transition duration-200"
                            onClick={() => setOpenMenu(false)}
                        >
                            {link}
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;