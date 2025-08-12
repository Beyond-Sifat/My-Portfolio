import React, { useState } from 'react';
import { useEffect } from 'react';

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
        <section className='bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:bg-gray-900bg-gradient-to-br dark:from-gray-900 dark:via-blue-900 dark:to-purple-900'>
            <div>
                <div>
                    <h1 className='text-white'>Hi! I'm Sifat</h1>
                    <h2>{displayText}</h2>
                    <p>Crafting exceptional digital experiences with modern technologies.
                        Specialized in building scalable web applications using MongoDB, Express.js, React, and Node.js, Tailwind.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Banner;