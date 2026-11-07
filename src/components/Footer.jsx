import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer border-t border-gray-900  text-neutral-content p-4 sm:p-6">
            <div className='container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4'>

                {/* Logo */}
                <Link href="/" className="btn btn-ghost text-xl p-0 px-2 items-center">
                    <img src="/assets/logo.png" alt="logo" className="h-8 w-auto" />
                </Link>

                {/* Copyright */}
                <nav className="text-center sm:text-right">
                    <a href="">
                        <p className="text-xs sm:text-sm text-neutral-content/80">
                        Copyright © {new Date().getFullYear()} - All right reserved
                    </p>
                    </a>
                </nav>

            </div>
        </footer>
    );
};

export default Footer;