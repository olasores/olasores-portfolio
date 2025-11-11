export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm px-6 py-4 z-50 flex justify-center">
            <div className="max-w-[700px] w-full flex items-center justify-between">
                {/* Logo */}
                <div className="relative w-12 h-12 rounded-full bg-white overflow-hidden flex items-center justify-center">
                    <img 
                        src="/assets/olaimg2.webp" 
                        alt="Oyinkansola Olayinka Logo"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Links */}
                <div className="flex gap-4 text-sm md:text-base">
                    <a 
                        href="https://github.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition"
                    >
                        Github
                    </a>
                    <a 
                        href="https://linkedin.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition"
                    >
                        LinkedIn
                    </a>
                    <a 
                        href="#" 
                        className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </nav>
    );
}
