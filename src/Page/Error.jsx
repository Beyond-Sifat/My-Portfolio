import { AlertTriangle, ArrowLeft, Home, Search } from 'lucide-react';
import React from 'react';
import { Link, useNavigate } from 'react-router';

const Error = () => {


    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    //bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-gray-900 dark:to-slate-800
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-300/5 to-orange-300/5 dark:from-red-600/3 dark:to-orange-600/3 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                {/* 404 Visual */}
                <div className="mb-12">
                    <div className="relative inline-block">
                        {/* Large 404 Text */}
                        <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 dark:from-blue-400 dark:via-purple-400 dark:to-red-400 bg-clip-text text-transparent opacity-20 select-none">
                            404
                        </h1>
                    </div>
                </div>

                {/* Error Message */}
                <div className="mb-12 max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                        Oops! Page{" "}
                        <span className="bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400 bg-clip-text text-transparent">
                            Not Found
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        The page you're looking for seems to have wandered off into the digital void.
                        Don't worry, even the best developers get lost sometimes! 🚀
                    </p>

                    <p className="text-gray-500 dark:text-gray-500 text-sm">
                        Error Code: 404 | Page could not be found
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-full shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25 hover:scale-105 transition-all duration-300 font-semibold"
                    >
                        <Home size={20} />
                        Back to Home
                    </Link>

                    <button
                        onClick={goBack}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 rounded-full shadow-lg hover:shadow-xl dark:shadow-blue-900/20 dark:hover:shadow-blue-900/30 hover:scale-105 transition-all duration-300 font-semibold border border-white/20 dark:border-gray-700/30 backdrop-blur-sm"
                    >
                        <ArrowLeft size={20} />
                        Go Back
                    </button>
                </div>

                {/* Helpful Links */}
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl dark:shadow-blue-900/20 dark:hover:shadow-blue-900/30 transition-all duration-300 border border-white/20 dark:border-gray-700/30 max-w-2xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30">
                            <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                            Maybe you're looking for:
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <Link
                            to="/#about"
                            className="block p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700/50 dark:to-gray-600/50 hover:scale-105 transition-transform duration-300 text-left"
                        >
                            <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">About Me</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Learn about my journey</p>
                        </Link>

                        <Link
                            to="/#projects"
                            className="block p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700/50 dark:to-gray-600/50 hover:scale-105 transition-transform duration-300 text-left"
                        >
                            <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">My Projects</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Check out my work</p>
                        </Link>

                        <Link
                            to="/#skills"
                            className="block p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700/50 dark:to-gray-600/50 hover:scale-105 transition-transform duration-300 text-left"
                        >
                            <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">My Skills</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Technologies I use</p>
                        </Link>

                        <Link
                            to="/#contact"
                            className="block p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700/50 dark:to-gray-600/50 hover:scale-105 transition-transform duration-300 text-left"
                        >
                            <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Contact Me</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Let's get in touch</p>
                        </Link>
                    </div>
                </div>

                {/* Fun Message */}
                <div className="mt-12">
                    <p className="text-sm text-gray-500 dark:text-gray-500 italic">
                        "The best error messages are the ones that help you find your way back." ✨
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Error;