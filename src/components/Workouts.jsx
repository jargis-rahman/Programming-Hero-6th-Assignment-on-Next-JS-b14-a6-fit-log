
import React from 'react';
import WorkoutsCard from './WorkoutsCard';

const Workouts = ({ works }) => {
    return (
        <div>

            <div className='container mx-auto my-6'>
                <h2 className='text-4xl font-bold uppercase'>The Library</h2>
                <p className='text-gray-400 my-1'>Twelve lifts covering every major muscle group.</p>
            </div>

            <div className='container mx-auto grid grid-cols-3 gap-5'>
                {works.map(work => <WorkoutsCard key={work.id} work={work}></WorkoutsCard>)}
            </div>

        </div>
    );
};

export default Workouts;