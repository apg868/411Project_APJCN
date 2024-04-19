
import Link from "next/link";
import React from "react";
import Image from "next/image"; 
import Navbar from "@/app/components/navbar";

export default function Homepage() {
  return (
    <div 
      className="bg-cover bg-center h-screen" 
      style={{ backgroundImage: `url('/imageExpense/image5.webp')`}} 
    >
      <div className="flex min-h-screen">
      <div className="relative bg-gradient-to-t from-indigo-400 to-indigo-700 dark:bg-zinc-800/30 w-30 p-4 flex flex-col justify-between">
        <Navbar/>
      </div>

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
                fontSize: "3rem"
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
                src="/imageExpense/images.png"
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
            href="../account"
            className="p-4 bg-blue-600 text-white rounded font-bold"
          >
            Login
          </Link>

          <Link
            href="../signUp"
            className="p-4 bg-blue-600 text-white rounded font-bold"
          >
            Sign Up
          </Link>

        </div>
      </div>
    </div>
    </div>
  );
}









