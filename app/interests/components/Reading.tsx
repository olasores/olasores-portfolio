import Image from "next/image";

type Book = {
    title: string;
    author: string;
    status: "Reading" | "Finished";
    cover: string;
    thoughts?: string;
};

const books: Book[] = [
    {
        title: "Before The Coffee Gets Cold Haits",
        author: "Toshikazu Kawaguchi",
        status: "Reading",
        cover: "/assets/before.jpg",
        thoughts: "Just started might drop it??",
    },
    {
        title: "Everyone Thinking It",
        author: "Aleema Omotoni",
        status: "Finished",
        cover: "/assets/aleema.jpeg",
        thoughts: "A pretty good book about life of boarding school in the UK filled with drama loved it.",
    }
];

export default function Reading() {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Reading</h2>
                <p className="text-xs text-gray-400 dark:text-gray-500">Books I&apos;ve read or am currently working through.</p>
            </div>

            <div className="flex flex-col gap-4">
                {books.map((book, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200">
                        <div className="w-14 h-20 rounded-lg overflow-hidden shrink-0 bg-gray-100 dark:bg-zinc-800">
                            <Image src={book.cover} alt={book.title} width={56} height={80} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                                <div>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">{book.title}</p>
                                    <p className="text-xs text-gray-400 dark:text-gray-500">{book.author}</p>
                                </div>
                                <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium shrink-0 ${
                                    book.status === "Reading"
                                        ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                                        : "bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400"
                                }`}>
                                    {book.status}
                                </span>
                            </div>
                            {book.thoughts && (
                                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{book.thoughts}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
