import Link from "next/link";
import React from "react";
import Image from "next/image"; // Import the Image component


export default function Homepage() {
  return (
    <div className="flex min-h-screen">
      {/* Navbar/Sidebar */}
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

        {/* Login/Signup Links */}
        {/* <div className="flex flex-col items-center justify-between mb-4 space-y-2">
          <Link href="/login" className="text-white font-bold">Login</Link>
          <Link href="/signup" className="text-white font-bold">Sign Up</Link>
        </div> */}
      </nav>

      {/* Main content area with stylized hero text and box with money icon */}
      <div className="flex-grow bg-white relative">
        {/* Stylized hero text */}
        <div className="text-center pt-16 pb-20">
          <h1>
            {/* ... existing hero text ... */}
            <span
              style={{
                color: "#0077CC",
                fontWeight: "bold",
                fontSize: "3rem",
                center: 50,
              }}
            >
              Save
            </span>{" "}
            <br />
            <span
              style={{ color: "#50B83C", fontWeight: "bold", fontSize: "3rem" }}
            >
              Money,
            </span>
            <br />
            <span
              style={{ color: "#F49342", fontWeight: "bold", fontSize: "3rem" }}
            >
              Without
            </span>{" "}
            <br />
            <span
              style={{ color: "#9C6ADE", fontWeight: "bold", fontSize: "3rem" }}
            >
              Thinking
            </span>
            <br />
            <span
              style={{ color: "#F649A7", fontWeight: "bold", fontSize: "3rem" }}
            >
              About
            </span>{" "}
            <br />
            <span
              style={{ color: "#FFAB47", fontWeight: "bold", fontSize: "3rem" }}
            >
              It.
            </span>
          </h1>

          {/* Positioned image */}
          <div style={{ position: "absolute", bottom: 20, right: 70 }}>
            <img
              src="/imageExpense/66869.jpg"
              width="400"
              height="400"
              alt="Manage your Money"
            />
          </div>
        </div>

        {/* New Box with Money Icon and Text */}
        <div
          style={{
            position: "absolute",
            bottom: 100,
            left: "calc(50% - 470px)",
          }}
          className="p-4 bg-white shadow-lg rounded-md"
        >
          <div className="flex flex-col items-start">
            {/* Money Icon */}
            <div className="mb-4">
              <Image
                src="/images.png"
                alt="Money Icon"
                width={64}
                height={64}
              />
            </div>
            {/* Explanation Text */}
            <p className="text-lg font-semibold">Track Spending</p>
            <p className="text-sm">See where your money goes.</p>
            <p className="text-sm">Plan and budget with ease.</p>
            <p className="text-sm">Save more by avoiding overspending.</p>
            <p className="text-sm">Gain financial control and peace.</p>
          </div>
        </div>
        {/* Login and Sign Up links moved from the sidebar */}

        <div className="flex justify-center mt-10 space-x-4">
          <Link
            href="../login"
            className="p-4 bg-blue-600 text-white rounded font-bold"
          >
            Login
          </Link>
          <Link
            href="../signup"
            className="p-4 bg-blue-600 text-white rounded font-bold"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
