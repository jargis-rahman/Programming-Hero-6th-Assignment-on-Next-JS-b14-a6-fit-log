"use client"
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';
import { WorkProvider } from '@/context/WorkContext';

const ClientLayout = ({ children }) => {
    return (
        <div>
            <WorkProvider>
                <nav>
                    <Navbar></Navbar>
                </nav>

                <main className="min-h-[60vh]">{children}</main>
                <Footer></Footer>
                <Toaster />
            </WorkProvider>
        </div>
    );
};

export default ClientLayout;