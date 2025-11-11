'use client';

import { MdEmail } from 'react-icons/md';

export default function Contact() {
    return (
        <div className="flex justify-center bg-black font-sans dark:bg-black px-6 py-16">
            <div className="max-w-[700px] w-full flex flex-col gap-8 items-center md:items-start">
                {/* Section Title */}
                <div className="flex items-center gap-3">
                    <MdEmail className="text-white text-3xl" />
                    <div>
                        <p className="text-gray-400 text-base">
                            <a 
                                href="mailto:oyinkansola_o@yahoo.com"
                                className="text-white hover:text-gray-300 transition font-semibold"
                            >
                                oyinkansola_o@yahoo.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
