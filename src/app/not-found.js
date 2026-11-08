import Link from 'next/link';
import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] w-full px-4 text-center">
            
            {/* Icon */}
            <div className="bg-[#13151A] p-5 rounded-2xl border border-zinc-900 mb-4 shadow-lg text-[#CCFF00] text-3xl sm:text-4xl">
                <FaExclamationTriangle />
            </div>

            {/* Error Code */}
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tight mb-2">
                404
            </h1>
            
            <h2 className="text-lg sm:text-xl font-bold text-zinc-300 uppercase tracking-tight mb-2">
                Page Not Found
            </h2>

            <p className="text-zinc-500 text-xs sm:text-sm max-w-sm mb-6 font-medium leading-relaxed">
                The page you are looking for doesn't exist or has been moved.
            </p>

            {/* Back to Home Page Button */}
            <Link href="/">
                <button className="bg-[#CCFF00] text-black font-bold text-xs px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:bg-[#b2df00] tracking-wider cursor-pointer">
                    Back to Home
                </button>
            </Link>

        </div>
    );
};

export default NotFound;