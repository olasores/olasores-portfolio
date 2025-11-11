

export default function HomeSection() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black font-sans dark:bg-black px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl w-full items-center">
                {/* Left side: Text content */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-light text-white mb-2">
                            Hey there! I&rsquo;m
                        </h2>
                        <h1 className="text-3xl md:text-5xl font-bold text-white">
                            Oyinkansola Olayinka.
                        </h1>
                    </div>

                    <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-md">
                        My name is Ola, a junior studying computer science at California state university, Fullerton. Lenioy listening to music and reading during my free time.
                    </p>

                    {/* Links */}
                    <div className="flex gap-4 text-base md:text-lg text-white">
                        <a href="#" className="hover:text-gray-400 transition">
                            Github ↗
                        </a>
                        <a href="#" className="hover:text-gray-400 transition">
                            linkedin ↗
                        </a>
                        <a href="#" className="hover:text-gray-400 transition">
                            Resume ↗
                        </a>
                    </div>
                </div>

                {/* Right side: Image */}
                <div className="flex justify-center md:justify-end">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-white overflow-hidden flex items-center justify-center">
                        <img 
                            src="/assets/olaimg2.webp" 
                            alt="Portrait of Oyinkansola Olayinka"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}