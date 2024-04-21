// Dummy data for visualization
export const dummyChartData = {
    labels: ["Date 1", "Date 2", "Date 3", "Date 4", "Date 5", "Date 6", "Date 7"],
    data: [30, 50, 45, 60, 70, 100, 120],
    category: ["Car Payments", "Groceries", "Rent + Utilities", "Car Payments", "Groceries", "Rent + Utilities", "Car Payments"]
  };
  
// Dummy data for budget breakdown
export const dummyBudgetData = [
    { category: "Car Payments", spent: 100.21, budget: 500 },
    { category: "Groceries", spent: 200.00, budget: 300 },
    { category: "Rent + Utilities", spent: 400.00, budget: 700 },
];

// Dummy data for budget summary
let spentSoFar = 0;
for (let item of dummyBudgetData) {
    spentSoFar += item.spent;
}

let budget = 0;
for (let item of dummyBudgetData) {
    budget += item.budget;
}

export const dummySummaryData = {
    budget: budget,
    spentSoFar: spentSoFar,
    leftForBudget: budget - spentSoFar,
};