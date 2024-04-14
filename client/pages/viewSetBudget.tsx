import React from 'react';
import Link from "next/link";
import '../src/app/globals.css';
import BudgetBreakdown from '@/app/components/budgetBreakdown';
import { dummyBudgetData, dummySummaryData } from '@/app/data';
import LinearProgress from '@mui/joy/LinearProgress';
import AddIcon from '@mui/icons-material/Add';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Button, Tooltip, ToggleButton, ToggleButtonGroup } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const viewSetBudget = () => {
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
                <div style={{display: "flex", justifyContent: "space-between", fontWeight: "bold"}}>
                <div style={{ 
                    fontSize: '2rem', 
                    fontWeight: '1000', 
                    background: `url('https://cdn.glitch.com/d1543bd7-bc7d-4cd5-bfe2-2119128d273a%2Fparticles.gif?v=1609615951326')`, 
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent'
                }}>
                    View Budget
                </div>
                    <div>
                        {/* Set Budget Button */}
                        <Link href="/setBudget" className="text-center">
                            <Button variant="contained" style = {{marginRight: '1.5vw', backgroundColor:'green'}}>
                                <AddIcon style = {{marginRight: '0.5vw'}}/>
                                    Set Budget
                            </Button>
                        </Link>


                        {/* Toggle Button */}
                        <ToggleButtonGroup
                            color="primary"
                            exclusive
                            aria-label="Platform"
                            >
                            <ToggleButton value="daily">Daily</ToggleButton>
                            <ToggleButton value="weekly">Weekly</ToggleButton>
                            <ToggleButton value="monthly">Monthly</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                
                {/* General Summary of Budget */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: '5vw' }}>
                    <div>
                        <div style={{ fontSize: '2em', fontWeight: 'bold' }}>${dummySummaryData.budget.toFixed(2)}</div>
                        <div style = {{textAlign: 'center'}}>Total Budget 
                            <Tooltip title={<span style={{ fontSize: '1.5em' }}>This is your total set budget</span>}>
                                <InfoOutlinedIcon/> 
                            </Tooltip>
                        </div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2em', fontWeight: 'bold' }}>${dummySummaryData.spentSoFar.toFixed(2)}</div>
                        <div style = {{textAlign: 'center'}}>Total Spent 
                            <Tooltip title={<span style={{ fontSize: '1.5em' }}>This is the amount you have spent</span>}>
                                <InfoOutlinedIcon/> 
                            </Tooltip>
                        </div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2em', fontWeight: 'bold', color: 'green' }}>${dummySummaryData.leftForBudget}</div>
                        <div style = {{textAlign: 'center'}}>Total Remaining 
                            <Tooltip title={<span style={{ fontSize: '1.5em' }}>This is the remaining amount you have to spend based on your budget</span>}>
                                <InfoOutlinedIcon/> 
                            </Tooltip>
                        </div>
                    </div>
                </div>

                {/* Budget Breakdown */}
                <div style={{ margin:'5vh' }}>
                    <div style={{display: "flex", justifyContent: "space-between", fontWeight: "bold"}}>
                        <span>Total Expense Budget</span>
                        <span>{`$${dummySummaryData.spentSoFar.toFixed(2)} of $${dummySummaryData.budget.toFixed(2)}`}</span>
                    </div>
                    <LinearProgress determinate value={dummySummaryData.spentSoFar/dummySummaryData.budget*100} style={{color: "green"}} size="lg"/>
                </div>

                <div style={{ width: '100%', margin: 'auto' }}>
                    <BudgetBreakdown budgetData = {dummyBudgetData}/>
                </div>
            </main>
        </div>
    );
}

export default viewSetBudget;