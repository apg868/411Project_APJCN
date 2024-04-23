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
  budget: number;
  spentSoFar: number;
  leftForBudget: number;
}

interface BudgetProps {
  budgetData: BudgetData[];
  summaryData: SummaryData;
}

const sizing = {
  margin: { right: 320 },
  legend: { hidden: false},
};

// Budget Component
const Budget: React.FC<BudgetProps> = ({ budgetData, summaryData }) => {
  return (
    <div className="flex space-x-8">
      {/* Budget Breakdown */}
      <div style = {{width: "50%"}}>
        <BudgetBreakdown budgetData={budgetData}/>
      </div>
      {/* Budget Summary */}
      <div className="flex-1" style={{ height: "41vh", width: "40%" }}>
        <div className="bg-white rounded-lg shadow-md p-4 h-full">
          <b><h2 style ={{marginBottom: "1vh"}}>Budget Summary</h2></b>
          {/* pie chart component */}
          <div>
            {/* Render your pie chart with dummy data */}
            <PieChart
              series={[
                {
                  data: [
                    ...budgetData.map((item, index) => ({
                      id: index,
                      value: item.spent,
                      label: item.category,
                    })),
                    {
                      id: budgetData.length + 1,
                      value: summaryData.leftForBudget,
                      label: "Left",
                    },
                  ],
                },
              ]}
              {...sizing}
              width={520}
              height={180}
            />
            
          </div>
          <div style={{display: "flex", flexDirection: "column"}}>
            <span style ={{marginTop: "1vh"}}><b>Budget:</b> {summaryData.budget.toFixed(2)}</span>
            <span style ={{marginTop: "1vh"}}><b>Spent So Far:</b> {summaryData.spentSoFar.toFixed(2)}</span>
            <span style ={{marginTop: "1vh"}}><b>Left for Budget:</b> {summaryData.leftForBudget.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;