import React from 'react';
import LinearProgress from '@mui/joy/LinearProgress';
import { PieChart } from '@mui/x-charts/PieChart';
import BudgetBreakdown from './budgetBreakdown';

interface BudgetData {
  category: string;
  spent: number;
  budget: number;
}

interface SummaryData {
  spentSoFar: string;
  leftForBudget: string;
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
      <div className="flex-1" style={{ height: "30vh", width: "40%" }}>
        <div className="bg-white rounded-lg shadow-md p-4 h-full">
          <b><h2>Budget Summary</h2></b>
          {/* pie chart component */}
          <div>
            {/* Render your pie chart with dummy data */}
            
          </div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <span>Spent So Far: {summaryData.spentSoFar}</span>
            <span>Left for Budget: {summaryData.leftForBudget}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;