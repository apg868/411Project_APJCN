import React from 'react';
import Link from "next/link";
import '../src/app/globals.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const aboutUs = () => {
    const dummyImg = 'https://media.istockphoto.com/id/464988959/photo/mallard-duck-on-white-background.jpg?s=612x612&w=0&k=20&c=S1jcDuyXuoCVUaTobTrZ5f6SlscukkyheqKDHAeflW8='
    const cardData = [
        { id: 1, image: dummyImg, name: 'John Doe', description: 'Description 1', contact: 'xyz@gmail.com' },
        { id: 2, image: dummyImg, name:'Jane Doe', description: 'Description 2', contact:'z@gmail.com' },
        { id: 3, image: dummyImg, name:'Bon', description: 'Description 3', contact: 'abc@gmail.com' },
        { id: 4, image: dummyImg, name:'Bonnie', description: 'Description 4', contact: '2@gmail.com' }
    ];
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
                    About Us
                </div>
                
                {/* Mission Statement */}
                <h2 style = {{fontSize: "1.5rem", margin: '2vh', fontWeight: 'bold'}}> Mission Statement </h2>
                <div style = {{marginBottom: '5vh', backgroundColor: 'white', padding: '2vh', borderRadius: '10px', fontSize:'1.2em'}}>
                    Our mission is to help you manage your finances more effectively and efficiently. 
                    Keep track of weekly and monthly expenses using Capital Crest's expense tracking tool. 
                    We strive to educate our users on the importance of budgeting, saving, and investing wisely, equipping them with the knowledge and tools they need to achieve their long-term financial goals.
                    Create a budget today!
                </div>

                {/* Our Team */}
                <div>
                    <h2 style = {{fontSize: "1.5rem", margin: '2vh', fontWeight: 'bold'}}> Meet Our Team </h2>
                    <div className="grid grid-cols-4 gap-4">
                        {cardData.map((card) => (
                            <div key={card.id} className="bg-white p-4 rounded-lg shadow-md">
                                <div className="h-80 bg-cover bg-center" style={{ backgroundImage: `url(${card.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                <div className="p-4">
                                    <p>{card.name}</p>
                                </div>
                                <div className="p-4">
                                    <p>{card.description}</p>
                                </div>
                                <div className="p-4">
                                    <p>{card.contact}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </main>
        </div>
    );
}

export default aboutUs;