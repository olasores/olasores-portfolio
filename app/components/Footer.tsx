import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdDescription } from 'react-icons/md';

export default function Footer() {
    return (
        <footer className="flex justify-center px-6 py-8 border-t border-gray-100 dark:border-gray-900">
            <div className="max-w-[700px] w-full flex items-center justify-between">
                <p className="text-xs text-gray-400 dark:text-gray-600">
                    © {new Date().getFullYear()} Oyinkansola Olayinka
                </p>

                <div className="flex items-center gap-4">
                    <a href="https://github.com/olasores" target="_blank" rel="noopener noreferrer"
                        className="text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-lg">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/oyinkansola-olayinka/" target="_blank" rel="noopener noreferrer"
                        className="text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-lg">
                        <FaLinkedin />
                    </a>
                    <a href="https://drive.google.com/file/d/1dOEJkfoQH73suDsccBJyT5-bezTsWutk/view?pli=1" target="_blank" rel="noopener noreferrer"
                        className="text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-lg">
                        <MdDescription />
                    </a>
                </div>
            </div>
        </footer>
    );
}
