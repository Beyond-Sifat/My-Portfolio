import { Building, Calendar, FileBadge, School } from 'lucide-react';
import React, { useState } from 'react';

const Education = () => {

    const [activeData, setActiveData] = useState('academic');

    const academicData = [
        {
            date: '2025 - Present',
            name: 'BSc in Computer Science and Engineering',
            institution: 'East Delta University',
            description: ' Pursuing a Bachelor of Science in Computer Science and Engineering with a focus on software development, algorithms, and data structures.',
            gpa: '3.33',
        },
        {
            date: '2023 - 2024',
            name: 'HSC',
            institution: 'Kazem Ali College, Chawkbazar',
            description: 'Completed Higher Secondary Certificate with focus on science subjects. Strong foundation in physics.',
            gpa: '4.83',
        },
        {
            date: '2020 - 2022',
            name: 'SSC',
            institution: 'Burischar high School, Hathazari',
            description: 'Completed Secondary School Certificate with focus on science subjects',
            gpa: '4.83',
        },

    ]

    const certificationData = [
        {
            date: '2025',
            name: 'Web Development',
            institution: 'Programming Hero',
            description: 'Comprehensive web development course covering MERN stack, modern JavaScript, and industry best practices.',
            StudentId: 'WEB11-0810',
        },
    ]

    const data = activeData === 'academic' ? academicData : certificationData
    //bg-gradient-to-br from-gray-100 via-blue-100 to-purple-100 dark:bg-gradient-to-br dark:from-slate-900 dark:via-gray-900 dark:to-slate-800
    return (
        <section id="education"
        className="py-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-16 right-20 w-64 h-64 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
                {/* <div className="absolute bottom-16 left-20 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div> */}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black dark:text-white">My Education</h2>

                {/* Toggle Buttons */}
                <div className="flex justify-center mb-12 gap-4">
                    <button
                        className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeData === 'academic'
                                ? "bg-black dark:bg-white text-white dark:text-black shadow-lg"
                                : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 shadow-md hover:shadow-lg hover:scale-105 border border-white/20 dark:border-gray-700/30"
                            }`}
                        onClick={() => setActiveData('academic')}
                    >
                        <School size={18} /> Academic
                    </button>
                    <button
                        className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeData === 'certification'
                                ? "bg-black dark:bg-white text-white dark:text-black shadow-lg"
                                : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 shadow-md hover:shadow-lg hover:scale-105 border border-white/20 dark:border-gray-700/30"
                            }`}
                        onClick={() => setActiveData('certification')}
                    >
                        <FileBadge size={18} /> Certification
                    </button>
                </div>

                {/* Education Cards */}
                <div className='grid md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
                    {data.map((item, index) => (
                        <div key={index}
                            className='bg-white/80  dark:bg-gray-800/90 dark:border-gray-600 p-6 rounded-xl shadow-lg hover:shadow-xl dark:shadow-white/5 dark:hover:shadow-white/15 transition-all duration-300 hover:scale-105 border border-white/20' >

                            {/* Date */}
                            <div className="flex items-center gap-2 mb-3 text-gray-600 dark:text-gray-400">
                                <Calendar size={18} />
                                <span className="font-medium">{item.date}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">{item.name}</h3>

                            {/* Institution */}
                            <div className="flex items-center gap-2 mb-4 text-gray-700 dark:text-gray-300">
                                <Building size={18} />
                                <span className="font-semibold">{item.institution}</span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                                {item.description}
                            </p>

                            {/* Badge/Tag */}
                            {activeData === 'academic' ? (
                                <span className="inline-block bg-[rgba(40,116,184,0.3)] dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full font-semibold text-sm">
                                    GPA: {item.gpa}
                                </span>
                            ) : (
                                <span className="inline-block bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full font-semibold text-sm">
                                    ID: {item.StudentId}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;