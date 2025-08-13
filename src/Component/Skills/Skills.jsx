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
        <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    My{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Skills
                    </span>
                </h2>

                {/* First Row */}
                <Marquee gradient={false} speed={50}>
                    {skillsRow1.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center mx-6 p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <img src={skill.logo} alt={skill.name} className="w-16 h-16 object-contain" />
                            <p className="mt-2 text-gray-700 font-medium">{skill.name}</p>
                        </div>
                    ))}
                </Marquee>

                {/* Second Row (Reverse Direction) */}
                <Marquee gradient={false} speed={50} direction="right" className="mt-8">
                    {skillsRow2.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center mx-6 p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <img src={skill.logo} alt={skill.name} className="w-16 h-16 object-contain" />
                            <p className="mt-2 text-gray-700 font-medium">{skill.name}</p>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Skills;
