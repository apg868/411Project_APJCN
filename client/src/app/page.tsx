import Image from "next/image";
import Budget from "./components/budget";
import DashboardVisualization from "./components/dashboardVisualization";
import Link from "next/link";

export default function Home() {
  // Dummy data for visualization
  const dummyChartData = {
    labels: ["Date 1", "Date 2", "Date 3", "Date 4", "Date 5", "Date 6"],
    data: [30, 50, 45, 60, 70, 100],
  };

  // Dummy data for budget breakdown
  const dummyBudgetData = [
    { category: "Car Payments", spent: 300.21, budget: 500 },
    { category: "Groceries", spent: 200.00, budget: 300 },
    { category: "Rent + Utilities", spent: 400.00, budget: 700 },
  ];


  // Dummy data for budget summary
  let spentSoFar = 0;
  for (let item of dummyBudgetData) {
    spentSoFar += item.spent;
  }

  const budget = 1500;
  
  const dummySummaryData = {
    spentSoFar: spentSoFar,
    leftForBudget: (budget - spentSoFar)
  };

  return (
    <div className="flex min-h-screen">
      {/* Navbar */}
      <nav className="bg-gradient-to-t from-indigo-400 to-indigo-700 dark:bg-zinc-800/30 w-30 p-4 flex flex-col justify-between">
        {/* Icons */}
        <div className="flex items-center justify-between mb-4">

          <div className="flex items-center"> 
            <div className="w-12 h-12 bg-gray-400 dark:bg-gray-600 rounded-full"></div> 
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-400 dark:bg-gray-600"></div>
            <div className="w-8 h-8 bg-gray-400 dark:bg-gray-600"></div>
          </div>
        </div>

        {/* Tabs */}
       <div className="flex flex-col space-y-12 flex-grow font-bold text-white">
          <Link href="/" className="text-center">
            Dashboard
          </Link>
          <Link href="/" className="text-center">
            About Us
          </Link>
          <Link href="/" className="text-center">
            View Transaction History
          </Link>
          <Link href="/viewSetBudget" className="text-center">
            View Budget
          </Link>
          <Link href="/" className="text-center">
            Help and Support
          </Link>
        </div>

        {/* Login */}
        <div className="flex items-center justify-left mb-4">
          <div className="flex items-left ml-4"> 
            <div className="w-12 h-12 bg-gray-400 dark:bg-gray-600 rounded-full"></div> 
          </div>
          <div className="flex text-center items-center text-white font-bold ml-2">
            <a href="#">Account</a>
          </div>
        </div>
      </nav>

      {/* Dashboard */}
      <main className="flex-1 p-8">
        {/* Visualization */}
        <DashboardVisualization labels={dummyChartData.labels} data={dummyChartData.data}/>

        {/* Category + Budget Summary Component */}
        <Budget budgetData={dummyBudgetData} summaryData={dummySummaryData} />
         
      </main>
    </div>
  );
}
