
import Link from "next/link";
import React from "react";
import Image from "next/image"; 
import '../../globals.css';
import Navbar from "@/app/components/navbar";
import { Button } from "@mui/material";

export default function Homepage() {
  return (
      <div className="flex min-h-screen">
        <div className="relative bg-gradient-to-t from-indigo-400 to-indigo-700 dark:bg-zinc-800/30 w-30 p-4 flex flex-col justify-between">
          <Navbar/>
        </div>

        <main style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100vh', marginLeft: '25vw' }}>
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {/* Save money without thinking about it */}
            <div className="text-center" style={{ margin: '20px', fontWeight: "bold", fontSize: "3rem" }}>
              <h1>
                <span style={{ color: "#0077CC" }}>
                  Save
                </span>{" "}
                <span style={{ color: "#50B83C" }}>
                  Money,
                </span>
                <br />
                <span style={{ color: "#F49342" }}>
                  Without
                </span>{" "}
                <span style={{ color: "#9C6ADE" }}>
                  Thinking
                </span>
                <br />
                <span style={{ color: "#F649A7" }}>
                  About
                </span>{" "}
                <span style={{ color: "#FFAB47" }}>
                  It.
                </span>
              </h1>
            </div>

            {/* Description text */}
            <div style={{ margin: '20px' }}>
              <p className="text-lg font-semibold">Track Spending</p>
              <p className="text-sm">See where your money goes.</p>
              <p className="text-sm">Plan and budget with ease.</p>
              <p className="text-sm">Save more by avoiding overspending.</p>
              <p className="text-sm">Gain financial control and peace.</p>
            </div>

            {/* Sign Up button */}
            <div className="flex justify-center space-x-4 m-10">
              <Link href="../account">
                <Button variant="contained" style={{ fontSize: '22px', width: '14vw', background: `url('https://cdn.glitch.me/d1543bd7-bc7d-4cd5-bfe2-2119128d273a%2Fparticles.gif')`, borderRadius: '20px' }}>
                  Log In
                </Button>
              </Link>

              <Link href="../signUp">
                <Button variant="contained" style={{ fontSize: '22px', width: '14vw', background: `url('https://cdn.glitch.me/d1543bd7-bc7d-4cd5-bfe2-2119128d273a%2Fparticles.gif')`, borderRadius: '20px' }}>
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </main>

        
      </div>
  );
}









