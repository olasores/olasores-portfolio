import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    liveDemo: string;
    github: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "QuizMe!",
        description: "An interactive quiz application to test users' knowledge.",
        image: "/assets/quizzy.png",
        liveDemo: "https://quiz-me-sandy.vercel.app/",
        github: "https://github.com/olasores/QuizMe",
    },
    {
        id: 2,
        title: "Expence",
        description: "A gamified webapp to help users manage their expenses effectively.",
        image: "/assets/expence.png",
        liveDemo: "https://expence-gilt.vercel.app/",
        github: "https://github.com/olasores/expence",
    },
    {
        id: 4,
        title: "Voyager",
        description: "An exploratory experience through space",
        image: "/assets/voyager.png",
        liveDemo: "https://fullyhacks-adventure.vercel.app/",
        github: "https://github.com/olasores/fullyhacks_adventure",
    },
    {
        id: 5,
        title: "FullyBeyond",
        description: "A website created for CSUF first designathon.",
        image: "/assets/fullyb.webp",
        liveDemo: "https://fullybeyond.acmcsuf.com/",
        github: "https://github.com/olasores/fullybeyond",
    },
];

export default function Portfolio() {
    return (
        <div className="flex flex-col gap-6 relative z-10">
            <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">Projects</h2>
                <p className="text-gray-400 dark:text-gray-500 text-sm">Here are some of my latest projects</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="group border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.04)] flex flex-col bg-white/60 dark:bg-black/60 backdrop-blur-sm"
                    >
                        {/* Image */}
                        <div className="relative w-full h-48 overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                        </div>

                        {/* Details */}
                        <div className="p-5 flex flex-col gap-3 flex-1">
                            <div className="flex flex-col gap-1 flex-1">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                                <p className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed">{project.description}</p>
                            </div>

                            {/* Links */}
                            <div className="flex gap-3 pt-2">
                                <a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black text-xs font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors duration-200"
                                >
                                    <FiExternalLink className="text-sm" />
                                    Live Demo
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium hover:border-gray-500 dark:hover:border-gray-500 hover:text-black dark:hover:text-white transition-colors duration-200"
                                >
                                    <FiGithub className="text-sm" />
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
