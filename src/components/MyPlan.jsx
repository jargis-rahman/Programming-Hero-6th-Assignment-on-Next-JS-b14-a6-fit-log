"use client"
import { useWorkContext } from '@/context/WorkContext';
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { LuClock } from 'react-icons/lu';
import { FaFire } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';

const MyPlan = () => {
    const { planlist, setPlanlist, savedlist, setSavedlist } = useWorkContext();
    const [activeTab, setActiveTab] = useState("plan");
    const [sortBy, setSortBy] = useState("duration");
    const [orderedId, setOrderedId] = useState([]);

    const currentList = activeTab === "plan" ? planlist : savedlist;

    const sortedList = [...currentList].sort((a, b) => {
        if (sortBy === "duration") return a.duration - b.duration;
        if (sortBy === "calories") return b.caloriesBurned - a.caloriesBurned;
        if (sortBy === "rating") return b.rating - a.rating;

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
            toast.success("Marked as Done")
        }
    }

    const renderTabContent = () => {
        if (sortedList.length === 0) {
            return (
                <div className="w-full mt-4 bg-[#13151A]/20 rounded-2xl border border-zinc-900/45 py-16 sm:py-20 flex flex-col items-center justify-center text-center px-4">
                    <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-1.5">
                        Nothing Here Yet
                    </h2>
                    <p className="text-zinc-500 text-xs sm:text-sm max-w-sm mb-6 font-medium leading-relaxed">
                        Browse the library and add a lift to get today moving.
                    </p>
                    <Link href="/">
                        <button className="bg-[#CCFF00] text-black font-bold text-xs px-5 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:bg-[#b2df00] tracking-wider cursor-pointer">
                            Go to workouts
                        </button>
                    </Link>
                </div>
            )
        }

        return (
            <div className="flex flex-col gap-3 sm:gap-4 mt-6 w-full text-left">
                {sortedList.map(item => (
                    <div
                        key={item.id}
                        className="w-full bg-[#13151A] rounded-2xl p-3 sm:p-4 border border-zinc-900/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all duration-200 hover:border-zinc-800"
                    >
                        {/* Image & Description*/}
                        <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto">

                            {/* Image*/}
                            <div className="relative w-20 h-14 sm:w-28 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 bg-zinc-900">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Description */}
                            <div className="flex flex-col gap-1 w-full min-w-0">
                                <h3 className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-tight text-white truncate">
                                    {item.name}
                                </h3>
                                <p className="text-zinc-500 text-[11px] sm:text-xs font-medium">
                                    {item.equipment || "Bodyweight"}
                                </p>

                                {/* Icons*/}
                                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-[10px] sm:text-[11px] font-semibold text-zinc-400 mt-0.5">
                                    <span className="flex items-center gap-1">
                                        <LuClock className="text-[#CCFF00] text-xs sm:text-sm" /> {item.duration} min
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FaFire className="text-[#CCFF00] text-xs sm:text-sm" /> {item.caloriesBurned} kcal
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <AiFillStar className="text-[#CCFF00] text-xs sm:text-sm" /> {item.rating}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Button*/}

                        <div className="flex items-center flex-wrap sm:flex-nowrap gap-2.5 sm:gap-3 w-full md:w-auto justify-between sm:justify-end pt-2 md:pt-0 border-t md:border-t-0 border-zinc-800/40">

                            {/* View Details Button */}
                            <Link
                                href={`/workouts/${item.id}`}
                                className="px-3.5 sm:px-4 py-2 border border-zinc-800 rounded-full text-[11px] sm:text-xs font-bold text-zinc-300 hover:text-white hover:bg-zinc-900 transition-all cursor-pointer whitespace-nowrap"
                            >
                                View Details
                            </Link>

                            {/* Mark as Done Button */}
                            {activeTab === "plan" && (
                                <button
                                    onClick={() => handleMarkDone(item.id)}
                                    disabled={orderedId.includes(item.id)}
                                    className={`
                                        flex items-center gap-1.5 font-bold text-[11px] 
                                        sm:text-xs px-3.5 sm:px-4 py-2 
                                        sm:py-2.5 rounded-full transition-all shadow-md whitespace-nowrap 
                                        ${orderedId.includes(item.id)
                                            ? 'bg-zinc-800 text-gray-500 cursor-not-allowed shadow-none'
                                            : 'bg-[#CCFF00] text-black hover:bg-[#b2df00] cursor-pointer'
                                        }`}
                                >
                                    <FaCheck className="text-xs" /> 
                                    {orderedId.includes(item.id) ? "Completed" : "Mark as Done"}
                                </button>
                            )}

                            {/* Remove Button */}
                            <button
                                onClick={() => handleRemove(item.id)}
                                className="text-gray-600 
                                hover:text-red-500 text-lg 
                                sm:text-xl p-1 transition-colors cursor-pointer ml-auto 
                                sm:ml-0 flex items-center justify-center"
                                title="Remove"
                            >
                                <RxCross2 />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className='container mx-auto p-3 sm:p-6 md:p-8 bg-[#0D1117] min-h-screen text-white font-sans flex flex-col gap-4 sm:gap-6'>

            {/* Stat Section */}
            <div className="w-full bg-[#13151A]/60 rounded-2xl p-4 sm:p-6 border border-zinc-900/60 grid grid-cols-3 gap-2 sm:gap-4 items-center">
                {/* Exercises */}
                <div className="flex flex-col gap-1">
                    <span className="text-zinc-500 text-[10px] md:text-xs tracking-wider">
                        Exercises
                    </span>
                    <span className="text-xl sm:text-2xl md:text-4xl font-bold text-[#CCFF00]">
                        {totalExercise}
                    </span>
                </div>

                {/* Minutes */}
                <div className="flex flex-col gap-1 border-l border-zinc-800/40 pl-3 sm:pl-4 md:pl-8">
                    <span className="text-zinc-500 text-[10px] md:text-xs tracking-wider">
                        Minutes
                    </span>
                    <span className="text-xl sm:text-2xl md:text-4xl font-bold text-white">
                        {totalMinute}
                    </span>
                </div>

                {/* Calories */}
                <div className="flex flex-col gap-1 border-l border-zinc-800/40 pl-3 sm:pl-4 md:pl-8">
                    <span className="text-zinc-500 text-[10px] md:text-xs tracking-wider">
                        Calories
                    </span>
                    <span className="text-xl sm:text-2xl md:text-4xl font-bold text-white">
                        {totalCalories}
                    </span>
                </div>
            </div>

            {/* Tab Control Bar & Content */}
            <div className="bg-[#090d12]/30 p-3 sm:p-4 rounded-xl border border-zinc-900/20 flex flex-col gap-4">

                {/* Tab Header & Sort Section */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-zinc-800/40 pb-4">

                    {/* Tabs Button */}
                    <div className="flex items-center gap-2 bg-[#13151A] p-1 rounded-xl border border-zinc-800">
                        <button
                            onClick={() => setActiveTab("plan")}
                            className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeTab === "plan"
                                ? "bg-[#CCFF00] text-black shadow-md"
                                : "text-zinc-400 hover:text-white"
                                }`}
                        >
                            Today's Plan
                        </button>
                        <button
                            onClick={() => setActiveTab("saved")}
                            className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeTab === "saved"
                                ? "bg-[#CCFF00] text-black shadow-md"
                                : "text-zinc-400 hover:text-white"
                                }`}
                        >
                            Saved
                        </button>
                    </div>

                    {/* Sort By Select Dropdown */}
                    <div className='flex justify-between sm:justify-start gap-2 items-center'>
                        <p className='text-gray-400 text-xs sm:text-sm'>Sort by</p>
                        <select
                            onChange={(e) => setSortBy(e.target.value)}
                            defaultValue="duration"
                            className="bg-[#13151A] text-gray-200 border border-zinc-800 rounded-lg px-3 py-2 text-xs sm:text-sm outline-none cursor-pointer"
                        >
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="w-full">
                    {renderTabContent()}
                </div>
            </div>

        </div>
    );
};

export default MyPlan;