"use client";
import React, { useState } from "react";
import Link from "next/link";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Logging in with:', username, password);
  };

  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url('/imageExpense/image2.jpeg')` }}>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white bg-opacity-75 rounded-lg p-8 max-w-sm w-full">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="username" className="text-sm font-medium text-gray-700 block mb-2">Username, verified email, or SSO code</label>
              <input type="text" id="username" name="username" onChange={e => setUsername(e.target.value)} value={username} required
                     className="border border-gray-300 rounded px-3 py-2 w-full" />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-2">Password</label>
              <input type="password" id="password" name="password" onChange={e => setPassword(e.target.value)} value={password} required
                     className="border border-gray-300 rounded px-3 py-2 w-full" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="remember" name="remember"
                       className="h-4 w-4 border-gray-300 rounded" />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-900"> Remember me</label>
              </div>
              <div className="text-sm">
                <a href="../forgotUsernamePassword" className="font-medium text-blue-600 hover:text-blue-500">Forgot username/Password?</a>
              </div>
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              Sign In
            </button>
            <div className="text-sm">
              <a href="../needHelpSigning" className="font-medium text-blue-600 hover:text-blue-500">Need help signing in?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;








