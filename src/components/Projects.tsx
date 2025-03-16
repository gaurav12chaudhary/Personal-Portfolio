import Image from "next/image";
import Link from "next/link";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
}

const Projects = () => {
    const projects: Project[] = [
        {
            id: 1,
            title: "E-Commerce Website",
            description:
                "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product search, cart functionality, and payment processing.",
            image: "/project-placeholder-1.jpg",
            tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            id: 2,
            title: "Task Management App",
            description:
                "A productivity application that helps users organize tasks, set priorities, and track progress. Built with Next.js and Firebase for real-time updates.",
            image: "/project-placeholder-2.jpg",
            tags: ["Next.js", "Firebase", "Tailwind CSS", "React"],
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description:
                "A weather application that provides current conditions and forecasts for any location. Uses OpenWeatherMap API and features a clean, intuitive interface.",
            image: "/project-placeholder-3.jpg",
            tags: ["JavaScript", "API", "CSS", "HTML"],
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            id: 4,
            title: "Portfolio Website",
            description:
                "A personal portfolio website (this one!) built with Next.js and Tailwind CSS to showcase my projects and skills.",
            image: "/project-placeholder-4.jpg",
            tags: ["Next.js", "Tailwind CSS", "TypeScript"],
            liveUrl: "#",
            githubUrl: "#",
        },
    ];

    return (
        <section id="projects" className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    My <span className="text-blue-500">Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
                        >
                            <div className="relative h-60 w-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs px-3 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <Link
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                                    >
                                        Live Demo
                                    </Link>
                                    <Link
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-800 hover:bg-gray-900 text-white dark:bg-gray-700 dark:hover:bg-gray-600 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                                    >
                                        GitHub
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects; 