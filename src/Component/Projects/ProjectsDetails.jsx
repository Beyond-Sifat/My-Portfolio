import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

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

    if (!project)
        return (
            <p className="text-center text-gray-700 dark:text-gray-200 mt-20">
                Loading...
            </p>
        );

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 py-20 px-6">
            <div className="text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {project.name}
                    </span>
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                    Detailed view of this project including technologies, live site, and
                    repository.
                </p>
            </div>

            {/* Project Image */}
            <div className="flex justify-center mb-10">
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full max-w-4xl rounded-2xl shadow-xl shadow-blue-200/30 dark:shadow-blue-900/50"
                />
            </div>

            {/* Project Description */}
            <div className="max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                    Project Description
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.description}
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-white">
                    Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 rounded-full bg-blue-500 text-white text-sm font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 mt-6">
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        Live Site
                    </a>
                    <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-900 hover:scale-105 transition-transform duration-300"
                    >
                        Repository
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectsDetails;
