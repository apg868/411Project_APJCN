'use client'
import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import BudgetBreakdown from './budgetBreakdown';

interface BudgetData {
  category: string;
  spent: number;
  budget: number;
}

interface SummaryData {
  spentSoFar: number;
  leftForBudget: number;
}

interface BudgetProps {
  budgetData: BudgetData[];
  summaryData: SummaryData;
}

// Budget Component
const Budget: React.FC<BudgetProps> = ({ budgetData, summaryData }) => {
  return (
    <div className="flex space-x-8">
      {/* Budget Breakdown */}
      <BudgetBreakdown budgetData={budgetData}/>

      {/* Budget Summary */}
      <div className="flex-1" style={{ height: "40vh", width: "40%" }}>
        <div className="bg-white rounded-lg shadow-md p-4 h-full">
          <b><h2 style ={{marginBottom: "2vh"}}>Budget Summary</h2></b>
          {/* pie chart component */}
          <div>
            {/* Render your pie chart with dummy data */}
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: budgetData[0].spent, label: budgetData[0].category },
                    { id: 1, value: budgetData[1].spent, label: budgetData[1].category },
                    { id: 2, value: budgetData[2].spent, label: budgetData[2].category },
                    { id: 3, value: summaryData.leftForBudget, label: "Left" },
                  ],
                },
              ]}
              width={500}
              height={200}
            />
            
          </div>
          <div style={{display: "flex", flexDirection: "column"}}>
            <span style ={{marginTop: "2vh"}}><b>Spent So Far:</b> {summaryData.spentSoFar}</span>
            <span style ={{marginTop: "2vh"}}><b>Left for Budget:</b> {summaryData.leftForBudget}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;