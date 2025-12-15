import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Calendar, Code, ExternalLink, Github, Layers } from "lucide-react";

const ProjectsDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        fetch("/project.json")
            .then((res) => res.json())
            .then((data) => {
                const foundProject = data.find((p) => parseInt(p.id) === parseInt(id));
                setProject(foundProject);
            });
    }, [id]);
    // bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-gray-900 dark:to-slate-800

    if (!project) {
        return (
            <section className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center animate-pulse">
                        <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-xl text-gray-700 dark:text-gray-300 font-medium">
                        Loading project details...
                    </p>
                </div>
            </section>
        );
    }
//bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-gray-900 dark:to-slate-800
    return (
        <section className="min-h-screen py-20 px-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/5 to-purple-300/5 dark:from-blue-600/3 dark:to-purple-600/3 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                            {project.name}
                        </span>
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Detailed view of this project including technologies, live site, and
                        repository.
                    </p>
                </div>

                {/* Project Image */}
                <div className="flex justify-center mb-12">
                    <div className="relative group">
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full max-w-4xl rounded-2xl shadow-2xl shadow-blue-200/30 dark:shadow-blue-900/30 transition-transform duration-500 group-hover:scale-105 border border-white/20 dark:border-gray-700/30"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>

                {/* Project Details Card */}
                <div className="max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl dark:shadow-blue-900/20 dark:hover:shadow-blue-900/30 transition-all duration-300 border border-white/20 dark:border-gray-700/30 mb-8">
                    {/* Description */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30">
                                <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                                Project Description
                            </h2>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                            {project.description}
                        </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
                                <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                                Technologies Used
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-full shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25 hover:scale-105 transition-all duration-300 font-semibold"
                        >
                            <ExternalLink size={18} />
                            Live Site
                        </a>
                        <a
                            href={project.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800 dark:bg-gray-700 text-white rounded-full shadow-lg hover:shadow-gray-500/25 dark:hover:shadow-gray-600/25 hover:bg-gray-900 dark:hover:bg-gray-600 hover:scale-105 transition-all duration-300 font-semibold"
                        >
                            <Github size={18} />
                            Repository
                        </a>
                    </div>
                </div>

                {/* Additional Info Card (Optional) */}
                {project.date && (
                    <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 dark:border-green-700/30">
                        <div className="flex items-center justify-center gap-3 text-green-700 dark:text-green-300">
                            <Calendar size={20} />
                            <span className="font-medium">
                                Project completed: {project.date}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsDetails;
