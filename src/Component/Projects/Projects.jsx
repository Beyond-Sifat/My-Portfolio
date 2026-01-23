import { Link } from "react-router";
import { useEffect, useState } from "react";
import { ExternalLink, Github, Code, Tag } from "lucide-react";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/project.json")
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error("Error loading projects:", err));
    }, []);
    // bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-gray-900 dark:to-slate-800

    return (
        <section id="projects" className="py-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-16 right-20 w-64 h-64 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-16 left-20 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/5 to-purple-300/5 dark:from-blue-600/3 dark:to-purple-600/3 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-black dark:text-white">
                    My Works
                </h2>

                <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="relative group"
                        >
                            {/* Project Image - Positioned half outside/inside */}
                            <div className="relative mb-8 mx-auto w-4/5 z-20">
                                <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl dark:shadow-blue-900/30 dark:hover:shadow-blue-900/50 transition-all duration-500 hover:scale-105">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Project Number Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white font-bold text-lg shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    {/* Quick Action Buttons */}
                                    <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full bg-white/95 dark:bg-gray-800/95 text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-xl hover:scale-125 backdrop-blur-sm"
                                            title="View Live Site"
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                        <a
                                            href={project.repoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full bg-white/95 dark:bg-gray-800/95 text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-xl hover:scale-125 backdrop-blur-sm"
                                            title="View Repository"
                                        >
                                            <Github size={18} />
                                        </a>
                                    </div>

                                    {/* Floating Tech Preview */}
                                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                        <div className="flex flex-wrap gap-2 justify-center">
                                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2 py-1 rounded-full bg-white/90 dark:bg-gray-800/90 text-blue-700 dark:text-blue-300 text-xs font-semibold backdrop-blur-sm shadow-lg"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Card - Positioned behind image */}
                            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 pt-20 shadow-xl hover:shadow-2xl dark:shadow-blue-900/20 dark:hover:shadow-blue-900/40 transition-all duration-500 hover:scale-[1.02] border border-white/30 dark:border-gray-700/40 relative -mt-16 z-10">

                                {/* Decorative Elements */}
                                <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-blue-100/50 to-purple-100/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-xl"></div>
                                <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-purple-100/50 to-blue-100/50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-full blur-xl"></div>

                                {/* Project Title with enhanced styling */}
                                <div className="text-center mb-6 relative z-10">
                                    <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500 mb-2">
                                        {project.name}
                                    </h3>
                                    <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Technologies Section with enhanced design */}
                                <div className="mb-8 relative z-10">
                                    <div className="flex flex-wrap gap-3 justify-center">
                                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 text-blue-700 dark:text-blue-300 text-sm font-semibold border border-blue-200/50 dark:border-blue-700/30 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <span className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700/60 text-gray-600 dark:text-gray-400 text-sm font-semibold border border-gray-200/50 dark:border-gray-600/30 shadow-md">
                                                +{project.technologies.length - 4} more
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Action Buttons with enhanced spacing */}
                                <div className="flex flex-col gap-4 relative z-10">
                                    <Link
                                        to={`/projectsDetails/${project.id}`}
                                        className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white font-semibold shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-blue-400/30 hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-400 dark:hover:to-purple-400 group/btn"
                                    >
                                        <span className="text-lg">View Details</span>
                                        <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>

                                    <div className="flex gap-3 justify-center">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-green-500 dark:border-green-400 text-green-600 dark:text-green-400 hover:bg-green-500 dark:hover:bg-green-400 hover:text-white dark:hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-green-500/25 hover:scale-110"
                                            title="Live Site"
                                        >
                                            <ExternalLink size={16} />
                                            <span>Live Demo</span>
                                        </a>
                                        <a
                                            href={project.repoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-gray-600 dark:border-gray-500 text-gray-600 dark:text-gray-400 hover:bg-gray-600 dark:hover:bg-gray-500 hover:text-white dark:hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-gray-500/25 hover:scale-110"
                                            title="Repository"
                                        >
                                            <Github size={16} />
                                            <span>Source Code</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {projects.length === 0 && (
                    <div className="text-center py-20">
                        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center animate-pulse shadow-2xl">
                            <Code className="w-16 h-16 text-gray-400 dark:text-gray-500" />
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-xl font-medium mb-2">Loading amazing projects...</p>
                        <p className="text-gray-500 dark:text-gray-500 text-base">Please wait while we fetch the latest work</p>
                    </div>
                )}

                {/* Projects Summary with enhanced design */}
                {projects.length > 0 && (
                    <div className="mt-20 text-center">
                        <div className="inline-flex items-center gap-6 px-10 py-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/30 dark:border-gray-700/40 hover:scale-105 transition-all duration-300">
                            <div className="flex items-center gap-3">
                                <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse shadow-lg"></div>
                                <span className="text-gray-600 dark:text-gray-400 font-semibold text-lg">
                                    {projects.length} Projects Completed
                                </span>
                            </div>
                            <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                            <div className="flex items-center gap-3">
                                <Tag className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                <span className="text-gray-600 dark:text-gray-400 font-semibold text-lg">
                                    {[...new Set(projects.flatMap(p => p.technologies))].length}+ Technologies
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
};

export default Projects;