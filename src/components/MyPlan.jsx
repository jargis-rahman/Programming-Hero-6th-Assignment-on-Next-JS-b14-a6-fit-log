import React from 'react';

const MyPlan = () => {
    return (
        <div className='container mx-auto p-4 md:p-8 bg-[#0D1117] min-h-screen text-white font-sans flex flex-col gap-6'>


            {/* Stat Section */}
            <div className="w-full bg-[#13151A]/60 rounded-2xl p-6 border border-zinc-900/60 grid grid-cols-3 gap-4 items-center">
                {/* Exercises */}
                <div className="flex flex-col gap-1">
                    <span className="text-zinc-500 text-[10px] md:text-xs   tracking-wider">
                        Exercises
                    </span>
                    <span className="text-2xl md:text-4xl font-bold text-[#CCFF00]">
                        2
                    </span>
                </div>

                {/* Minutes */}
                <div className="flex flex-col gap-1 border-l border-zinc-800/40 pl-4 md:pl-8">
                    <span className="text-zinc-500 text-[10px] md:text-xs  tracking-wider">
                        Minutes
                    </span>
                    <span className="text-2xl md:text-4xl font-bold text-white">
                        23
                    </span>
                </div>

                {/* Calories */}
                <div className="flex flex-col gap-1 border-l border-zinc-800/40 pl-4 md:pl-8">
                    <span className="text-zinc-500 text-[10px] md:text-xs font-bold tracking-wider">
                        Calories
                    </span>
                    <span className="text-2xl md:text-4xl font-bold text-white">
                        190
                    </span>
                </div>
            </div>

            {/* Tab Control Bar & Content */}
            <div className="tabs tabs-box bg-[#090d12]/30 p-1.5 rounded-xl border border-zinc-900/20 flex flex-wrap items-center gap-y-4">

                {/* Tab 1: Today's Plan */}
                <input
                    type="radio"
                    name="my_tabs_6"
                    className="tab text-xs font-bold rounded-lg text-zinc-500 checked:bg-[#1A1F26] checked:text-white checked:shadow-sm"
                    aria-label="Today's Plan"
                />

                {/* Tab 2: Saved (Default Checked as per UI) */}
                <input
                    type="radio"
                    name="my_tabs_6"
                    className="tab text-xs font-bold rounded-lg text-zinc-500 checked:bg-[#1A1F26] checked:text-white checked:shadow-sm"
                    aria-label="Saved"
                    defaultChecked
                />

                <div className="tab-content w-full mt-4 bg-[#13151A]/20 rounded-2xl border border-zinc-900/40 py-20 flex flex-col items-center justify-center text-center px-4">

                    <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-1.5">
                        Nothing Here Yet
                    </h2>
                    <p className="text-zinc-500 text-xs md:text-sm max-w-sm mb-6 font-medium leading-relaxed">
                        Browse the library and add a lift to get today moving.
                    </p>
                    <button className="bg-[#CCFF00] text-black font-bold text-xs  px-5 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:bg-[#b2df00] tracking-wider cursor-pointer">
                        Go to workouts
                    </button>
                </div>

                {/* Sort By Select Dropdown */}
                <div className='ms-auto flex gap-2  items-center'>

                    <p className='text-gray-400'>Sort by</p>
                    <div>
                        <select defaultValue="Pick a color" className="select">
                            <option>Difficulty</option>
                            <option>Duration</option>
                            <option>Rating</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyPlan;
