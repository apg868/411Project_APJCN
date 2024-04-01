import React from 'react';

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
          <h2>Budget Breakdown</h2>
          {/* List of budget items */}
          {budgetData.map((item, index) => (
            <div key={index}>
              <span>{item.category}</span>
              <span>{`$${item.spent.toFixed(2)} of $${item.budget.toFixed(2)}`}</span>
              {/* Render progress bar with item.spent and item.budget */}
            </div>
          ))}
        </div>
      </div>

      {/* Budget Summary */}
      <div className="flex-1" style={{ height: "30vh", width: "40%" }}>
        <div className="bg-white rounded-lg shadow-md p-4 h-full">
          <h2>Budget Summary</h2>
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