"use client";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { LineChart } from "@mui/x-charts";

export default async function Transaction() {
  return (
    <div className="flex flex-col">
      <div>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
          width={500}
          height={300}
        />
      </div>

      <div>
        <div className="flex justify-start pb-0 mx-2 my-3">
          <ToggleButtonGroup color="primary" exclusive aria-label="Platform">
            <ToggleButton value="daily">Daily</ToggleButton>
            <ToggleButton value="weekly">Weekly</ToggleButton>
            <ToggleButton value="monthly">Monthly</ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
    </div>
  );
}
