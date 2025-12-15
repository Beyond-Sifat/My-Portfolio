import { ChevronDown, Download, Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import "./banner.css"
import myPic from "../../assets/Sifat-protfolio.png"

const Banner = () => {
    const [displayText, setDisplayText] = useState('')
    const role = "Junior Frontend-Focused MERN Stack Developer"

    useEffect(() => {
        let index = 0
        const timer = setInterval(() => {
            if (index <= role.length) {
                setDisplayText(role.slice(0, index))
                index++
            } else {
                clearInterval(timer)
            }
        }, 100)
        return () => clearInterval(timer);
    }, []);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };
    // bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-gray-900 dark:to-slate-800
    return (
        <section
            className='min-h-screen flex items-center justify-center relative overflow-hidden '
        >
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-72 h-72 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                {/* <div className="absolute bottom-20 right-20 w-96 h-96  dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div> */}
                {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r dark:from-blue-600/5 dark:to-purple-600/5 rounded-full blur-2xl"></div> */}
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-10 items-center">
                {/* Text Section */}
                <div className="animation text-center md:text-left">
                    <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6 leading-tight max-md:pt-20">
                        Hi! I'm{" "}
                        <span >
                            Sifat
                        </span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-white mb-8 min-h-[2.5rem] font-medium">
                        {displayText}
                        <span className="animate-pulse text-black dark:text-white">|</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl leading-relaxed">
                        Crafting exceptional digital experiences with modern technologies.
                        Specialized in building scalable web applications using MongoDB,
                        Express.js, React, Node.js, and Tailwind CSS.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col md:flex-row gap-4 md:justify-start justify-center">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="px-8 py-4 font-semibold rounded-full hover:scale-105 transition-all duration-300 bg-black text-white dark:bg-white dark:text-black">
                            View My Work
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-4 font-semibold rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-black dark:text-white dark:shadow-white/10 hover:shadow-lg hover:scale-105 transition-all duration-300">
                            Get In Touch
                        </button>

                        <a
                            href="https://drive.google.com/uc?export=download&id=1DUuRq_1qB2gihxrgk1-8z_v4fZvSsIK-"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 font-semibold rounded-full flex items-center gap-2 justify-center md:justify-start hover:scale-105 transition-all duration-300 bg-black text-white border border-gray-600 dark:shadow-white/10 hover:shadow-lg"
                        >
                            <Download size={18} />
                            My Resume
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center md:justify-start gap-4 mt-8">
                        <a
                            href="https://github.com/Beyond-Sifat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-gray-200/80 dark:bg-gray-700/80 transition-all duration-300 hover:scale-110 group"
                        >
                            <Github className="text-gray-800 dark:text-gray-200 group-hover:fill-black" size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/beyond-sifat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-gray-200/80 dark:bg-gray-700/80 transition-all duration-300 hover:scale-110 group"
                        >
                            <Linkedin className="text-gray-800 dark:text-gray-200 group-hover:text-blue-500" size={20} />
                        </a>
                        <a
                            href="https://x.com/beyond_sifat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-gray-200/80 dark:bg-gray-700/80 transition-all duration-300 hover:scale-110 group"
                        >
                            <Twitter className="text-gray-800 dark:text-gray-200 group-hover:fill-blue-400" size={20} />
                        </a>
                        <a
                            href="https://www.facebook.com/beyond.sifat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-gray-200/80 dark:bg-gray-700/80 hover:bg-blue-400 transition-all duration-300 hover:scale-110 group"
                        >
                            <Facebook className="text-gray-800 dark:text-gray-200 group-hover:fill-white group-hover:text-white" size={20} />
                        </a>
                        <a
                            href="https://www.instagram.com/beyond_sifat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-gray-200/80 dark:bg-gray-700/80 transition-all duration-300 hover:scale-110 group"
                        >
                            <Instagram className="text-gray-800 dark:text-gray-200 group-hover:text-white group-hover:fill-black" size={20} />
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex justify-center md:justify-end">
                    <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl dark:shadow-white/10 shadow-black/40 transition-transform duration-300 hover:scale-[1.02]">
                        <img
                            src={myPic}
                            alt="Sifat"
                            className="
                w-full h-full object-cover
                transition-transform duration-500
                hover:scale-105
            "
                        />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="text-black dark:text-white opacity-60" size={32} /> 
            </div>
        </section>
    );
};

export default Banner;