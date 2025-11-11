export default function Navbar() {
    return (
        <nav className="fixed top-5 w-full bg-black/80 backdrop-blur-sm px-6 py-4 z-50">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="relative w-12 h-12 rounded-full bg-white overflow-hidden flex items-center justify-center">
                    <img 
                        src="/assets/olaimg2.webp" 
                        alt="Oyinkansola Olayinka Logo"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Links */}
                {/* <div className="flex gap-8 text-white">
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
        </nav>
    );
}
