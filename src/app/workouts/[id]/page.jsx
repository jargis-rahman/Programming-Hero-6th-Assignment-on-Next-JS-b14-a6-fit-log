import { getWorkDetails } from '@/lib/api';
import React from 'react';

const WorkoutDetailsPage = async ({ params }) => {
    const { id } = await params;
    const data = await getWorkDetails(id);


    const workdetails = data?.data || data;

    if (!workdetails) {
        return (
            <div className="min-h-screen bg-[#0D1117] text-white flex items-center justify-center font-sans">
                <p className="text-xl font-semibold text-zinc-400">Workout Details not found</p>
            </div>
        );
    }


    const {
        name,
        image,
        muscleGroups,
        equipment,
        difficulty,
        sets,
        reps,
        duration,
        caloriesBurned,
        rating,
        description,
        instructions,
    } = workdetails;

    return (
        <div className="container mx-auto min-h-screen  text-white p-4 md:p-8 font-sans flex items-center justify-center w-full">

            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">


                <div className="relative w-full aspect-square md:h-[550px] rounded-2xl overflow-hidden border border-zinc-900 shadow-xl">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>


                <div className="flex flex-col gap-6">

                    <div>
                        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">
                            {name}
                        </h1>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
                            {description}
                        </p>
                    </div>


                    <div className="flex flex-wrap gap-2">
                        {muscleGroups?.map((muscle, idx) => (
                            <span
                                key={idx}
                                className="bg-[#CCFF00] text-black text-xs font-black uppercase px-3 py-1 rounded-full tracking-wider"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>


                    <div className="bg-[#13151A] rounded-2xl p-4 border border-zinc-900/50 flex flex-col divide-y divide-zinc-800/50">
                        <div className="flex justify-between py-3 text-sm">
                            <span className="text-zinc-500 uppercase font-semibold text-xs tracking-wider">Equipment</span>
                            <span className="font-medium text-zinc-300">{equipment}</span>
                        </div>
                        <div className="flex justify-between py-3 text-sm">
                            <span className="text-zinc-500 uppercase font-semibold text-xs tracking-wider">Difficulty</span>
                            <span className="font-medium text-zinc-300">{difficulty}</span>
                        </div>
                        <div className="flex justify-between py-3 text-sm">
                            <span className="text-zinc-500 uppercase font-semibold text-xs tracking-wider">Sets</span>
                            <span className="font-medium text-zinc-300">{sets}</span>
                        </div>
                        <div className="flex justify-between py-3 text-sm">
                            <span className="text-zinc-500 uppercase font-semibold text-xs tracking-wider">Reps</span>
                            <span className="font-medium text-zinc-300">{reps}</span>
                        </div>
                        <div className="flex justify-between py-3 text-sm">
                            <span className="text-zinc-500 uppercase font-semibold text-xs tracking-wider">Duration</span>
                            <span className="font-medium text-zinc-300">{duration} min</span>
                        </div>
                        <div className="flex justify-between py-3 text-sm">
                            <span className="text-zinc-500 uppercase font-semibold text-xs tracking-wider">Calories</span>
                            <span className="font-medium text-zinc-300">{caloriesBurned} kcal</span>
                        </div>
                        <div className="flex justify-between py-3 text-sm">
                            <span className="text-zinc-500 uppercase font-semibold text-xs tracking-wider">Rating</span>
                            <span className="font-medium text-zinc-300">⭐ {rating}</span>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-xs font-black uppercase text-zinc-400 tracking-widest mb-3">
                            Instructions
                        </h3>
                        <ol className="flex flex-col gap-2.5 text-zinc-300 text-sm">
                            {instructions?.map((step, idx) => (
                                <li key={idx} className="flex gap-2 leading-relaxed">
                                    <span className="text-zinc-500 font-bold">{idx + 1}.</span>
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>


                    <div className="flex flex-wrap gap-3 mt-2">
                        <button className="flex items-center gap-2 bg-[#CCFF00] text-black font-extrabold text-sm uppercase px-5 py-3 rounded-xl transition-all hover:bg-[#b2df00] cursor-pointer">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Add to today's plan
                        </button>
                        <button className="flex items-center gap-2 bg-transparent text-white border border-zinc-700 font-extrabold text-sm uppercase px-5 py-3 rounded-xl transition-all hover:bg-zinc-800/50 cursor-pointer">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>
                            Save for later
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WorkoutDetailsPage;
