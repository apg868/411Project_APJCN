import Image from "next/image";
import Budget from "./components/budget";
import DashboardVisualization from "./components/dashboardVisualization";
import { dummyChartData, dummyBudgetData, dummySummaryData } from "./data";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Navbar */}
      <div className="relative bg-gradient-to-t from-indigo-400 to-indigo-700 dark:bg-zinc-800/30 w-30 p-4 flex flex-col justify-between">
        <Navbar/>
      </div>

      {/* Dashboard */}
      <main className="flex-1 p-8">
        <div style={{ 
            fontSize: '38px', 
            fontWeight: '950', 
            textAlign: 'center', 
            background: `url('https://cdn.glitch.me/d1543bd7-bc7d-4cd5-bfe2-2119128d273a%2Fparticles.gif')`, 
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent'
        }}>
            WELCOME TO CAPITAL CREST
        </div>
        {/* Visualization */}
        <DashboardVisualization
          labels={dummyChartData.labels}
          data={dummyChartData.data}
        />

        {/* Category + Budget Summary Component */}
        <Budget budgetData={dummyBudgetData} summaryData={dummySummaryData} />
      </main>
    </div>
  );
}
