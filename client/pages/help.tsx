import React from 'react';
import Link from "next/link";
import '../src/app/globals.css';
import { Button, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const help = () => {
    return (
        <div className="flex min-h-screen">
            {/* Navbar */}
            <nav className="bg-gradient-to-t from-indigo-400 to-indigo-700 dark:bg-zinc-800/30 w-30 p-4 flex flex-col justify-between">
                {/* Icons */}
                <div className="flex items-center justify-between mb-4">

                <div className="flex items-center"> 
                    <AccountBalanceIcon className="w-8 h-8 text-white"/>
                </div>
                
                <div className="flex items-center space-x-4">
                    <SearchIcon className="w-8 h-8 text-white"/>
                    <MenuIcon className="w-8 h-8 text-white"/>
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
                    <div className="w-12 h-12 rounded-full" style = {{backgroundColor: '#00b1d2'}}>
                        <LockOpenIcon className="w-10 h-10 ml-1 mt-1"/>
                    </div> 
                </div>
                <div className="flex text-center items-center text-white font-bold ml-2">
                    <Link href="/account">
                        Account
                    </Link>
                </div>
                </div>
            </nav>

            {/* Dashboard */}
            <main className="flex-1 p-8">
                {/* Title */}
                <div style={{ 
                    fontSize: '38px', 
                    fontWeight: '950', 
                    textAlign: 'center', 
                    background: `url('https://cdn.glitch.com/d1543bd7-bc7d-4cd5-bfe2-2119128d273a%2Fparticles.gif?v=1609615951326')`, 
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent'
                }}>
                    Help And Support
                </div>

                {/* FAQs */}
                <div style = {{marginBottom: '5vh'}}>
                    <h2 style = {{fontSize: "1.5rem", margin: '2vh', fontWeight: 'bold'}}> Frequently Asked Questions </h2>
                    <div style = {{marginBottom: '5vh', backgroundColor: 'white', padding: '2vh', borderRadius: '10px', fontSize:'1.2em'}}>
                        <ol>
                            <li>Question 1</li>
                            <li>Question 2</li>
                        </ol>
                    </div>
                </div>

                {/* Contact US */}
                <div style = {{marginBottom: '5vh'}}>
                    <h2 style = {{fontSize: "1.5rem", margin: '2vh', fontWeight: 'bold'}}> Contact Us </h2>
                        <div style = {{marginBottom: '5vh', backgroundColor: 'white', padding: '2vh', borderRadius: '10px', fontSize:'1.2em'}}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span>E-Mail:</span>
                            <TextField variant="outlined" style={{ marginLeft: '1.4rem', flex: 1, padding: '1rem' }} />
                        </div>
                        <div style={{ display: 'flex' }}>
                            <span style = {{marginTop:'2rem'}}>Message:</span>
                            <TextField 
                                variant="outlined" 
                                style={{ flex: 1, padding: '1rem' }} 
                                multiline
                                rows = {10}
                                InputProps = {{ style: {height:'auto', paddingTop: 0}}}
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '4vh' }}>
                            <Button variant="contained" style={{ fontSize:'1rem', width: '20vw', background: `url('https://cdn.glitch.com/d1543bd7-bc7d-4cd5-bfe2-2119128d273a%2Fparticles.gif?v=1609615951326')`, borderRadius: '20px' }}>        
                                Send Feedback
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default help;