import { ChevronDown, Download, Facebook, Github, Linkedin, Twitter } from "lucide-react";
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
    return (
        <section className='min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:bg-gray-900bg-gradient-to-br dark:from-gray-900 dark:via-blue-900 dark:to-purple-900'>
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>




            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-10 items-center">
                {/* Text Section */}
                <div className="animation text-center md:text-left">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
                        Hi! I'm{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Sifat
                        </span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 min-h-[2.5rem]">
                        {displayText}
                        <span className="animate-pulse">|</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-12 max-w-2xl leading-relaxed">
                        Crafting exceptional digital experiences with modern technologies.
                        Specialized in building scalable web applications using MongoDB,
                        Express.js, React, Node.js, and Tailwind CSS.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:justify-start justify-center">
                        <button className="px-8 py-4 font-semibold rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                            View My Work
                        </button>
                        <button className="px-8 py-4 font-semibold rounded-full border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition-all duration-300">
                            Get In Touch
                        </button>

                        <a
                            href="#"
                            download
                            className="px-8 py-4 font-semibold rounded-full flex items-center gap-2 border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-all duration-300"
                        >
                            <Download size={18} />
                            Download Resume
                        </a>
                    </div>

                    <div className="flex justify-center md:justify-start gap-4 mt-6">
                        <a
                            href="https://github.com/Beyond-Sifat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                        >
                            <Github className="text-gray-800 dark:text-white" size={20} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                        >
                            <Linkedin className="text-gray-800 dark:text-white" size={20} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                        >
                            <Twitter className="text-gray-800 dark:text-white" size={20} />
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                        >
                            <Facebook className="text-gray-800 dark:text-white" size={20} />
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex justify-center md:justify-end">
                    <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg shadow-blue-200 border-4 border-white">
                        <img
                            src={myPic}
                            alt="Sifat"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="text-white opacity-60" size={32} />
            </div>
        </section>
    );
};

export default Banner;