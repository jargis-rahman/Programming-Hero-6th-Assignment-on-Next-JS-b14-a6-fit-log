'use client'
import React from 'react';
import NavLinks from './NavLinks';
import Link from 'next/link';

const Navbar = () => {
    const navLinks = (
        <>
            <li>
                <NavLinks href="/">Workouts</NavLinks>
            </li>
            <li>
                <NavLinks href="/myplan">My Plan</NavLinks>
            </li>
        </>
    );

    return (
        <nav className='border-b border-gray-900 bg-[#0D1117] text-white'>

            <div className="navbar container mx-auto">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-[#1A1F26] text-white rounded-box z-20 mt-3 w-52 p-2 shadow"
                        >
                            {navLinks}
                        </ul>
                    </div>

                    <Link href="/" className="btn btn-ghost text-xl p-0 px-2">
                        <img src="/assets/logo.png" alt="logo" className="h-8 w-auto" />
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {navLinks}
                    </ul>
                </div>


                <div className="navbar-end gap-2 z-10 relative">
                    <Link
                        href="/myplan"
                        className="p-3 inline-flex items-center text-sm font-semibold hover:text-[#C2F800] transition-colors cursor-pointer"
                    >
                        Plan
                        <span className='text-black font-black px-2.5 py-0.5 m-1 rounded-full bg-[#C2F800] text-xs'>
                            0
                        </span>
                    </Link>

                    <Link
                        href="/myplan"
                        className="p-3 inline-flex items-center text-sm font-semibold hover:text-[#C2F800] transition-colors cursor-pointer"
                    >
                        Saved
                        <span className='font-bold px-2.5 py-0.5 m-1 rounded-full border border-gray-500 text-xs text-zinc-400 '>
                            0
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
