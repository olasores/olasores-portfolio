'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdDescription } from 'react-icons/md';

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

                {/* Links - Social Media Icons */}
                <div className="flex gap-6">
                    {/* GitHub Icon */}
                    <a 
                        href="https://github.com/olasores" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400 transition text-2xl"
                        title="GitHub"
                    >
                        <FaGithub />
                    </a>

                    {/* LinkedIn Icon */}
                    <a 
                        href="https://linkedin.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400 transition text-2xl"
                        title="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>

                    {/* Resume/Document Icon */}
                    <a 
                        href="#" 
                        className="text-white hover:text-gray-400 transition text-2xl"
                        title="Resume"
                    >
                        <MdDescription />
                    </a>
                </div>
            </div>
        </nav>
    );
}
