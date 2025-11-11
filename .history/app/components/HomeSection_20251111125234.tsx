

export default function HomeSection() {
    return (
        <div className="flex min-h-screen justify-center bg-black font-sans dark:bg-black px-6 py-5 pt-">
            <div className="max-w-[700px] w-full flex flex-col gap-12">
                {/* Text content */}
                <div className="flex flex-col gap-6 items-center md:items-start">
                    <div>
                        <h2 className="text-xl md:text-2xl font-light text-white mb-2">
                            Hey there! I&rsquo;m
                        </h2>
                        <h1 className="text-5xl md:text-7xl  text-white">
                            Oyinkansola Olayinka.
                        </h1>
                    </div>

                    <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-lg">
                        My name is Ola, a senior studying computer science at California state university, Fullerton. Lenioy listening to music and reading during my free time.
                    </p>

                    {/* Links */}
                    {/* <div className="flex gap-6 text-lg md:text-xl text-white">
                        <a href="#" className="hover:text-gray-400 transition">
                            Github ↗
                        </a>
                        <a href="#" className="hover:text-gray-400 transition">
                            linkedin ↗
                        </a>
                        <a href="#" className="hover:text-gray-400 transition">
                            Resume ↗
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    );
}