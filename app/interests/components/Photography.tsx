// import Image from "next/image";

// const placeholderShots = [
//     { seed: "photo1", caption: "Golden hour" },
//     { seed: "photo2", caption: "Street" },
//     { seed: "photo3", caption: "Architecture" },
//     { seed: "photo4", caption: "Nature" },
//     { seed: "photo5", caption: "People" },
//     { seed: "photo6", caption: "Still life" },
// ];

export default function Photography() {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Photography</h2>
                <p className="text-xs text-gray-400 dark:text-gray-500">Something I&apos;m getting into — subjects I want to explore.</p>
            </div>

            {/* Photo grid — coming soon
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {placeholderShots.map((shot) => (
                    <div key={shot.seed} className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-zinc-800">
                        <Image
                            src={`https://picsum.photos/seed/${shot.seed}/400/400`}
                            alt={shot.caption}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-3">
                            <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {shot.caption}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            */}

            <div className="border border-dashed border-gray-200 dark:border-gray-700 rounded-xl py-14 flex flex-col items-center gap-2 text-center">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Coming soon</p>
                <p className="text-xs text-gray-400 dark:text-gray-600">Still figuring out what I want to shoot.</p>
            </div>
        </div>
    );
}
