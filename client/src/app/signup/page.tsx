"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const SignupPage: React.FC = () => {
  // State hooks for form inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSignup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add signup logic here
    console.log("Signing up with", username, email, password);
  };

  // Signup form JSX
  return (
    <div className="flex min-h-screen">
      {/* Reusing the same sidebar from your homepage */}
      <nav className="bg-gradient-to-t from-indigo-400 to-indigo-700 dark:bg-zinc-800/30 w-30 p-4 flex flex-col justify-between">
        <div className="flex flex-col space-y-12 flex-grow font-bold text-white">
          <Link href="/dashboard2/homePage">
            <a className="text-center">Home Page</a>
          </Link>
          {/* Other links can be added here */}
        </div>
      </nav>

      {/* Main content area for Signup form */}
      <div className="flex-grow bg-white p-10">
        <h1 className="text-center font-bold text-xl mb-5">Sign Up</h1>
        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <Link href="/dashboard2/homePage/login"><a className="text-blue-600 hover:underline">Log in</a></Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
