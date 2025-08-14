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
            StudentId: 'PH-123456',
        },
    ]

    const data = activeData === 'academic' ? academicData : certificationData
    return (
        <section id="education" className="py-20 bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    My{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Education
                    </span>
                </h2>

                <div className="flex justify-center mb-12 gap-4">
                    <button
                        className={`flex gap-2 px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeData === 'academic' ? "bg-blue-600 text-white" : "bg-white shadow-md hover:shadow-lg"} `}
                        onClick={() => setActiveData('academic')}><School /> Academic</button>
                    <button
                        className={`flex gap-2 px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeData === 'certification' ? "bg-blue-600 text-white" : "bg-white shadow-md hover:shadow-lg"}} `}
                        onClick={() => setActiveData('certification')}><FileBadge /> Certification</button>
                </div>

                <div className='grid md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
                    {data.map((item, index) => (
                        <div key={index}
                            className='bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300'>
                            <div className="flex items-center gap-2 mb-2 text-gray-600">
                                <Calendar size={18} />
                                <span>{item.date}</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-gray-800">{item.name}</h3>
                            <div className="flex items-center gap-2 mb-4 text-gray-700 font-semibold">
                                <Building size={18} />
                                <span>{item.institution}</span>
                            </div>

                            {activeData === 'academic' ? (
                                <>
                                    <p className="text-gray-600 mb-4">{item.description}</p>
                                    <span className="inline-block bg-blue-100/50 text-blue-600 px-3 py-1 rounded-full font-medium">
                                        {item.gpa}
                                    </span>
                                </>
                            ) : (
                                <span className="inline-block bg-green-100/50 text-green-600 px-3 py-1 rounded-full font-medium">
                                    Student ID: {item.StudentId}
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