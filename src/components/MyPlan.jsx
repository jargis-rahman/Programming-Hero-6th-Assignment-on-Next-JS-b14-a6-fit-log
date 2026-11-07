"use client"
import { useWorkContext } from '@/context/WorkContext';
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const MyPlan = () => {
    const { planlist, setPlanlist, savedlist, setSavedlist } = useWorkContext();
    const [activeTab, setActiveTab] = useState("plan");
    const [sortBy, setSortBy] = useState("duration");
    const [orderedId, setOrderedId] = useState([]);

    const currentList = activeTab === "plan" ? planlist : savedlist;

    const sortedList = [...currentList].sort((a, b) => {
        if (sortBy === "duration") return a.duration - b.duration;
        if (sortBy === "difficulty") return a.difficulty - b.difficulty;
        if (sortBy === "rating") return a.rating - b.rating;

        return 0;
    })


    const totalExercise = currentList.length;
    const totalMinute = currentList.reduce((sum, item) => sum + item.duration, 0);
    const totalCalories = currentList.reduce((sum, item) => sum + item.caloriesBurned, 0);

    const handleRemove = (id) => {

        if (activeTab === "plan") {
            setPlanlist(prev => prev.filter(item => item.id !== id));
        } else {
            setSavedlist(prev => prev.filter(item => item.id !== id));
        }
        toast.error("Removed");
    }

    const handleMarkDone = (id) => {
        if (!orderedId.includes(id)) {
            setOrderedId(prev => [...prev, id]);
            toast.success("Marked")
        }
    }

    const renderTabContent = () => {
        if (sortedList.length === 0) {
            return (
                <>
                    <div className="tab-content w-full mt-4 bg-[#13151A]/20 rounded-2xl border border-zinc-900/40 py-20 flex flex-col items-center justify-center text-center px-4">
                        <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-1.5">
                            Nothing Here Yet
                        </h2>
                        <p className="text-zinc-500 text-xs md:text-sm max-w-sm mb-6 font-medium leading-relaxed">
                            Browse the library and add a lift to get today moving.
                        </p>
                        <Link href="/">
                            <button className="bg-[#CCFF00] text-black font-bold text-xs px-5 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:bg-[#b2df00] tracking-wider cursor-pointer">
                                Go to workouts
                            </button>
                        </Link>
                    </div>
                </>
            )
        }

        return (

            <div className="flex flex-col gap-4 mt-6 w-full text-left">
                {sortedList.map(item => (
                    <div
                        key={item.id}
                        className="w-full bg-[#13151A] rounded-2xl p-4 border border-zinc-900/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-200 hover:border-zinc-800"
                    >
                        {/* বাম পাশ: ইমেজ, টাইটেল ও ডিসক্রিপশন */}
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                            {/* ওয়ার্কআউট ইমেজ */}
                            <div className="relative w-24 h-16 md:w-32 md:h-20 rounded-xl overflow-hidden flex-shrink-0 bg-zinc-900">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* টেক্সট ডিটেইলস */}
                            <div className="flex flex-col gap-1.5">
                                <h3 className="text-base md:text-lg font-bold uppercase tracking-tight text-white line-clamp-1">
                                    {item.name}
                                </h3>
                                <p className="text-zinc-500 text-xs font-medium">
                                    {item.equipment || "Bodyweight"}
                                </p>

                                {/* আইকন */}
                                <div className="flex items-center gap-3 text-[11px] font-semibold text-zinc-400 mt-0.5">
                                    <span className="flex items-center gap-1">
                                        <span className="text-zinc-500 text-xs">🕒</span> {item.duration} min
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <span className="text-[#CCFF00] text-xs">🔥</span> {item.caloriesBurned} kcal
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <span className="text-yellow-500 text-xs">⭐</span> {item.rating}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* ডান পাশ: অ্যাকশন কন্ট্রোল বাটন সমূহ */}
                        <div className="flex items-center gap-3 w-full sm:w-auto justify-end sm:justify-start">

                            {/* View Details বাটন */}
                            <Link
                                href={`/workouts/${item.id}`}
                                className="px-4 py-2 border border-zinc-800 rounded-full text-xs font-bold  text-zinc-300 hover:text-white hover:bg-zinc-900 transition-all cursor-pointer whitespace-nowrap"
                            >
                                View Details
                            </Link>

                            {/* Mark as Done বাটন */}
                            <button
                                onClick={() => handleMarkDone(item.id)}
                                className="flex items-center gap-1.5 bg-[#CCFF00] text-black font-bold text-xs  px-4 py-2.5 rounded-full transition-all hover:bg-[#b2df00] shadow-md cursor-pointer whitespace-nowrap">
                                <span>✓</span> Mark as Done
                            </button>

                            {/* রিমুভ ক্রস বাটন (×) */}
                            <button
                                onClick={() => handleRemove(item.id)}
                                className="text-zinc-600 hover:text-red-500 font-light text-2xl px-1 transition-colors cursor-pointer mb-0.5"
                                title="Remove"
                            >
                                ×
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }



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
                        {totalExercise}
                    </span>
                </div>

                {/* Minutes */}
                <div className="flex flex-col gap-1 border-l border-zinc-800/40 pl-4 md:pl-8">
                    <span className="text-zinc-500 text-[10px] md:text-xs  tracking-wider">
                        Minutes
                    </span>
                    <span className="text-2xl md:text-4xl font-bold text-white">
                        {totalMinute}
                    </span>
                </div>

                {/* Calories */}
                <div className="flex flex-col gap-1 border-l border-zinc-800/40 pl-4 md:pl-8">
                    <span className="text-zinc-500 text-[10px] md:text-xs font-bold tracking-wider">
                        Calories
                    </span>
                    <span className="text-2xl md:text-4xl font-bold text-white">
                        {totalCalories}
                    </span>
                </div>
            </div>

            {/* Tab Control Bar & Content */}
            <div className="tabs tabs-box bg-[#090d12]/30 p-1.5 rounded-xl border border-zinc-900/20 flex flex-wrap items-center gap-y-4">

                {/* Tab 1: Today's Plan */}
                <input
                    type="radio"
                    name="my_tabs_6"
                    className="tab"
                    aria-label="Today's Plan"
                    defaultChecked
                    onChange={() => setActiveTab("plan")}
                    checked={activeTab === "plan"}
                />

                <div className='tab-content'>
                    {renderTabContent()}
                </div>



                {/* Tab 2: Saved (Default Checked as per UI) */}

                <input
                    type="radio"
                    name="my_tabs_6"
                    className="tab"
                    aria-label="Saved"
                    onChange={() => setActiveTab("saved")}
                    checked={activeTab === "saved"}
                />

                <div className='tab-content'>
                    {renderTabContent()}
                </div>




                {/* Sort By Select Dropdown */}
                <div className='ms-auto flex gap-2  items-center'>

                    <p className='text-gray-400'>Sort by</p>
                    <div>
                        <select
                            onChange={(e) => setSortBy(e.target.value)}
                            defaultValue="duration" className="select">

                            <option
                                value="duration"
                            >Duration</option>

                            <option
                                value="difficulty"
                            >Difficulty</option>

                            <option
                                value="rating"
                            >Rating</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyPlan;
