export default function Portfolio() {
    return (
        <div className="flex justify-center bg-black font-sans dark:bg-black px-6 py-12">
            <div className="max-w-[700px] w-full flex flex-col gap-12">
                {/* Section Title */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        My Work
                    </h2>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                        Here are some of the projects I&rsquo;ve worked on. Each one represents a step in my journey as a developer.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Project Card 1 */}
                    <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition">
                        <h3 className="text-xl font-semibold text-white mb-3">
                            Project 1
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            A brief description of your first project goes here.
                        </p>
                        <div className="flex gap-2">
                            <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
                                View →
                            </a>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition">
                        <h3 className="text-xl font-semibold text-white mb-3">
                            Project 2
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            A brief description of your second project goes here.
                        </p>
                        <div className="flex gap-2">
                            <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
                                View →
                            </a>
                        </div>
                    </div>

                    {/* Project Card 3 */}
                    <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition">
                        <h3 className="text-xl font-semibold text-white mb-3">
                            Project 3
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            A brief description of your third project goes here.
                        </p>
                        <div className="flex gap-2">
                            <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
                                View →
                            </a>
                        </div>
                    </div>

                    {/* Project Card 4 */}
                    <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition">
                        <h3 className="text-xl font-semibold text-white mb-3">
                            Project 4
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            A brief description of your fourth project goes here.
                        </p>
                        <div className="flex gap-2">
                            <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
                                View →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}