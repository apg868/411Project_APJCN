import Image from "next/image";
import Budget from "./components/budget";
import DashboardVisualization from "./components/dashboardVisualization";
import Link from "next/link";
import { dummyChartData, dummyBudgetData, dummySummaryData } from "./data";

export default function Home() {
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
          <Link href="/aboutUs" className="text-center">
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
