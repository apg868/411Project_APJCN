import React from 'react';
import Link from "next/link";
import '../globals.css';
import BudgetBreakdown from '@/app/components/budgetBreakdown';
import { dummyBudgetData, dummySummaryData } from '@/app/data';
import LinearProgress from '@mui/joy/LinearProgress';
import AddIcon from '@mui/icons-material/Add';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Button, Tooltip, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Navbar from '@/app/components/navbar';

const viewSetBudget = () => {
    return (
        <div className="flex min-h-screen">
            {/* Navbar */}
            <div className="bg-gradient-to-t from-indigo-400 to-indigo-700 dark:bg-zinc-800/30 w-30 p-4 flex flex-col justify-between">
                <Navbar/>
            </div>

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
                        <Link href="../setBudget" className="text-center">
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