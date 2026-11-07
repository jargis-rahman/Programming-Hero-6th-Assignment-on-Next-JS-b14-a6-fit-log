import Link from 'next/link';
import React from 'react';
import { LuClock } from 'react-icons/lu';
import { FaFire } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

const WorkoutsCard = ({ work }) => {

    const { name, image, muscleGroups, equipment, duration, caloriesBurned, rating } = work;

    return (
        <Link href={`/workouts/${work.id}`} className="w-full">
            <div className="w-full bg-[#13151A] rounded-2xl p-4 shadow-lg text-white border border-zinc-900 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between h-full">

                <div>
                    {/* Image */}
                    <div className="relative w-full h-52 rounded-xl overflow-hidden mb-4 bg-zinc-900">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Muscle Groups Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                        {muscleGroups.map((muscle, index) => (
                            <span
                                key={index}
                                className="bg-[#CCFF00] text-black text-xs font-semibold px-3 py-1 rounded-full tracking-wider"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Title & Equipment */}
                    <div className="mb-4">
                        <h2 className="text-xl font-bold uppercase tracking-tight text-white mb-1 line-clamp-1">
                            {name}
                        </h2>
                        <p className="text-zinc-500 text-xs font-medium">
                            {equipment || "Bodyweight"}
                        </p>
                    </div>
                </div>

                <div>
                    <hr className="border-zinc-800/80 my-3" />

                    {/* Icons*/}
                    <div className="flex justify-between items-center text-zinc-400 text-sm font-medium px-1">
                        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-[10px] sm:text-[11px] font-semibold text-zinc-400">
                            <span className="flex items-center gap-1">
                                <LuClock className="text-[#CCFF00] text-xs sm:text-sm" /> {duration} min
                            </span>
                            <span className="flex items-center gap-1">
                                <FaFire className="text-[#CCFF00] text-xs sm:text-sm" /> {caloriesBurned} kcal
                            </span>
                            <span className="flex items-center gap-1">
                                <AiFillStar className="text-[#CCFF00] text-xs sm:text-sm" /> {rating}
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default WorkoutsCard;