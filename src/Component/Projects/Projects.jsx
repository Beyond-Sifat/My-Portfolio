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

    // const truncateDescription = (description, maxLength = 120) => {
    //     if (description.length <= maxLength) return description;
    //     return description.slice(0, maxLength) + "...";
    // };

    return (
        <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-16 right-20 w-64 h-64 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-16 left-20 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/5 to-purple-300/5 dark:from-blue-600/3 dark:to-purple-600/3 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100">
                    My{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                        Works
                    </span>
                </h2>

                <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-blue-900/20 dark:hover:shadow-blue-900/30 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] border border-white/20 dark:border-gray-700/30 group"
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Project Number Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white font-bold text-sm shadow-lg">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                {/* Quick Action Buttons */}
                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:scale-110"
                                        title="View Live Site"
                                    >
                                        <ExternalLink size={16} />
                                    </a>
                                    <a
                                        href={project.repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:scale-110"
                                        title="View Repository"
                                    >
                                        <Github size={16} />
                                    </a>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                {/* Project Title */}
                                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {project.name}
                                </h3>

                                {/* Project Description */}
                                {/* <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-sm">
                                    {truncateDescription(project.description)}
                                </p> */}

                                {/* Technologies Section */}
                                <div className="mb-6">
                                    {/* <div className="flex items-center gap-2 mb-3">
                                        <Code className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Tech Stack</span>
                                    </div> */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold border border-blue-200/50 dark:border-blue-700/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 text-xs font-semibold border border-gray-200/50 dark:border-gray-600/30">
                                                +{project.technologies.length - 4} more
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link
                                        to={`/projectsDetails/${project.id}`}
                                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white font-semibold shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25 hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-400 dark:hover:to-purple-400"
                                    >
                                        <span>View Details</span>
                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>

                                    <div className="flex gap-2">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-4 py-3 rounded-full border-2 border-green-500 dark:border-green-400 text-green-600 dark:text-green-400 hover:bg-green-500 dark:hover:bg-green-400 hover:text-white dark:hover:text-white transition-all duration-300 font-medium text-sm"
                                            title="Live Site"
                                        >
                                            <ExternalLink size={14} />
                                            <span className="hidden sm:inline">Live</span>
                                        </a>
                                        <a
                                            href={project.repoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-4 py-3 rounded-full border-2 border-gray-600 dark:border-gray-500 text-gray-600 dark:text-gray-400 hover:bg-gray-600 dark:hover:bg-gray-500 hover:text-white dark:hover:text-white transition-all duration-300 font-medium text-sm"
                                            title="Repository"
                                        >
                                            <Github size={14} />
                                            <span className="hidden sm:inline">Code</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {projects.length === 0 && (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center animate-pulse">
                            <Code className="w-12 h-12 text-gray-400 dark:text-gray-500" />
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">Loading amazing projects...</p>
                        <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">Please wait while we fetch the latest work</p>
                    </div>
                )}

                {/* Projects Summary */}
                {projects.length > 0 && (
                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/30">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                                <span className="text-gray-600 dark:text-gray-400 font-medium">
                                    {projects.length} Projects Completed
                                </span>
                            </div>
                            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
                            <div className="flex items-center gap-2">
                                <Tag className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                                <span className="text-gray-600 dark:text-gray-400 font-medium">
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
