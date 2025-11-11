export default function Contact() {
    return (
        <div className="flex justify-center bg-black font-sans dark:bg-black px-6 py-16">
            <div className="max-w-[700px] w-full flex flex-col gap-8">
                {/* Section Title */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Wanna reach out?
                    </h2>
                    <p className="text-gray-400 text-base mb-6">
                        Email me at{' '}
                        <a 
                            href="mailto:oyinkansola_o@yahoo.com"
                            className="text-white hover:text-gray-300 transition font-semibold underline"
                        >
                            oyinkansola_o@yahoo.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
