'use client';

import { useState } from 'react';

type Concert = {
    artist: string;
    venue: string;
    location: string;
    date: string;
    year: number;
    highlight?: string;
};

const concerts: Concert[] = [
    {
        artist: "Jeff Satur",
        venue: "Grammy Museum",
        location: "Los Angeles, CA",
        date: "March 3",
        year: 2026,
        highlight: "Ride or Die performance.",
    },
     {
        artist: "Girlset ",
        venue: "Iheart Radio",
        location: "Los Angeles, CA",
        date: "March 6",
        year: 2026,
        highlight: "QA section + unreleased music performace.",
    },
    {
        artist: "Conan Gray",
        venue: "Kia Forum",
        location: "Los Angeles, CA",
        date: "Mar 20",
        year: 2026,
        highlight: "Care, Comfort Crowd performance, wishbone deluxe annoucement.",
    },
    // {
    //     artist: "Add Artist",
    //     venue: "Add Venue",
    //     location: "City, State",
    //     date: "Jul 4",
    //     year: 2025,
    // },
    // {
    //     artist: "Add Artist",
    //     venue: "Add Venue",
    //     location: "City, State",
    //     date: "Nov 20",
    //     year: 2024,
    //     highlight: "Your favorite moment from the show.",
    // },
];

export default function Concerts() {
    const years = [...new Set(concerts.map(c => c.year))].sort((a, b) => b - a);
    const [selectedYear, setSelectedYear] = useState(years[0]);

    const filtered = concerts.filter(c => c.year === selectedYear);

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Concerts</h2>
                <p className="text-xs text-gray-400 dark:text-gray-500">Shows I&apos;ve been to, year by year.</p>
            </div>

            {/* Year toggle */}
            <div className="flex gap-2 flex-wrap">
                {years.map(year => (
                    <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                            selectedYear === year
                                ? 'bg-gray-900 dark:bg-white text-white dark:text-black'
                                : 'bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-700'
                        }`}
                    >
                        {year}
                    </button>
                ))}
            </div>

            {/* Concert list */}
            <div className="flex flex-col">
                {filtered.length === 0 ? (
                    <p className="text-sm text-gray-400 dark:text-gray-600 py-6 text-center">No concerts logged for {selectedYear}.</p>
                ) : (
                    filtered.map((concert, i) => (
                        <div key={i} className="flex gap-4 py-4 border-t border-gray-100 dark:border-gray-800">
                            {/* Date block */}
                            <div className="w-12 shrink-0 flex flex-col items-center justify-start pt-0.5">
                                <span className="text-xs font-semibold text-gray-900 dark:text-white">{concert.date.split(' ')[0]}</span>
                                <span className="text-xs text-gray-400 dark:text-gray-600">{concert.date.split(' ')[1]}</span>
                            </div>

                            {/* Divider */}
                            <div className="w-px bg-gray-100 dark:bg-gray-800 shrink-0" />

                            {/* Info */}
                            <div className="flex flex-col gap-1 flex-1">
                                <p className="text-sm font-semibold text-gray-900 dark:text-white">{concert.artist}</p>
                                <p className="text-xs text-gray-400 dark:text-gray-500">{concert.venue} · {concert.location}</p>
                                {concert.highlight && (
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-1 italic">
                                        &ldquo;{concert.highlight}&rdquo;
                                    </p>
                                )}
                            </div>
                        </div>
                    ))
                )}
                <div className="border-t border-gray-100 dark:border-gray-800" />
            </div>
        </div>
    );
}
