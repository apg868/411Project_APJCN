
"use client";
import React from 'react';
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { BarChart } from "@mui/x-charts";
import LinearProgress from '@mui/joy/LinearProgress';

export default function Transaction() {
  // Adding static dummy data for the items list
  const itemsData = [
    { category: "Transportation", spent: 120, budget: 300 },
    { category: "Groceries", spent: 230, budget: 500 },
    { category: "Rent", spent: 800, budget: 800 },
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Visualization</h2>
      <div className="w-2/5 border-2 border-gray-300 p-4">
        <BarChart
          series={[
            { data: [35, 44, 24, 34] },
            { data: [51, 6, 49, 30] },
            { data: [15, 25, 30, 50] },
            { data: [60, 50, 15, 25] },
          ]}
          height={290}
          xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      </div>

      <div className="w-2/5 mt-2">
        <div className="flex justify-start pb-0 mx-0 my-3">
          <ToggleButtonGroup color="primary" exclusive aria-label="Platform">
            <ToggleButton value="daily">Daily</ToggleButton>
            <ToggleButton value="weekly">Weekly</ToggleButton>
            <ToggleButton value="monthly">Monthly</ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>

      <div className="flex-1" style={{ height: "40vh", width: "80%" }}>
        <div className="bg-white rounded-lg shadow-md p-4 h-full">
          <b><h2 style={{ marginBottom: "2vh" }}>Transaction Breakdown</h2></b>
          {/* List of items with dummy data */}
          {itemsData.map((item, index) => (
            <div key={index} style={{ marginBottom: "4vh" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{item.category}</span>
                <span>{`$${item.spent.toFixed(2)} of $${item.budget.toFixed(2)}`}</span>
              </div>
              <LinearProgress variant="determinate" value={(item.spent / item.budget) * 100} />
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
}

















// "use client";
// import React from 'react'; // Import React - this should only be done once
// import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// import { BarChart } from "@mui/x-charts"; // Only importing BarChart
// import LinearProgress from '@mui/joy/LinearProgress';

// export default function Transaction() {
//   // Assume budgetData is defined somewhere in your code or props
//   const budgetData: any[] = []; // Replace with actual data source

//   return (
//     <div className="flex flex-col items-center">
//       <h2 className="text-xl font-bold mb-4">Visualization</h2>
//       <div className="w-2/5 border-2 border-gray-300 p-4">
//         <BarChart
//           series={[
//             { data: [35, 44, 24, 34] },
//             { data: [51, 6, 49, 30] },
//             { data: [15, 25, 30, 50] },
//             { data: [60, 50, 15, 25] },
//           ]}
//           height={290}
//           xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
//           margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
//         />
//       </div>

//       <div className="w-2/5 mt-2">
//         <div className="flex justify-start pb-0 mx-0 my-3">
//           <ToggleButtonGroup color="primary" exclusive aria-label="Platform">
//             <ToggleButton value="daily">Daily</ToggleButton>
//             <ToggleButton value="weekly">Weekly</ToggleButton>
//             <ToggleButton value="monthly">Monthly</ToggleButton>
//           </ToggleButtonGroup>
//         </div>
//       </div>

//       <div className="flex-1" style={{ height: "40vh", width: "80%" }}>
//         <div className="bg-white rounded-lg shadow-md p-4 h-full">
//           <b><h2 style={{ marginBottom: "2vh" }}>Transaction Breakdown</h2></b>
//           {/* List of budget items */}
//           {budgetData.map((item, index) => (
//             <div key={index} style={{ marginBottom: "4vh" }}>
//               <div style={{ display: "flex", justifyContent: "space-between" }}>
//                 <span>{item.category}</span>
//                 <span>{`$${item.spent.toFixed(2)} of $${item.budget.toFixed(2)}`}</span>
//               </div>
//               {/* Render progress bar with item.spent and item.budget */}
//               <LinearProgress variant="determinate" value={(item.spent / item.budget) * 100} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
    
//   );
// }
