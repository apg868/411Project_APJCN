import React from 'react';
import '../src/app/globals.css';
import { Button, TextField } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import Navbar from '@/app/components/navbar';

const help = () => {
    const questions = [
        'How do I set a budget?', 
        'How do I record my expenses?', 
        'How do I categorize my expenditure?', 
        'Where can I find a more detailed report of my transactions?', 
        'What does linking my account mean?', 
        'How do I link my account?'
    ];
    const answers = [
        'You can go to the "Add Budget" tab in the Navbar on the left and then view or set your periodic budget', 
        'Our platform links to your bank account directly so you do not need to enter your expenses manually. Any transaction you make will be synced on our system as your bank account auto-updates.', 
        'You will not have to categorize the expenditures yourself since our platform makes use of Plaid API, which will do the categorizing for you.',
        'You can either view the report of your transactions on the "View Transaction History" tab in the Navbar on the left or you can view the report of your transactions on the main Dashboard, which will include various reports of those data.',
        'Linking your account will allow us to access your transaction data from your bank so that we can provide a more personalized experience for you.',
        'To link your account, you can ...'
    ];
    const [faq, setExpandFAQ] = useState('');

    const handleExpandFAQ = (question: string) => {
        setExpandFAQ(faq === question ? '' : question);
    }

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
                        {questions.map((question, index)=>(
                            <div>
                                <div key = {index} style = {{marginBottom: '2vh', display: "flex", justifyContent: "space-between", fontWeight: 'bold'}} onClick = {() => handleExpandFAQ(question)}>
                                    {question}
                                    {faq === question ? <KeyboardArrowUpIcon style={{ cursor: "pointer" }}/> : <KeyboardArrowDownIcon style={{ cursor: "pointer" }}/>}
                                </div>
                            {faq === question && (
                                <div style = {{marginBottom: '2vh', display: "flex", justifyContent: "space-between"}}>
                                    {answers[index]}
                                </div>
                            )}
                            </div>
                        ))}
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
                                rows = {6}
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