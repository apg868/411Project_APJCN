import React from 'react';
import '../globals.css';
import Navbar from '@/app/components/navbar';

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
            <div className="bg-gradient-to-t from-indigo-400 to-indigo-700 dark:bg-zinc-800/30 w-30 p-4 flex flex-col justify-between">
                <Navbar/>
            </div>

            {/* Dashboard */}
            <main className="flex-1 p-8">
                {/* Title */}
                <div style={{ 
                    fontSize: '38px', 
                    fontWeight: '950', 
                    textAlign: 'center', 
                    background: `url('https://cdn.glitch.me/d1543bd7-bc7d-4cd5-bfe2-2119128d273a%2Fparticles.gif')`, 
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