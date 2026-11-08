import React from 'react';
import WorkoutsCard from './WorkoutsCard';

const Workouts = ({ works }) => {
    return (
        <div id="workouts-section" className='container mx-auto px-4 sm:px-6 md:px-8 my-6 sm:my-8'>

            <div className='w-full mb-6'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-white'>
                    The Library
                </h2>
                <p className='text-gray-400 text-xs sm:text-sm my-1'>
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            <div className='mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
                {works.map(work => (
                    <WorkoutsCard key={work.id} work={work} />
                ))}
            </div>

        </div>
    );
};

export default Workouts;