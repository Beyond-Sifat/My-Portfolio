import { Code } from 'lucide-react';
import React from 'react';

const AboutMe = () => {
    const stats = [
        { value: "1+", label: "Years Experience" },
        { value: "10+", label: "Projects Completed" },
        { value: "10+", label: "Technologies" }
    ];

    return (
        <section
            id="about"
            className="py-20 transition-colors duration-300"
        >
            <div className=" h-1 max-w-2xl bg-gray-300 dark:bg-gray-700 mx-auto mb-16"></div>
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-black dark:text-white">About </span>
                        <span className="text-gradient">
                            Me
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gray-300 dark:bg-gray-700 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 max-w-6xl mx-auto items-center gap-16">
                    {/* Text Content */}
                    <div className="space-y-6 text-center md:text-left">
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                            I started my coding journey in{" "}
                            <strong className="text-black dark:text-white font-semibold">
                                September 2024
                            </strong>{" "}
                            by teaching myself the basics. In{" "}
                            <strong className="text-black dark:text-white font-semibold">
                                January 2025
                            </strong>
                            , I joined a professional course to strengthen my skills and dive deeper into real-world projects.
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                            I am currently a{" "}
                            <strong className="text-black dark:text-white font-semibold">
                                frontend-focused MERN developer
                            </strong>{" "}
                            with experience in CRUD operations and working with REST APIs on the backend. My favorite part of development is building{" "}
                            <strong className="text-black dark:text-white font-semibold">
                                creative, user-friendly interfaces
                            </strong>{" "}
                            that not only work well but also look great.
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                            At my core, I'm{" "}
                            <strong className="text-black dark:text-white font-semibold">curious</strong>{" "}
                            and an{" "}
                            <strong className="text-black dark:text-white font-semibold">explorer</strong>{" "}
                            — always trying to learn new things, whether in tech or beyond.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 mt-8 pt-8">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="
    text-center p-6 rounded-lg border transition-all duration-300 hover:scale-105

  /* ---------- Light theme ---------- */
    bg-black text-white border-gray-800
    [&:nth-child(3)]:bg-white
    [&:nth-child(3)]:text-black
    [&:nth-child(3)]:border-gray-200

  /* ---------- Dark theme reset ---------- */
    dark:bg-black dark:text-white dark:border-gray-800
    dark:[&:nth-child(3)]:bg-black
    dark:[&:nth-child(3)]:text-white
    dark:[&:nth-child(3)]:border-gray-800

  /* ---------- Dark theme layout ---------- */
    dark:[&:nth-child(1)]:bg-white
    dark:[&:nth-child(1)]:text-black
    dark:[&:nth-child(1)]:border-gray-500

  /* ---------- Hover (dark only, black cards) ---------- */
    dark:[&:not(:nth-child(2))]:hover:shadow-white/10
">
                                    <div className=" mb-2">
                                        {stat.value}
                                    </div>
                                    <div className=" font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Icon Display */}
                    <div className="flex justify-center md:justify-end">
                        <div className="relative w-80 h-80">
                            {/* Outer Circle */}
                            <div className="absolute inset-0 rounded-full border-2 border-gray-300 dark:border-gray-700 flex items-center justify-center transition-transform duration-500">
                                {/* Inner Circle */}
                                <div className="w-64 h-64 rounded-full border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center">
                                    <Code
                                        size={100}
                                        className="text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform duration-300"
                                        strokeWidth={1.5}
                                    />
                                </div>
                            </div>

                            {/* Decorative Dots */}
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded-full opacity-60 animate-bounce"></div>
                            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gray-400 dark:bg-gray-600 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '500ms' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;