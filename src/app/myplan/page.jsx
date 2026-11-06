import MyPlan from '@/components/MyPlan';
import React from 'react';

const MyPlanPage = () => {
    return (
        <div className='container mx-auto flex flex-col gap-5'>
             <div>
            <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-1 text-white">
                My Plan
            </h1>
            <p className="text-zinc-500 text-xs md:text-sm font-medium">
                Cap of five lifts for today. Finish them, then load more.
            </p>
        </div>
            <MyPlan></MyPlan>
        </div>
    );
};

export default MyPlanPage;