import Portfolio from "./Portfolio";

export default function HomeSection() {
    return (
        <div className="flex min-h-screen justify-center font-sans px-6 py-5 pt-20 md:pt-28">
            <div className="max-w-[700px] w-full flex flex-col gap-14">

                {/* Hero */}
                <div className="flex flex-col gap-5 md:items-start items-center text-center md:text-left">
                    {/* Status badge */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 w-fit">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">Open to opportunities</span>
                    </div>

                    <div>
                        <h2 className="text-xl md:text-2xl font-light text-gray-400 dark:text-gray-400 mb-1">
                            Hey there! I&rsquo;m
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-semibold text-gray-900 dark:text-white tracking-tight leading-none">
                            Oyinkansola<br />Olayinka.
                        </h1>
                    </div>

                    <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
                        Computer science student at Cal State Fullerton. Building full-stack applications and exploring new technologies.
                    </p>
                </div>

                <Portfolio />
            </div>
        </div>
    );
}
