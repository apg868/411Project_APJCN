import React from 'react';
import LinearProgress from '@mui/joy/LinearProgress';

interface BudgetData {
  category: string;
  spent: number;
  budget: number;
}

interface BudgetProps {
  budgetData: BudgetData[];
}

// Budget Breakdown Component
const budgetBreakdown: React.FC<BudgetProps> = ({budgetData}) => {
  return (
    <div className="flex-1" style={{ height: "43vh" }}>
        <div className="bg-white rounded-lg shadow-md p-4 h-full">
          <b><h2 style={{marginBottom: "2vh"}}>Budget Breakdown</h2></b>
          {/* List of budget items */}
          {budgetData.map((item, index) => (
            <div key={index} style={{marginBottom:"4vh"}}>
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <span>{item.category}</span>
                <span>{`$${item.spent.toFixed(2)} of $${item.budget.toFixed(2)}`}</span>
              </div>
              {/* Render progress bar with item.spent and item.budget */}
              <LinearProgress determinate value={item.spent/item.budget*100} style={{color: "green"}} size="lg"/>
            </div>
          ))}
        </div>
    </div>
  );
};

export default budgetBreakdown;

