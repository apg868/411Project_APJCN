





"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";

const ForgotUsernamePasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("Processing...");

    try {
      // Replace `https://yourapi.com/forgot-password` with the URL to our API endpoint
      const response = await fetch("https://yourapi.com/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to send reset instructions");
      }

      const data = await response.json();
      setMessage(data.message || "Instructions have been sent to your email.");
    } catch (error) {
      setMessage("Error sending instructions: " + error.message);
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-no-repeat bg-cover"
      style={{ backgroundImage: `url('/imageExpense/image4.jpeg')` }}
    >
      <div className="bg-black opacity-40 inset-0 absolute"></div>
      <div className="z-10 max-w-lg w-full bg-white bg-opacity-75 rounded-lg p-8">
        <h1 className="text-xl font-bold text-center text-gray-900 mb-6">
          Forgot Username/Password
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <p className="text-gray-700 text-sm">
            Enter the email address associated with your account and we'll send
            you instructions to reset your password.
          </p>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Send Instructions
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
        )}
        <button
          onClick={() => router.push("/login")} 
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ForgotUsernamePasswordPage;
