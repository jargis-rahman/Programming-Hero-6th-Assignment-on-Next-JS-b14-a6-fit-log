import DetailsPageButton from '@/components/DetailsPageButton';
import { getWorkDetails } from '@/lib/api';
import React from 'react';

const WorkoutDetailsPage = async ({ params }) => {
    const { id } = await params;
    const data = await getWorkDetails(id);


    const workdetails = data?.data || data;

    if (!workdetails) {
        return (
            <div className="min-h-screen bg-[#0D1117] text-white flex items-center justify-center font-sans">
                <p className="text-xl font-semibold text-gray-400">Workout Details not found</p>
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


                <div className="relative w-full aspect-square md:h-[550px] rounded-2xl overflow-hidden border border-gray-900 shadow-xl">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>


                <div className="flex flex-col gap-6">

                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-2">
                            {name}
                        </h1>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                            {description}
                        </p>
                    </div>


                    <div className="flex flex-wrap gap-2">
                        {muscleGroups?.map((muscle, idx) => (
                            <span
                                key={idx}
                                className="bg-[#CCFF00] text-black text-xs font-semibold  px-3 py-1 rounded-full tracking-wider"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>


                    <div className="bg-[#13151A] rounded-2xl p-4 border border-gray-900/50 flex flex-col divide-y divide-gray-800/50">
                        <div className="flex justify-between py-3 text-sm">
                            <span className="text-gray-500 uppercase font-semibold text-xs tracking-wider">Equipment</span>
                            <span className="font-medium text-gray-300">{equipment}</span>
                        </div>
                        <div className="flex justify-between py-3 text-sm">
                            <span className="text-gray-500 uppercase font-semibold text-xs tracking-wider">Difficulty</span>
                            <span className="font-medium text-gray-300">{difficulty}</span>
                        </div>
                        <div className="flex justify-between py-3 text-sm">
                            <span className="text-gray-500 uppercase font-semibold text-xs tracking-wider">Sets</span>
                            <span className="font-medium text-gray-300">{sets}</span>
                        </div>
                        <div className="flex justify-between py-3 text-sm">
                            <span className="text-gray-500 uppercase font-semibold text-xs tracking-wider">Reps</span>
                            <span className="font-medium text-gray-300">{reps}</span>
                        </div>
                        <div className="flex justify-between py-3 text-sm">
                            <span className="text-gray-500 uppercase font-semibold text-xs tracking-wider">Duration</span>
                            <span className="font-medium text-gray-300">{duration} min</span>
                        </div>
                        <div className="flex justify-between py-3 text-sm">
                            <span className="text-gray-500 uppercase font-semibold text-xs tracking-wider">Calories</span>
                            <span className="font-medium text-gray-300">{caloriesBurned} kcal</span>
                        </div>
                        <div className="flex justify-between py-3 text-sm">
                            <span className="text-gray-500 uppercase font-semibold text-xs tracking-wider">Rating</span>
                            <span className="font-medium text-gray-300"> {rating}</span>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-xs font-bold uppercase text-white tracking-widest mb-3">
                            Instructions
                        </h3>
                        <ol className="flex flex-col gap-2.5 text-gray-300 text-sm">
                            {instructions?.map((step, idx) => (
                                <li key={idx} className="flex gap-2 leading-relaxed">
                                    <span className="text-gray-400 ">{idx + 1}.</span>
                                    <span className='text-gray-350'>{step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>


                    {/* Button */}

                    <DetailsPageButton workdetails={workdetails}></DetailsPageButton>

                </div>
            </div>
        </div>
    );
};

export default WorkoutDetailsPage;
