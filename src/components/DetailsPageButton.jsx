"use client"
import { useWorkContext } from '@/context/WorkContext';
import React from 'react';
import toast from 'react-hot-toast';

const DetailsPageButton = ({ workdetails }) => {
    const { planlist, setPlanlist, savedlist, setSavedlist } = useWorkContext();

    const isPlanFull = planlist.length >= 5;
    const alreadyInPlan = planlist.some(item => item.id === workdetails.id);
    const alreadySaved = savedlist.some(item => item.id === workdetails.id);

    const handleAddToPlan = () => {
        if (alreadyInPlan) {
            toast.error("Already Plan Added");
            return;
        }
        if (isPlanFull) {
            toast.error("Plan Full");
            return;
        }
        setPlanlist(prev => [...prev, workdetails]);
        toast.success("Added to Today's Plan")
    }

    const handleAddToSave = () => {
        if (alreadySaved) {
            toast.error("Already Saved");
            return;
        }

        setSavedlist(prev => [...prev, workdetails]);
        toast.success("Plan Saved Succesfuly")
    }


    return (
        <div className="flex flex-wrap gap-3 mt-2">
            <button
                onClick={handleAddToPlan}

                className="
                flex items-center gap-2 bg-[#CCFF00] text-black font-semibold text-sm px-5 py-3 rounded-xl transition-all hover:bg-[#b2df00] cursor-pointer ">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add to today's plan
            </button>
            <button
                onClick={handleAddToSave}

                className="flex items-center gap-2 bg-transparent text-white border border-zinc-700 font-semibold text-sm px-5 py-3 rounded-xl transition-all hover:bg-zinc-800/50 cursor-pointer">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
                Save for later
            </button>
        </div>
    );
};

export default DetailsPageButton;