import { Code } from 'lucide-react';
import React from 'react';

const AboutMe = () => {
    const stats = [
        { value: "5+", label: "Years Experience" },
        { value: "5+", label: "Projects Completed" },
        // { value: "20+", label: "Happy Clients" },
        { value: "10+", label: "Technologies" }
    ];

    return (
        <section
            id="about"
            // dark:from-gray-900 dark:via-blue-950 dark:to-purple-950
            className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 transition-colors duration-300"
        >
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    About{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Me
                    </span>
                </h2>

                <div className="grid md:grid-cols-2 max-w-6xl mx-auto items-center gap-12">

                    <div className="space-y-6 text-center md:text-left">
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            I started my coding journey in <strong>September 2024</strong> by teaching myself the basics.
                            In <strong>January 2025</strong>, I joined a professional course to strengthen my skills and dive deeper into real-world projects.
                        </p>

                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            I am currently a <strong>frontend-focused MERN developer</strong> with experience in CRUD operations and working with REST APIs on the backend.
                            My favorite part of development is building <strong>creative, user-friendly interfaces</strong> that not only work well but also look great.
                        </p>

                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            Outside of coding, I'm admittedly a bit lazy (😅), but I have a strong interest in <strong>football</strong>
                            and love keeping up with the sport.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            At my core, I'm <strong>curious</strong> and an <strong>explorer</strong> — always trying to learn new things, whether in tech or beyond.
                        </p>


                        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mt-8'>
                            {stats.map((stat, index) => (
                                <div key={index}
                                    className='text-center p-6 bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300'>
                                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                                </div>
                            ))}

                        </div>
                    </div>


                    <div className="relative flex justify-center md:justify-end">
                        <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                            <div className="w-72 h-72 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-inner">
                                <Code size={120} className="text-blue-600 dark:text-blue-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default AboutMe;