export default function Contact() {
    return (
        <div className="flex justify-center font-sans px-6 py-20">
            <div className="max-w-[700px] w-full">
                <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900/50 px-8 py-12 flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest font-medium">Contact</p>
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">
                            Wanna reach out?
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
                            I&rsquo;m always open to new opportunities, collaborations, or just a chat.
                        </p>
                    </div>

                    <a
                        href="mailto:oyinkansola_o@yahoo.com"
                        className="self-start flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors duration-200"
                    >
                        oyinkansola_o@yahoo.com
                        <span>→</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
