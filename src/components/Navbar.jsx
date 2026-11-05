'use client'
import React from 'react';
import NavLinks from './NavLinks';

const Navbar = () => {
    const navLinks = <>
        <li>
            <NavLinks href={"/"}>Workouts</NavLinks>
        </li>
        <li>
            <NavLinks href={"/myplan"}>My Plan</NavLinks>
        </li>
    </>
    return (
        <nav className='border-b border-gray-900 '>

            <div className="navbar container mx-auto">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">


                        <img src="/assets/logo.png" alt="logo" />
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>

                <div className="navbar-end">
                    <a className="p-4">Plan <span className='text-black font-bold px-2.5 py-1 m-1 rounded-full bg-[#C2F800]'>0</span></a>
                    <a className="p-4">Saved <span className='font-bold px-2.5 py-1 m-1 rounded-full border border-gray-500'>0</span></a>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;