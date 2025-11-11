export default function Portfolio() {
    return (
        <div className="flex justify-center bg-black font-sans dark:bg-black px-6 py-12">
            <div className="max-w-[700px] w-full flex flex-col gap-8">
                {/* Section Title */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Portfolio
                    </h2>
                    <p className="text-gray-400 text-sm">
                        Latest projects
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Project Card 1 */}
                    <div className="border border-gray-700 rounded-xl p-8 min-h-64 hover:border-gray-500 transition">
                        <div className="text-gray-400">Project 1</div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="border border-gray-700 rounded-xl p-8 min-h-64 hover:border-gray-500 transition">
                        <div className="text-gray-400">Project 2</div>
                    </div>
                </div>
            </div>
        </div>
    );
}