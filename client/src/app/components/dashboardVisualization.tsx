import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface chartData {
    labels: string[];
    data: number[];
}

const dashboardVisualization = () => {
    return (
        <div className="mb-8" style={{ height: "30vh" }}>
          <div className="bg-white rounded-lg shadow-md p-4 h-full">
            {/* Replace with actual chart component */}
            <div>
              <b><h2>Visualization</h2></b>
              {/* Toggle buttons */}
              <div style={{display:"flex", justifyContent:"right"}}>
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
              <div>
                {/* Render your chart with dummyChartData */}
              </div>
            </div>
          </div>
        </div>
    )
}

export default dashboardVisualization;
