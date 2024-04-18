"use client";
import React, { useState } from "react";
import Link from "next/link";

const HelpPage = () => {
    // Here, you would include any logic for helping the user recover their account
  
    return (
      // Assuming that helpBackgroundImage is the path to your image
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url('/imageExpense/image3.jpeg')` }}>
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white bg-opacity-75 rounded-lg p-8 max-w-md w-full">
            <h1 className="text-xl font-bold text-gray-900 mb-6">Need help signing in?</h1>
            <p className="text-gray-700 mb-6">Enter your email below and we will send you instructions to recover your account.</p>
            <form className="space-y-6">
              <div>
                <input type="email" id="email" name="email" placeholder="Enter your email"
                       className="border border-gray-300 rounded px-3 py-2 w-full" required />
              </div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                Send Instructions
              </button>
            </form>
            <p className="text-sm mt-4 text-center">
              <a href="../login" className="font-medium text-blue-600 hover:text-blue-500">Back to Log In</a>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default HelpPage;
  