import { Building, Calendar, FileBadge, School } from 'lucide-react';
import React, { useState } from 'react';

const Education = () => {

    const [activeData, setActiveData] = useState('academic');

    const academicData = [
        {
            date: '2025',
            name: 'Bachelor of Science',
            institution: 'East Delta University',
            description: '',
            gpa: '3.75',
        },
        {
            date: '2023 - 2024',
            name: 'HSC',
            institution: 'abc',
            description: 'Completed Higher Secondary Certificate with focus on science subjects. Strong foundation in physics.',
            gpa: '3.75',
        },
        {
            date: '2020 - 2022',
            name: 'SSC',
            institution: 'abc',
            description: 'Completed Secondary School Certificate with focus on science subjects',
            gpa: '3.75',
        },

    ]

    const certificationData = [
        {
            date: '2025',
            name: 'Web Development',
            institution: 'Programming Hero',
            description: 'Comprehensive web development course covering MERN stack, modern JavaScript, and industry best practices.',
            StudentId: 'PH-123456',
        },
    ]

    const data = activeData === 'academic' ? academicData : certificationData
    return (
        <section id="education" className="py-20 bg-gradient-to-br from-gray-100 via-blue-100 to-purple-100 dark:bg-gradient-to-br dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-16 right-20 w-64 h-64 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-16 left-20 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100">
                    My{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                        Education
                    </span>
                </h2>

                {/* Toggle Buttons */}
                <div className="flex justify-center mb-12 gap-4">
                    <button
                        className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeData === 'academic'
                                ? "bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white shadow-lg"
                                : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 shadow-md hover:shadow-lg hover:scale-105 border border-white/20 dark:border-gray-700/30"
                            }`}
                        onClick={() => setActiveData('academic')}
                    >
                        <School size={18} /> Academic
                    </button>
                    <button
                        className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeData === 'certification'
                                ? "bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white shadow-lg"
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
                            className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl dark:shadow-blue-900/20 dark:hover:shadow-blue-900/30 transition-all duration-300 hover:scale-105 border border-white/20 dark:border-gray-700/30'>

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
                                <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full font-semibold text-sm">
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