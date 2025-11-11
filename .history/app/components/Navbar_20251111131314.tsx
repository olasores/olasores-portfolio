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
                        href="https://github.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition"
                        title="GitHub"
                    >
                        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.007 12.007 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                    </a>

                    {/* LinkedIn Icon */}
                    <a 
                        href="https://linkedin.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition"
                        title="LinkedIn"
                    >
                        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.049-8.814 0-9.752h3.554v1.375c.427-.659 1.191-1.592 2.897-1.592 2.117 0 3.704 1.385 3.704 4.362v5.607zM5.337 8.855c-1.144 0-1.915-.761-1.915-1.715 0-.955.77-1.715 1.967-1.715 1.144 0 1.914.76 1.939 1.715 0 .954-.795 1.715-1.991 1.715zm1.541 11.597H3.879V9.949h2.999v10.503zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0z" />
                        </svg>
                    </a>

                    {/* Resume/Document Icon */}
                    <a 
                        href="#" 
                        className="hover:opacity-70 transition"
                        title="Resume"
                    >
                        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-8-6z" />
                            <line x1="9" y1="11" x2="15" y2="11" stroke="black" strokeWidth="2" />
                            <line x1="9" y1="16" x2="15" y2="16" stroke="black" strokeWidth="2" />
                        </svg>
                    </a>
                </div>
            </div>
        </nav>
    );
}
