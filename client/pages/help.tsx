import React from 'react';
import Link from "next/link";
import '../src/app/globals.css';
import { TextField } from '@mui/material';

const help = () => {
    return (
        <div className="flex min-h-screen">
            {/* Navbar */}
            <nav className="bg-gradient-to-t from-indigo-400 to-indigo-700 dark:bg-zinc-800/30 w-30 p-4 flex flex-col justify-between">
                {/* Icons */}
                <div className="flex items-center justify-between mb-4">

                <div className="flex items-center"> 
                    <div className="w-12 h-12 bg-gray-400 dark:bg-gray-600 rounded-full"></div> 
                </div>
                
                <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-400 dark:bg-gray-600"></div>
                    <div className="w-8 h-8 bg-gray-400 dark:bg-gray-600"></div>
                </div>
                </div>

                {/* Tabs */}
            <div className="flex flex-col space-y-12 flex-grow font-bold text-white">
                <Link href="./" className="text-center">
                    Dashboard
                </Link>
                <Link href="/aboutUs" className="text-center">
                    About Us
                </Link>
                <Link href="./" className="text-center">
                    View Transaction History
                </Link>
                <Link href="/viewSetBudget" className="text-center">
                    View Budget
                </Link>
                <Link href="/help" className="text-center">
                    Help and Support
                </Link>
                </div>

                {/* Login */}
                <div className="flex items-center justify-left mb-4">
                <div className="flex items-left ml-4"> 
                    <div className="w-12 h-12 bg-gray-400 dark:bg-gray-600 rounded-full"></div> 
                </div>
                <div className="flex text-center items-center text-white font-bold ml-2">
                    <a href="#">Account</a>
                </div>
                </div>
            </nav>

            {/* Dashboard */}
            <main className="flex-1 p-8">
                {/* Title */}
                <div style = {{fontSize: "2rem", fontWeight: "bold", textAlign: "center"}}>
                    <h1>Help And Support</h1>
                </div>

                {/* FAQs */}
                <div style = {{marginBottom: '5vh'}}>
                    <h2 style = {{fontSize: "1.5rem", margin: '2vh', fontWeight: 'bold'}}> Frequently Asked Questions </h2>
                    <div>
                        asdas
                    </div>
                </div>

                {/* Contact US */}
                <div style = {{marginBottom: '5vh'}}>
                    <h2 style = {{fontSize: "1.5rem", margin: '2vh', fontWeight: 'bold'}}> Contact Us </h2>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span>E-Mail:</span>
                        <TextField variant="outlined" style={{ marginLeft: '1rem', flex: 1 }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span>Message:</span>
                        <TextField variant="outlined" style={{ marginLeft: '1rem', flex: 1, padding: '1rem' }} />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default help;