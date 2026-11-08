
import React from 'react';

const Banner = () => {
    return (


        <div className='container mx-auto p-14 my-12 bg-[#15171D] rounded-xl'>

            <div className="hero-content flex-col lg:flex-row-reverse">


                <img
                    alt="Tailwind CSS hero component"
                    src="/assets/banner.png"
                />
                <div>
                    <h1 className="text-white text-5xl font-bold">TRAIN WITH INTENT. LOG
                        EVERY SET.</h1>
                    <p className="py-6 text-gray-300">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today's plan, and watch the week's work add up.
                    </p>
                    <a href="#workouts-section">
                        <button
                            href="#workouts-section"
                            className="inline-flex items-center justify-center bg-[#CCFF00] hover:bg-[#b2df00] text-black font-bold text-xs sm:text-sm px-6 py-3.5 rounded-sm tracking-wider transition-all duration-300 shadow-lg cursor-pointer"
                        >
                            BROWSE WORKOUTS
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;