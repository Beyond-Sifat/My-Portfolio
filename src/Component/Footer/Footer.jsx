// src/components/Footer.jsx
import { Heart, Code2 } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    // bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 dark:from-black dark:via-gray-900 dark:to-slate-900 text-gray-300 dark:text-gray-400
    return (
        <footer className="relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
                {/* <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div> */}
            </div>

            <div className="container mx-auto px-6 py-12 relative z-10">
                {/* Main Footer Content */}
                <div className="text-center space-y-6">
                    {/* Logo/Brand */}
                    {/* <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        &lt;BeyondSifat/&gt;
                    </div> */}
                    <div>
                        <span
                            className="text-3xl font-bold tracking-wide
            bg-[linear-gradient(90deg,_#000_0%,_#2b2b2b_50%,_#6a6a6a_100%)]
            dark:bg-[linear-gradient(90deg,_#fff_0%,_#cfcfcf_50%,_#9a9a9a_100%)]
            bg-clip-text text-transparent
        "
                        >
                            &lt;Beyond
                        </span>
                        <span className="text-3xl font-light text-gray-600 dark:text-gray-400">
                            Sifat/&gt;
                        </span>
                    </div>

                    {/* Quote/Tagline */}
                    <p className="text-lg text-gray-400 dark:text-gray-500 max-w-md mx-auto leading-relaxed">
                        Crafting digital experiences with passion and precision
                    </p>

                    {/* Divider */}
                    <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-auto"></div>

                    {/* Copyright and Credits */}
                    <div className="space-y-3">
                        <p className="text-sm text-gray-400 dark:text-gray-500 font-medium">
                            &copy; {currentYear} Beyond Sifat. All rights reserved.
                        </p>

                        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-600">
                            <span>Designed & Built with</span>
                            <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
                            <span>and</span>
                            <Code2 className="w-4 h-4 text-blue-400" />
                            <span>by Sifat</span>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="pt-4">
                        <p className="text-xs text-gray-500 dark:text-gray-600 mb-2">Built with</p>
                        <div className="flex justify-center items-center gap-3 text-xs">
                            <span className="px-3 py-1 rounded-full bg-gray-800/50 dark:bg-gray-700/50 text-gray-400 dark:text-gray-500 border border-gray-700/30 dark:border-gray-600/30">
                                React
                            </span>
                            <span className="px-3 py-1 rounded-full bg-gray-800/50 dark:bg-gray-700/50 text-gray-400 dark:text-gray-500 border border-gray-700/30 dark:border-gray-600/30">
                                Tailwind CSS
                            </span>
                            <span className="px-3 py-1 rounded-full bg-gray-800/50 dark:bg-gray-700/50 text-gray-400 dark:text-gray-500 border border-gray-700/30 dark:border-gray-600/30">
                                Lucide Icons
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom Border */}
                <div className="mt-8 pt-6 border-t border-gray-700/30 dark:border-gray-600/30">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-600">
                        <span>Making the web a more beautiful place, one project at a time.</span>
                        <span>Version 1.0.0</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;