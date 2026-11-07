import MyPlan from '@/components/MyPlan';
import React from 'react';

const MyPlanPage = () => {
    return (
        <div className='container mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-4 sm:gap-6 my-6 sm:my-8'>
            <div className="w-full">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight mb-1 text-white">
                    My Plan
                </h1>
                <p className="text-zinc-500 text-xs sm:text-sm font-medium">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>
            
            <div className="w-full">
                <MyPlan />
            </div>
        </div>
    );
};

export default MyPlanPage;