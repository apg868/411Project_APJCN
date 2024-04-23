// Dummy data for visualization
export const dummyChartData = {
    labels: ["Date 1", "Date 2", "Date 3", "Date 4", "Date 5", "Date 6", "Date 7", "Date 8", "Date 9"],
    data: [30, 50.47, 45, 60, 70, 126.87, 120, 132.88, 100],
    category: ["Food", "Housing", "Utilities", "Insurance", "Entertainment", "Transportation", "Miscellaneous", "Food", "Housing"]
  };

  // if i create new category, gotta update budget + handle in linear bar chart
  
// Dummy data for budget breakdown
let dummyBudgetData = [
    { category: "Food", spent: 0, budget: 500 },
    { category: "Housing", spent: 0, budget: 230 },
    { category: "Utilities", spent: 0, budget: 300 },
    { category: "Insurance", spent: 0, budget: 90 },
    { category: "Entertainment", spent: 0, budget: 300 },
    { category: "Transportation", spent: 0, budget: 200 },
    { category: "Miscellaneous", spent: 0, budget: 300 },
];

dummyChartData.category.forEach((category, index) => {
  const existingCategory = dummyBudgetData.find(item => item.category === category);
  if (!existingCategory) {
      dummyBudgetData.push({ category: category, spent: dummyChartData.data[index], budget: 0 });
  }
});

dummyBudgetData.forEach(budgetItem => {
    budgetItem.spent = dummyChartData.category.reduce((acc, category, index) => {
      if (category === budgetItem.category) {
        acc += dummyChartData.data[index];
      }
      return acc;
    }, 0);
});

export { dummyBudgetData };

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