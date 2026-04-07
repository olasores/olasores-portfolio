import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, posts } from "../posts";


export function generateStaticParams() {
    return posts.map(p => ({ slug: p.slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) notFound();

    return (
        <div className="flex justify-center font-sans min-h-screen px-6 pt-28 pb-20">
            <div className="max-w-[700px] w-full flex flex-col gap-10">

                {/* Back */}
                <Link href="/blog" className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1 w-fit">
                    ← Back to blog
                </Link>

                {/* Header */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400">
                            {post.tag}
                        </span>
                        <span className="text-xs text-gray-400 dark:text-gray-600">{post.date}</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">
                        {post.title}
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                        {post.description}
                    </p>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 dark:border-gray-800" />

                {/* Content */}
                <div className="flex flex-col gap-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {post.content.split('\n\n').map((block, i) => {
                        if (block.startsWith('## ')) {
                            return (
                                <h2 key={i} className="text-lg font-semibold text-gray-900 dark:text-white mt-6">
                                    {block.replace('## ', '')}
                                </h2>
                            );
                        }
                        if (/^\d+\./.test(block)) {
                            const [label, ...rest] = block.split(': ');
                            return (
                                <div key={i} className="flex gap-3">
                                    <span className="text-gray-400 dark:text-gray-600 font-medium shrink-0">{label}.</span>
                                    <p>{rest.join(': ')}</p>
                                </div>
                            );
                        }
                        return <p key={i}>{block}</p>;
                    })}
                </div>

            </div>
        </div>
    );
}
