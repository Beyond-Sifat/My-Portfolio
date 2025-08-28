import { ChevronDown, Download, Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
// import "./banner.css"
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
    return (
        <section className='min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-gray-900 dark:to-slate-800'>
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-300/10 to-purple-300/10 dark:from-blue-600/5 dark:to-purple-600/5 rounded-full blur-2xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-10 items-center">
                {/* Text Section */}
                <div className="animation text-center md:text-left">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-gray-100 mb-6 leading-tight max-md:pt-20">
                        Hi! I'm{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                            Sifat
                        </span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 min-h-[2.5rem] font-medium">
                        {displayText}
                        <span className="animate-pulse text-blue-600 dark:text-blue-400">|</span>
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
                            className="px-8 py-4 font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-400 dark:hover:to-purple-400">
                            View My Work
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-4 font-semibold rounded-full border-2 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-500 dark:hover:bg-blue-400 hover:text-white dark:hover:text-white transition-all duration-300 bg-transparent hover:border-blue-600 dark:hover:border-blue-300">
                            Get In Touch
                        </button>
{/* https://drive.google.com/uc?export=download&id=1DUuRq_1qB2gihxrgk1-8z_v4fZvSsIK- */}
                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 font-semibold rounded-full flex items-center gap-2 border-2 border-green-500 dark:border-green-400 text-green-600 dark:text-green-400 hover:bg-green-500 dark:hover:bg-green-400 hover:text-white dark:hover:text-white transition-all duration-300 justify-center md:justify-start bg-transparent hover:border-green-600 dark:hover:border-green-300"
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
                            className="p-3 rounded-full bg-gray-200/80 dark:bg-gray-700/80 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                        >
                            <Github className="text-gray-800 dark:text-gray-200" size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/syed-sifat2004"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-gray-200/80 dark:bg-gray-700/80 hover:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110 group"
                        >
                            <Linkedin className="text-gray-800 dark:text-gray-200 group-hover:text-white" size={20} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-gray-200/80 dark:bg-gray-700/80 hover:bg-blue-400 dark:hover:bg-blue-500 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110 group"
                        >
                            <Twitter className="text-gray-800 dark:text-gray-200 group-hover:text-white" size={20} />
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-gray-200/80 dark:bg-gray-700/80 hover:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110 group"
                        >
                            <Facebook className="text-gray-800 dark:text-gray-200 group-hover:text-white" size={20} />
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex justify-center md:justify-end">
                    <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl shadow-blue-200/50 dark:shadow-blue-900/30 border-4 border-white/80 dark:border-gray-700/50 backdrop-blur-sm">
                        <img
                            src={myPic}
                            alt="Sifat"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="text-gray-400 dark:text-gray-500 opacity-60 hover:opacity-100 transition-opacity" size={32} />
            </div>
        </section>
    );
};

export default Banner;