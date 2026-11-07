import { useWorkContext } from '@/context/WorkContext';
import Link from 'next/link';
import React from 'react';

const NavbarButtons = () => {
    const { planlist, savedlist } = useWorkContext();
    return (
        <div>
            <Link
                href="/myplan"
                className="p-3 inline-flex items-center text-sm font-semibold hover:text-[#C2F800] transition-colors cursor-pointer"
            >
                Plan
                <span className='text-black font-black px-3 py-2 m-1.5 rounded-full bg-[#C2F800] text-xs'>
                    {planlist.length}
                </span>
            </Link>

            <Link
                href="/myplan"
                className="p-3 inline-flex items-center text-sm font-semibold hover:text-[#C2F800] transition-colors cursor-pointer"
            >
                Saved
                <span className='font-bold px-3 py-2 m-1.5 rounded-full border border-gray-500 text-xs text-zinc-400 '>
                    {savedlist.length}
                </span>
            </Link>
        </div>
    );
};

export default NavbarButtons;