import React from 'react';
import Link from "next/link";
import '../src/app/globals.css';
import BudgetBreakdown from '@/app/components/budgetBreakdown';
import { dummyBudgetData, dummySummaryData } from '@/app/data';
import LinearProgress from '@mui/joy/LinearProgress';
import AddIcon from '@mui/icons-material/Add';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Button, Tooltip, ToggleButton, ToggleButtonGroup } from '@mui/material';

const viewSetBudget = () => {
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
                <Link href="./" className="text-center">
                    About Us
                </Link>
                <Link href="./" className="text-center">
                    View Transaction History
                </Link>
                <Link href="/viewSetBudget" className="text-center">
                    View Budget
                </Link>
                <Link href="./" className="text-center">
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
                <div style={{display: "flex", justifyContent: "space-between", fontWeight: "bold"}}>
                    View Budget
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