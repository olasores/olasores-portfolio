'use client';

import { useState, useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdDescription } from 'react-icons/md';
import { IoChevronDown } from 'react-icons/io5';
import { HiOutlinePencilAlt, HiOutlineSparkles } from 'react-icons/hi';
import { HiMoon, HiSun } from 'react-icons/hi2';
import Link from 'next/link';

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const iconClass = "w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/8 transition-all duration-200 text-lg cursor-pointer";

    return (
        <nav className="fixed top-0 left-0 right-0 px-6 py-4 z-50 flex justify-center">
            <div className="max-w-[700px] w-full flex items-center justify-between">

                {/* Logo — separate, left side */}
                <Link href="/" className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-transparent hover:ring-gray-300 dark:hover:ring-gray-600 transition-all duration-300 shrink-0">
                    <img src="/assets/olaimg2.webp" alt="Oyinkansola Olayinka" className="w-full h-full object-cover" />
                </Link>

                {/* Icon pill — right side */}
                <div className="flex items-center gap-1 px-2 py-1.5 rounded-2xl bg-white/80 dark:bg-zinc-900/80 border border-gray-200 dark:border-white/8 backdrop-blur-md shadow-sm">
                    <a href="https://github.com/olasores" target="_blank" rel="noopener noreferrer" title="GitHub" className={iconClass}>
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/oyinkansola-olayinka/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className={iconClass}>
                        <FaLinkedin />
                    </a>
                    <a href="https://drive.google.com/file/d/1dOEJkfoQH73suDsccBJyT5-bezTsWutk/view?pli=1" target="_blank" rel="noopener noreferrer" title="Resume" className={iconClass}>
                        <MdDescription />
                    </a>

                    <div className="w-px h-5 bg-gray-200 dark:bg-white/10 mx-1" />

                    {mounted && (
                        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} title="Toggle theme" className={iconClass}>
                            {theme === 'dark' ? <HiSun /> : <HiMoon />}
                        </button>
                    )}

                    <div className="relative" ref={dropdownRef}>
                        <button onClick={() => setDropdownOpen(prev => !prev)} title="More" className={iconClass}>
                            <IoChevronDown className={`text-sm transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {dropdownOpen && (
                            <div className="absolute right-0 mt-3 w-44 bg-white dark:bg-zinc-950 border border-gray-200 dark:border-white/10 rounded-xl shadow-xl overflow-hidden">
                                <div className="px-3 pt-3 pb-1">
                                    <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-600 font-medium">Pages</p>
                                </div>
                                <div className="p-1.5 flex flex-col gap-0.5">
                                    <Link href="/blog"
                                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors duration-150"
                                        onClick={() => setDropdownOpen(false)}>
                                        <HiOutlinePencilAlt className="text-base text-gray-400 dark:text-gray-500" />
                                        Blog
                                    </Link>
                                    <Link href="/interests"
                                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors duration-150"
                                        onClick={() => setDropdownOpen(false)}>
                                        <HiOutlineSparkles className="text-base text-gray-400 dark:text-gray-500" />
                                        Interests
                                    </Link>
                                </div>
                                <div className="border-t border-gray-100 dark:border-white/5 p-1.5">
                                    <Link href="/"
                                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors duration-150"
                                        onClick={() => setDropdownOpen(false)}>
                                        <span className="text-base">⌂</span>
                                        Home
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </nav>
    );
}
