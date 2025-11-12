export default function Portfolio() {
    const projects = [
        {
            id: 1,
            title: "Quiz Me!",
            description: "Aninteractive quiz application to test your knowledge.",
            image: "/assets/quizzy.png",
            liveDemo: "https://quiz-me-sandy.vercel.app/",
            github: "https://github.com/olasores/QuizMe"
        },
        {
            id: 2,
            title: "Chef Buddy",
            description: "A cooking companion app to help you discover and manage recipes.",
            image: "/assets/chef.png",
            liveDemo: "https://chef-buddy-rouge.vercel.app/",
            github: "https://github.com/olasores/ChefBuddy"
        },
         {
            id: 3,
            title: "Voyager",
            description: "A website created for CSUF first designathon.",
            image: "/assets/voyager.png",
            liveDemo: "https://fullyhacks-adventure.vercel.app/",
            github: "https://github.com/olasores/fullyhacks_adventure"
        },
        {
            id: 4,
            title: "Fully Beyond",
            description: "A website created for CSUF first designathon.",
            image: "/assets/fullyb.webp",
            liveDemo: "https://fullybeyond.acmcsuf.com/",
            github: "https://github.com/olasores/fullybeyond"
        }
        
    ];

    return (
        <div className="flex justify-center bg-black font-sans dark:bg-black ">
            <div className="max-w-[700px] w-full flex flex-col gap-8">
                {/* Section Title */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-medium text-white mb-2">
                        Portfolio
                    </h2>
                    <p className="text-gray-400 text-sm">
                        Here are some of my latest projects
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="border border-gray-700 rounded-xl overflow-hidden hover:border-gray-500 transition flex flex-col">
                            {/* Project Image */}
                            <div className="w-full h-48 bg-gray-800 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            
                            {/* Project Details */}
                            <div className="p-6 flex flex-col gap-4 flex-1">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        {project.description}
                                    </p>
                                </div>
                                
                                {/* Links */}
                                <div className="flex gap-4 text-sm mt-auto">
                                    <a 
                                        href={project.liveDemo} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-gray-300 transition"
                                    >
                                        Live Demo →
                                    </a>
                                    <a 
                                        href={project.github} 
                                        className="text-white hover:text-gray-300 transition"
                                    >
                                        GitHub →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}