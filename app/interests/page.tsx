import Reading from "./components/Reading";
import Listening from "./components/Listening";
import MatchaSpots from "./components/MatchaSpots";
import Photography from "./components/Photography";
import Concerts from "./components/Concerts";

export default function Interests() {
    return (
        <div className="flex justify-center font-sans min-h-screen px-6 pt-28 pb-20">
            <div className="max-w-[700px] w-full flex flex-col gap-16">

                {/* Header */}
                <div className="flex flex-col gap-2">
                    <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest">Personal</p>
                    <h1 className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-white">Interests</h1>
                    <p className="text-gray-500 text-sm mt-1">Things I love, things I&apos;m learning, things I want to remember.</p>
                </div>

                <Reading />
                <Listening />
                <Concerts />
                {/* <MatchaSpots />
                <Photography /> */}

            </div>
        </div>
    );
}
