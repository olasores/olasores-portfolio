import Link from "next/link";
import { posts } from "./posts";

export default function Blog() {
    return (
        <div className="flex justify-center font-sans min-h-screen px-6 pt-28 pb-20">
            <div className="max-w-[700px] w-full flex flex-col gap-16">

                <div className="flex flex-col gap-2">
                    <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest">Writing</p>
                    <h1 className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-white">Blog</h1>
                    <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">Thoughts, ideas, and musings.</p>
                </div>

                <div className="flex flex-col">
                    {posts.map((post, i) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group relative flex gap-6 py-8 border-t border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-colors duration-300"
                        >
                            <span className="text-6xl md:text-7xl font-bold text-gray-100 dark:text-gray-800 group-hover:text-gray-200 dark:group-hover:text-gray-700 transition-colors duration-300 leading-none select-none w-16 shrink-0 text-right">
                                {String(i + 1).padStart(2, '0')}
                            </span>

                            <div className="flex flex-col gap-2 flex-1 pt-1">
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400">
                                        {post.tag}
                                    </span>
                                    <span className="text-xs text-gray-400 dark:text-gray-600">{post.date}</span>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                                    {post.title}
                                </h2>
                                <p className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed">
                                    {post.description}
                                </p>
                                <span className="text-xs text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-300 mt-1 flex items-center gap-1">
                                    Read post
                                    <span className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </span>
                            </div>
                        </Link>
                    ))}
                    <div className="border-t border-gray-200 dark:border-gray-800" />
                </div>

            </div>
        </div>
    );
}
