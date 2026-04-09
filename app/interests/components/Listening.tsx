type Song = {
    title: string;
    artist: string;
    mood: string;
};

const songs: Song[] = [
    { title: "Wednesday Girl", artist: "P1harmony", mood: "Hyper" },
    { title: "Millions", artist: "Say Now", mood: "Girly Pop" },
    { title: "The best", artist: "Conan Gray", mood: "Emotional" },
    { title: "Tweak", artist: "Girlset", mood: "Fun" },
    { title: "White Keys", artist: "Dominic Fike", mood: "Emotional" },
];

const moodColors: Record<string, string> = {
    Chill: "bg-blue-50 dark:bg-blue-900/20 text-blue-500 dark:text-blue-400",
    Nostalgic: "bg-purple-50 dark:bg-purple-900/20 text-purple-500 dark:text-purple-400",
    Mellow: "bg-orange-50 dark:bg-orange-900/20 text-orange-500 dark:text-orange-400",
    Dreamy: "bg-pink-50 dark:bg-pink-900/20 text-pink-500 dark:text-pink-400",
    Emotional: "bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400",
};

export default function Listening() {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Listening</h2>
                <p className="text-xs text-gray-400 dark:text-gray-500">Songs I keep coming back to.</p>
            </div>

            <div className="flex flex-col">
                {songs.map((song, i) => (
                    <div key={i} className="flex items-center gap-4 py-3.5 border-t border-gray-100 dark:border-gray-800">
                        <span className="text-xs font-medium text-gray-300 dark:text-gray-700 w-5 text-right shrink-0">
                            {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{song.title}</p>
                            <p className="text-xs text-gray-400 dark:text-gray-500">{song.artist}</p>
                        </div>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium shrink-0 ${moodColors[song.mood]}`}>
                            {song.mood}
                        </span>
                    </div>
                ))}
                <div className="border-t border-gray-100 dark:border-gray-800" />
            </div>
        </div>
    );
}
