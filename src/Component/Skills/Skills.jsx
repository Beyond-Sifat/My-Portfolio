import React from "react";
import Marquee from "react-fast-marquee";

const Skills = () => {
    const skillsRow1 = [
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    ];

    const skillsRow2 = [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Firebase", logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    ];

    return (
        <section id="skills" className="py-20 bg-gradient-to-br from-gray-100 via-blue-100 to-purple-100 dark:bg-gradient-to-br dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 relative overflow-hidden">

            <div className="absolute inset-0">
                <div className="absolute top-10 right-20 w-64 h-64 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-20 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100">
                    My{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                        Skills
                    </span>
                </h2>


                <div className="mb-8">
                    <Marquee gradient={false} speed={50}>
                        {skillsRow1.map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center mx-6 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl dark:shadow-blue-900/20 dark:hover:shadow-blue-900/30 transition-all duration-300 hover:scale-105 border border-white/20 dark:border-gray-700/30"
                            >
                                <div className="w-16 h-16 flex items-center justify-center mb-3 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600">
                                    <img
                                        src={skill.logo}
                                        alt={skill.name}
                                        className="w-12 h-12 object-contain filter dark:brightness-110"
                                    />
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 font-semibold text-sm text-center">
                                    {skill.name}
                                </p>
                            </div>
                        ))}
                    </Marquee>
                </div>


                <div>
                    <Marquee gradient={false} speed={50} direction="right">
                        {skillsRow2.map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center mx-6 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl dark:shadow-blue-900/20 dark:hover:shadow-blue-900/30 transition-all duration-300 hover:scale-105 border border-white/20 dark:border-gray-700/30"
                            >
                                <div className="w-16 h-16 flex items-center justify-center mb-3 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600">
                                    <img
                                        src={skill.logo}
                                        alt={skill.name}
                                        className="w-12 h-12 object-contain filter dark:brightness-110"
                                    />
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 font-semibold text-sm text-center">
                                    {skill.name}
                                </p>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default Skills;
