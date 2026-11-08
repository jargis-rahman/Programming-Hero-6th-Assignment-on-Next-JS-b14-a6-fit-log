
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
                    <h1 className="text-5xl font-bold">TRAIN WITH INTENT. LOG
                        EVERY SET.</h1>
                    <p className="py-6 text-gray-300">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today's plan, and watch the week's work add up.
                    </p>
                    <a href="#workouts-section">
                        <button className="btn bg-[#C2F800] text-black font-bold">BROWSE WORKOUTS</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;