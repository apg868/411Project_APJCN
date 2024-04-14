import Image from "next/image";
import Budget from "./components/budget";
import DashboardVisualization from "./components/dashboardVisualization";
import Link from "next/link";
import { dummyChartData, dummyBudgetData, dummySummaryData } from "./data";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Navbar */}
      <nav className="bg-gradient-to-t from-indigo-400 to-indigo-700 dark:bg-zinc-800/30 w-30 p-4 flex flex-col justify-between">
        {/* Icons */}
        <div className="flex items-center justify-between mb-4">

          <div className="flex items-center"> 
            <AccountBalanceIcon className="w-8 h-8 text-white"/>
          </div>
          
          <div className="flex items-center space-x-4">
            <SearchIcon className="w-8 h-8 text-white"/>
            <MenuIcon className="w-8 h-8 text-white"/>
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
          <Link href="/help" className="text-center">
            Help and Support
          </Link>
        </div>

        {/* Login */}
        <div className="flex items-center justify-left mb-4">
          <div className="flex items-left ml-4"> 
            <div className="w-12 h-12 rounded-full" style = {{backgroundColor: '#00b1d2'}}>
              <LockOpenIcon className="w-10 h-10 ml-1 mt-1"/>
            </div> 
          </div>
          <div className="flex text-center items-center text-white font-bold ml-2">
            <Link href="/account">
              Account
            </Link>
          </div>
        </div>
      </nav>

      {/* Dashboard */}
      <main className="flex-1 p-8">
        <div style={{ 
            fontSize: '38px', 
            fontWeight: '950', 
            textAlign: 'center', 
            background: `url('https://cdn.glitch.com/d1543bd7-bc7d-4cd5-bfe2-2119128d273a%2Fparticles.gif?v=1609615951326')`, 
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent'
        }}>
            WELCOME TO CAPITAL CREST
        </div>
        {/* Visualization */}
        <DashboardVisualization labels={dummyChartData.labels} data={dummyChartData.data}/>

        {/* Category + Budget Summary Component */}
        <Budget budgetData={dummyBudgetData} summaryData={dummySummaryData} />
         
      </main>
    </div>
  );
}
