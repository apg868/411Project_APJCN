"use client"
import React from 'react';
import Link from "next/link";
import '../globals.css';
import Navbar from '../components/navbar';
import { dummyChartData } from '../data';

export function ViewTransaction() {
  return (
    <div className="flex min-h-screen">
        {/* Navbar */}
        <div className="bg-gradient-to-t from-indigo-400 to-indigo-700 dark:bg-zinc-800/30 w-30 p-4 flex flex-col justify-between">
            <Navbar/>
        </div>

        {/* Dashboard */}
        <main className="flex-1 p-8">
            <table className="min-w-full table-auto">
            <thead>
                <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Amount</th>
                </tr>
            </thead>
            <tbody>
                {dummyChartData.labels.map((label, index) => (
                <tr key={index}>
                    <td className="border px-4 py-2">{label}</td>
                    <td className="border px-4 py-2">{dummyChartData.category[index]}</td>
                    <td className="border px-4 py-2">{dummyChartData.data[index]}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </main>
    </div>
  );
}

export default ViewTransaction

