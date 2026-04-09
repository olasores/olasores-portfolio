import Image from "next/image";

type MatchaSpot = {
    name: string;
    location: string;
    rating: number;
    note: string;
    image: string;
};

const spots: MatchaSpot[] = [
    {
        name: "Cha For Tea",
        location: "Fullerton, CA",
        rating: 5,
        note: "A go-to. The matcha latte is perfectly balanced — not too sweet, not too bitter.",
        image: "https://picsum.photos/seed/cafe1/400/200",
    },
    {
        name: "Greenleaf",
        location: "Orange, CA",
        rating: 4,
        note: "Cozy spot, great for studying. The oat milk matcha is solid.",
        image: "https://picsum.photos/seed/cafe2/400/200",
    },
    {
        name: "Rabbit Hole",
        location: "Los Angeles, CA",
        rating: 4,
        note: "Worth the drive. Aesthetic cafe with a really smooth ceremonial grade matcha.",
        image: "https://picsum.photos/seed/cafe3/400/200",
    },
];

function Stars({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < count ? "text-yellow-400" : "text-gray-200 dark:text-gray-700"}>★</span>
            ))}
        </div>
    );
}

export default function MatchaSpots() {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Matcha Spots</h2>
                <p className="text-xs text-gray-400 dark:text-gray-500">Places I&apos;ve tried, ranked by vibe.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {spots.map((spot, i) => (
                    <div key={i} className="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200 group">
                        <div className="relative w-full h-32 overflow-hidden bg-gray-100 dark:bg-zinc-800">
                            <Image
                                src={spot.image}
                                alt={spot.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-4 flex flex-col gap-2">
                            <div>
                                <p className="text-sm font-medium text-gray-900 dark:text-white">{spot.name}</p>
                                <p className="text-xs text-gray-400 dark:text-gray-500">{spot.location}</p>
                            </div>
                            <Stars count={spot.rating} />
                            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{spot.note}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
