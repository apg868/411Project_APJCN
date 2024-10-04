"use client"
import React, { useState } from 'react';
import Link from "next/link";
import '../globals.css';
import Navbar from '../components/navbar';
import { dummyChartData } from "../data";
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import DashboardVisualization from '../components/dashboardVisualization';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Pagination } from '@mui/material';

export function ViewTransaction() {

const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const paginatedData = dummyChartData.labels.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div className="flex min-h-screen">
        {/* Navbar */}
        <div className="bg-gradient-to-t from-indigo-400 to-indigo-700 dark:bg-zinc-800/30 w-30 p-4 flex flex-col justify-between">
            <Navbar/>
        </div>

        {/* Dashboard */}
        <main className="flex-1 p-8">
            <DashboardVisualization
            labels={dummyChartData.labels}
            data={dummyChartData.data}
            />

            <div className="bg-white rounded-lg shadow-md p-4 h-half">
                {/* Replace with actual chart component */}
                <div>
                    <div style = {{display: 'flex', justifyContent:'space-between'}}>
                        <b><h2>Transaction History</h2></b>
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

                    <TableContainer component={Paper}>
                        <Table className="min-w-full" aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Category</TableCell>
                                    <TableCell>Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {paginatedData.map((label, index) => (
                                    <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {label}
                                    </TableCell>
                                    <TableCell>{dummyChartData.category[(page - 1) * rowsPerPage + index]}</TableCell>
                                    <TableCell>{dummyChartData.data[(page - 1) * rowsPerPage + index]}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                        </Table>
                    </TableContainer>
                    <Pagination
                    count={Math.ceil(dummyChartData.labels.length / rowsPerPage)}
                    page={page}
                    onChange={handleChangePage}
                    color="primary"
                    style = {{marginTop: '2vh'}}
                    />
                </div>
            </div>
        </main>
    </div>
  );
}

export default ViewTransaction

