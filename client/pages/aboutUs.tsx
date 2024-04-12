import React from 'react';
import Link from "next/link";
import '../src/app/globals.css';

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
                    <h1>About Us</h1>
                </div>
                
                {/* Mission Statement */}
                <div style = {{marginBottom: '5vh'}}>
                    <h2 style = {{fontSize: "1.5rem", margin: '2vh', fontWeight: 'bold'}}> Mission Statement </h2>
                    <div>
                        Our mission is to help you manage your finances more effectively and efficiently.
                    </div>
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