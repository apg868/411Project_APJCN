import Link from "next/link";
import React from "react";

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
            <Link href="/" className="text-center">
              About Us
            </Link>
            <Link href="/dashboard/view-transactions" className="text-center">
              View Transaction History
            </Link>
            <Link href="/viewSetBudget" className="text-center">
              View Budget
            </Link>
            <Link href="/" className="text-center">
              Help and Support
            </Link>
  
            <Link href="/dashboard2/homePage" className="text-center">
              Home Page
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

         {/* Main content area with stylized hero text */}
         <div className="flex-grow bg-white">
                {/* Stylized hero text */}
                <div className="text-center pt-16 pb-20">
                    <h1>
                        <span style={{ color: '#0077CC', fontWeight: 'bold', fontSize: '4rem' }}>Save</span>{' '}
                        <span style={{ color: '#50B83C', fontWeight: 'bold', fontSize: '4rem' }}>money,</span><br />
                        <span style={{ color: '#F49342', fontWeight: 'bold', fontSize: '4rem' }}>without</span>{' '}
                        <span style={{ color: '#9C6ADE', fontWeight: 'bold', fontSize: '4rem' }}>thinking</span><br />
                        <span style={{ color: '#F649A7', fontWeight: 'bold', fontSize: '4rem' }}>about</span>{' '}
                        <span style={{ color: '#FFAB47', fontWeight: 'bold', fontSize: '4rem' }}>it.</span>
                    </h1>
                </div>

                {/* Rest of the main content would go here... */}
            </div>

            {/* Sidebar */}
            <nav className="bg-gradient-to-t from-indigo-400 to-indigo-700 dark:bg-zinc-800/30 w-30 p-4 flex flex-col justify-between">
                {/* Icons and links same as your original code */}
                {/* ... */}
            </nav>
        </div>
    );
}










