import Link from 'next/link';
import React from 'react';


const WorkoutsCard = ({ work }) => {

    const { name, image, muscleGroups, equipment, duration, caloriesBurned, rating } = work;

    return (

        <Link href={`/workouts/${work.id}`}>
            <div className="w-full max-w-sm bg-[#13151A] rounded-2xl p-4 shadow-lg text-white border border-zinc-900 transition-all duration-300 hover:scale-[1.02]">


                <div className="relative w-full h-52 rounded-xl overflow-hidden mb-4">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>


                <div className="flex flex-wrap gap-2 mb-3">
                    {muscleGroups.map((muscle, index) => (
                        <span
                            key={index}
                            className="bg-[#CCFF00] text-black text-xs font-bold uppercase px-3 py-1 rounded-full tracking-wider"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>


                <div className="mb-4">
                    <h2 className="text-xl font-bold uppercase tracking-tight text-white mb-1 line-clamp-1">
                        {name}
                    </h2>
                    <p className="text-zinc-500 text-xs font-medium">
                        {equipment}
                    </p>
                </div>


                <hr className="border-zinc-800/80 my-3" />


                <div className="flex justify-between items-center text-zinc-400 text-sm font-medium px-1">


                    <div className="flex items-center gap-1.5">
                        <span className="text-zinc-500 text-base">🕒</span>
                        <span>{duration} min</span>
                    </div>


                    <div className="flex items-center gap-1.5">
                        <span className="text-zinc-500 text-base">🔥</span>
                        <span>{caloriesBurned} kcal</span>
                    </div>


                    <div className="flex items-center gap-1.5">
                        <span className="text-yellow-500 text-base">⭐</span>
                        <span>{rating}</span>
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default WorkoutsCard;
