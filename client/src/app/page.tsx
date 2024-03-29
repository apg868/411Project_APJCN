import Image from "next/image";

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
        <div className="flex flex-col space-y-12 flex-grow">
          <a href="#" className="text-center">Dashboard</a>
          <a href="#" className="text-center">About Us</a>
          <a href="#" className="text-center">View Transaction History</a>
          <a href="#" className="text-center">Set Budget</a>
          <a href="#" className="text-center">Help and Support</a>
        </div>

        {/* Login */}
        <div className="text-center">
          <a href="#">Account</a>
        </div>
      </nav>

      {/* Dashboard */}
      <main className="flex-1 p-8">
        {/* Visualization */}
        <div className="mb-8" style={{ height: "30vh" }}>
          <div className="bg-white rounded-lg shadow-md p-4 h-full">
            Visualization
          </div>
        </div>

        {/* Category + Budget Summary */}
        <div className="flex space-x-8">

          <div className="flex-1" style={{ height: "25vh", width: "60%" }}>
            <div className="bg-white rounded-lg shadow-md p-4 h-full">
              Categroy
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 h-full mt-4">
              Extra
            </div>
          </div>

          <div className="flex-1" style={{ height: "52vh", width: "40%" }}>
            <div className="bg-white rounded-lg shadow-md p-4 h-full">
              Budget Summary
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
