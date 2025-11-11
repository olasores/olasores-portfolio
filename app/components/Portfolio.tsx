export default function Portfolio() {
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
                    {/* Quiz Me Project */}
                    <div className="border border-gray-700 rounded-xl overflow-hidden hover:border-gray-500 transition flex flex-col">
                        {/* Project Image */}
                        <div className="w-full h-48 bg-gray-800 overflow-hidden">
                            <img 
                                src="/assets/quizzy.png" 
                                alt="Quiz Me Project"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        
                        {/* Project Details */}
                        <div className="p-6 flex flex-col gap-4 flex-1">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    Quiz Me
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    An interactive quiz application to test your knowledge.
                                </p>
                            </div>
                            
                            {/* Links */}
                            <div className="flex gap-4 text-sm mt-auto">
                                <a 
                                    href="https://quiz-me-sandy.vercel.app/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-gray-300 transition"
                                >
                                    Live Demo →
                                </a>
                                <a 
                                    href="#" 
                                    className="text-white hover:text-gray-300 transition"
                                >
                                    GitHub →
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 2 - Chef Buddy */}
                    <div className="border border-gray-700 rounded-xl overflow-hidden hover:border-gray-500 transition flex flex-col">
                        {/* Project Image */}
                        <div className="w-full h-48 bg-gray-800 overflow-hidden">
                            <img 
                                src="/assets/chef.png" 
                                alt="Chef Buddy Project"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        
                        {/* Project Details */}
                        <div className="p-6 flex flex-col gap-4 flex-1">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    Chef Buddy
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    A cooking companion app to help you discover and manage recipes.
                                </p>
                            </div>
                            
                            {/* Links */}
                            <div className="flex gap-4 text-sm mt-auto">
                                <a 
                                    href="https://chef-buddy-rouge.vercel.app/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-gray-300 transition"
                                >
                                    Live Demo →
                                </a>
                                <a 
                                    href="#" 
                                    className="text-white hover:text-gray-300 transition"
                                >
                                    GitHub →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}