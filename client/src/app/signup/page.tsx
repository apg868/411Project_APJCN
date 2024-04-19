"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const SignupPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Signing up with", username, email, password);
  };

  return (
    <div 
      className="flex min-h-screen"
      style={{
        backgroundImage: `url('/imageExpense/image5.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >


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
      <div className="flex-grow bg-white/80 p-10 backdrop-blur-sm">
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
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <Link href="../login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;



















// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import Image from "next/image";

// const SignupPage: React.FC = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log("Signing up with", username, email, password);
//   };

//   return (
//     <div className="flex min-h-screen">

      
//       <nav className="bg-gradient-to-t from-indigo-400 to-indigo-700 dark:bg-zinc-800/30 w-30 p-4 flex flex-col justify-between">
//         <div className="flex flex-col space-y-12 flex-grow font-bold text-white">
//           <Link href="/dashboard2/homePage">Home Page</Link>
//         </div>
//       </nav>
//       <div className="flex-grow bg-white p-10">
//         <h1 className="text-center font-bold text-xl mb-5">Sign Up</h1>
//         <form onSubmit={handleSignup} className="space-y-6">
//           <div>
//             <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username:</label>
//             <input
//               id="username"
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email:</label>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password:</label>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//               required
//             />
//           </div>
//           <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
//         </form>
//         <p className="mt-4 text-center">
//           Already have an account? <Link href="../login">Log in</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;












