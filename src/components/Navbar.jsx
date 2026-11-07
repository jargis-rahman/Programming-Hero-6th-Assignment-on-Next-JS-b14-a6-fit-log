'use client'
import React from 'react';
import NavLinks from './NavLinks';
import Link from 'next/link';
import NavbarButtons from './NavbarButtons';

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
                    
                    <NavbarButtons></NavbarButtons>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
