import { Link } from "react-router";
import { useEffect, useState } from "react";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/project.json")
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error("Error loading projects:", err));
    }, []);

    return (
        <section id="projects" className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    My{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Works
                    </span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="rounded-xl overflow-hidden shadow-lg shadow-blue-200/30 dark:shadow-blue-900/40 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transition-transform transform hover:scale-[1.02]"
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                                    {project.name}
                                </h3>
                                <Link
                                    to={`/projectsDetails/${project.id}`}
                                    className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
