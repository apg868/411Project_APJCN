// Dummy data for visualization
export const dummyChartData = {
    labels: ["Date 1", "Date 2", "Date 3", "Date 4", "Date 5", "Date 6", "Date 7", "Date 8"],
    data: [30, 50.47, 45, 60, 70, 126.87, 120, 137.88],
    category: ["Car Payments", "Groceries", "Rent + Utilities", "Car Payments", "Groceries", "Rent + Utilities", "Car Payments", "Groceries"]
  };
  
// Dummy data for budget breakdown
export const dummyBudgetData = [
    { category: "Car Payments", spent: 0, budget: 500 },
    { category: "Groceries", spent: 0, budget: 300 },
    { category: "Rent + Utilities", spent: 0, budget: 700 },
];
dummyBudgetData.forEach(budgetItem => {
    budgetItem.spent = dummyChartData.category.reduce((acc, category, index) => {
      if (category === budgetItem.category) {
        acc += dummyChartData.data[index];
      }
      return acc;
    }, 0);
});

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