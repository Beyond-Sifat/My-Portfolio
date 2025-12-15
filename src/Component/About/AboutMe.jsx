import { Code } from 'lucide-react';
import React from 'react';

const AboutMe = () => {
    const stats = [
        { value: "1+", label: "Years Experience" },
        { value: "5+", label: "Projects Completed" },
        { value: "10+", label: "Technologies" }
    ];
// bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-gray-900 dark:to-slate-800
    return (
        <section
            id="about"
            className="
            transition-colors duration-300 relative overflow-hidden py-20"
        >

            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100">
                    About{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                        Me
                    </span>
                </h2>

                <div className="grid md:grid-cols-2 max-w-6xl mx-auto items-center gap-12">

                    <div className="space-y-6 text-center md:text-left">
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            I started my coding journey in <strong className="text-blue-600 dark:text-blue-400">September 2024</strong> by teaching myself the basics.
                            In <strong className="text-blue-600 dark:text-blue-400">January 2025</strong>, I joined a professional course to strengthen my skills and dive deeper into real-world projects.
                        </p>

                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            I am currently a <strong className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">frontend-focused MERN developer</strong> with experience in CRUD operations and working with REST APIs on the backend.
                            My favorite part of development is building <strong className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">creative, user-friendly interfaces</strong> that not only work well but also look great.
                        </p>

                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            Outside of coding, I'm admittedly a bit lazy (😅), but I have a strong interest in football
                            {" "}and love keeping up with the sport.
                        </p>

                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            At my core, I'm <strong className="text-blue-600 dark:text-blue-400">curious</strong> and an <strong className="text-purple-600 dark:text-purple-400">explorer</strong> — always trying to learn new things, whether in tech or beyond.
                        </p>


                        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mt-8'>
                            {stats.map((stat, index) => (
                                <div key={index}
                                    className='text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl dark:shadow-blue-900/20 dark:hover:shadow-blue-900/30 transition-all duration-300 hover:scale-105 border border-white/20 dark:border-gray-700/30'>
                                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="relative flex justify-center md:justify-end">
                        <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/25 dark:shadow-blue-900/30 hover:scale-105 transition-transform duration-500">
                            <div className="w-72 h-72 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-inner border-4 border-white/50 dark:border-gray-700/50">
                                <Code size={120} className="text-blue-600 dark:text-blue-400 hover:scale-110 transition-transform duration-300" />
                            </div>
                        </div>


                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-300 dark:to-purple-300 rounded-full opacity-60 animate-bounce"></div>
                        <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-300 dark:to-pink-300 rounded-full opacity-60 animate-bounce delay-500"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;