

export default function HomeSection() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black font-sans dark:bg-black px-6 py-12">
            <div className="flex flex-col gap-8 max-w-2xl w-full items-center text-center">
                {/* Image on top - small */}
                <div className="relative w-32 h-32 rounded-full bg-white overflow-hidden flex items-center justify-center">
                    <img 
                        src="/assets/olaimg2.webp" 
                        alt="Portrait of Oyinkansola Olayinka"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Text content */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-light text-white mb-2">
                            Hey there! I&rsquo;m
                        </h2>
                        <h1 className="text-4xl md:text-6xl font-bold text-white">
                            Oyinkansola Olayinka.
                        </h1>
                    </div>

                    <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-lg">
                        My name is Ola, a senior studying computer science at California state university, Fullerton. Lenioy listening to music and reading during my free time.
                    </p>

                    {/* Links */}
                    <div className="flex gap-6 text-lg md:text-xl text-white justify-center">
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
            </div>
        </div>
    );
}