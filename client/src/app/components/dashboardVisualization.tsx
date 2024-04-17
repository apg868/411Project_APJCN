'use client'
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { BarChart } from '@mui/x-charts';

interface chartData {
    labels: string[];
    data: number[];
}

// Dashboard Visualization Component
const dashboardVisualization: React.FC<chartData> = ({labels, data}) => {
    return (
        <div className="mb-6" style={{ height: "42vh" }}>
          <div className="bg-white rounded-lg shadow-md p-4 h-full">
            {/* Replace with actual chart component */}
            <div>
              <b><h2>Visualization</h2></b>
              {/* Toggle buttons */}
              <div className="flex justify-end pb-0">
                <ToggleButtonGroup
                    color="primary"
                    exclusive
                    aria-label="Platform"
                    >
                    <ToggleButton value="daily">Daily</ToggleButton>
                    <ToggleButton value="weekly">Weekly</ToggleButton>
                    <ToggleButton value="monthly">Monthly</ToggleButton>
                </ToggleButtonGroup>
              </div>
              {/* Dummy chart */}
              <div className="flex items-center justify-center">
                {/* Render your chart with dummyChartData */}
                <BarChart
                  xAxis={[{ scaleType: 'band', data: labels }]}
                  series={[{ data: data }]}
                  width={1050}
                  height={250}
                />
              </div>
            </div>
          </div>
        </div>
    )
}

export default dashboardVisualization;
