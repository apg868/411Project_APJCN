"use client";
import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import LinearProgress from "@mui/joy/LinearProgress";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

export default function Transaction() {
  // Dummy data for the items list
  const itemsData = [
    { category: "Transportation", spent: 120, budget: 300 },
    { category: "Groceries", spent: 230, budget: 500 },
    { category: "Rent", spent: 800, budget: 800 },
    { category: "Other", spent: 90, budget: 150 },
  ];

  // Bar chart data
  const barChartData = [
    { name: "Q1", Transportation: 35, Groceries: 44, Rent: 24, Other: 34 },
    { name: "Q2", Transportation: 51, Groceries: 6, Rent: 49, Other: 30 },
    { name: "Q3", Transportation: 15, Groceries: 25, Rent: 30, Other: 50 },
    { name: "Q4", Transportation: 60, Groceries: 50, Rent: 15, Other: 25 },
  ];

  // Define colors for the charts and buttons
  const COLORS = {
    Transportation: "green",
    Groceries: "blue",
    Rent: "purple",
    Other: "#A569BD", // Light purple
  };

  const buttonStyles = {
    daily: {
      backgroundColor: "red",
      color: "white",
      "&:hover": { backgroundColor: "darkred" },
    },
    weekly: {
      backgroundColor: "brown",
      color: "white",
      "&:hover": { backgroundColor: "darkbrown" },
    },
    monthly: {
      backgroundColor: "orange",
      color: "white",
      "&:hover": { backgroundColor: "darkorange" },
    },
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Visualization</h2>

      <div className="w-full px-4 flex justify-center">
        <BarChart
          width={500}
          height={300}
          data={barChartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {Object.keys(COLORS).map((key, index) => (
            <Bar key={index} dataKey={key} fill={COLORS[key]} barSize={30} />
          ))}
        </BarChart>
      </div>

      <div className="w-full px-4 my-4 flex flex-col items-center">
        <div className="flex justify-center pb-3">
          <ToggleButtonGroup exclusive aria-label="Platform">
            <ToggleButton value="daily" style={buttonStyles.daily}>
              Daily
            </ToggleButton>
            <ToggleButton value="weekly" style={buttonStyles.weekly}>
              Weekly
            </ToggleButton>
            <ToggleButton value="monthly" style={buttonStyles.monthly}>
              Monthly
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 w-full">
          <b>
            <h2 style={{ marginBottom: "2vh" }}>Transaction Breakdown</h2>
          </b>
          {itemsData.map((item, index) => (
            <div key={index} style={{ marginBottom: "4vh" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: COLORS[item.category] }}>
                  {item.category}
                </span>
                <span>{`$${item.spent.toFixed(2)} of $${item.budget.toFixed(
                  2
                )}`}</span>
              </div>
              <LinearProgress
                variant="determinate"
                value={(item.spent / item.budget) * 100}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-around px-4">
        <PieChart width={290} height={290}>
          <Pie
            data={itemsData.map(({ category, spent }) => ({
              name: category,
              value: spent,
            }))}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
          >
            {itemsData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[entry.category]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}

// "use client";
// import React from "react";
// import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// import { BarChart } from "@mui/x-charts";
// import LinearProgress from "@mui/joy/LinearProgress";
// import { PieChart, Pie, Cell, Tooltip } from "recharts";

// export default function Transaction() {
//   const itemsData = [
//     { category: "Transportation", spent: 120, budget: 300 },
//     { category: "Groceries", spent: 230, budget: 500 },
//     { category: "Rent", spent: 800, budget: 800 },
//     { category: "Other", spent: 90, budget: 150 },
//   ];

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
//           xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
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
//           <b>
//             <h2 style={{ marginBottom: "2vh" }}>Transaction Breakdown</h2>
//           </b>
//           {/* List of items with dummy data */}
//           {itemsData.map((item, index) => (
//             <div key={index} style={{ marginBottom: "4vh" }}>
//               <div style={{ display: "flex", justifyContent: "space-between" }}>
//                 <span>{item.category}</span>
//                 <span>{`$${item.spent.toFixed(2)} of $${item.budget.toFixed(
//                   2
//                 )}`}</span>
//               </div>
//               <LinearProgress
//                 variant="determinate"
//                 value={(item.spent / item.budget) * 100}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
