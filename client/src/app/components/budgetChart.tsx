import React from 'react';
import LinearProgress from '@mui/joy/LinearProgress';
import { PieChart } from '@mui/x-charts/PieChart';

interface BudgetData {
  category: string;
  spent: number;
  budget: number;
}

interface SummaryData {
  spentSoFar: string;
  leftForBudget: string;
}

interface BudgetChartProps {
  budgetData: BudgetData[];
  summaryData: SummaryData;
}

const BudgetChart: React.FC<BudgetChartProps> = ({ budgetData, summaryData }) => {
  return (
    <div className="flex space-x-8">
      {/* Budget Breakdown */}
      <div className="flex-1" style={{ height: "50vh", width: "60%" }}>
        <div className="bg-white rounded-lg shadow-md p-4 h-full">
          <b><h2>Budget Breakdown</h2></b>
          {/* List of budget items */}
          {budgetData.map((item, index) => (
            <div key={index}>
              <span style={{}}>{item.category}</span>
              <span style={{}}>{`$${item.spent.toFixed(2)} of $${item.budget.toFixed(2)}`}</span>
              {/* Render progress bar with item.spent and item.budget */}
              <LinearProgress determinate value={item.spent/item.budget*100} style={{color: "green"}} size="lg"/>
            </div>
          ))}
        </div>
      </div>

      {/* Budget Summary */}
      <div className="flex-1" style={{ height: "30vh", width: "40%" }}>
        <div className="bg-white rounded-lg shadow-md p-4 h-full">
          <b><h2>Budget Summary</h2></b>
          {/* Replace with actual pie chart component */}
          <div>
            {/* Render your pie chart with dummy data */}
            
          </div>
          <div>
            <span>Spent So Far: {summaryData.spentSoFar}</span>
            <span>Left for Budget: {summaryData.leftForBudget}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetChart;