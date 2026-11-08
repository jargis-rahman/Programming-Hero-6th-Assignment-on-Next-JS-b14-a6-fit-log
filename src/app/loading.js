import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] w-full gap-3">
            {/* Animation */}
            <div className="w-10 h-10 border-4 border-zinc-800 border-t-[#CCFF00] rounded-full animate-spin"></div>
            
            {/* Loading Text */}
            <p className="text-zinc-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Loading...
            </p>
        </div>
    );
};

export default Loading;