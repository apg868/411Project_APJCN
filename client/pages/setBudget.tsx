import React from 'react';
import Link from "next/link";
import '../src/app/globals.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const setBudget = () => {
    const [interval, setInterval] = React.useState('');
    const [categories, setCategories] = React.useState('');

    const handleInterval = (event: SelectChangeEvent) => {
        setInterval(event.target.value);
    };

    const handleCategories = (event: SelectChangeEvent) => {
        setCategories(event.target.value);
    };

    
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
            <div className="flex flex-col space-y-12 flex-grow font-bold text-white">
                <Link href="./" className="text-center">
                    Dashboard
                </Link>
                <Link href="./" className="text-center">
                    About Us
                </Link>
                <Link href="./" className="text-center">
                    View Transaction History
                </Link>
                <Link href="/viewSetBudget" className="text-center">
                    View Budget
                </Link>
                <Link href="./" className="text-center">
                    Help and Support
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

            {/* Dashboard */}
            <main className="flex-1 p-8">
                <div style={{display: "flex", justifyContent: "space-between", fontWeight: "bold"}}>
                    Set Budget
                    <Button variant="contained" style = {{marginRight: '1.5vw', backgroundColor:'green'}}>        
                        Set Budget
                    </Button>
                </div>
                
                {/* Entering Budget */}
                <div style = {{margin: '2vh'}}>
                    {/* Textfield to enter amount */}
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{ m: 1, minWidth: '50%' }}/>

                    {/* Interval Dropdown */}
                    <FormControl sx={{ m: 1, minWidth: '50%' }}>
                        <InputLabel>Interval</InputLabel>
                        <Select
                        value={interval}
                        label="Interval"
                        onChange={handleInterval}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'Daily'}>Daily</MenuItem>
                            <MenuItem value={'Weekly'}>Weekly</MenuItem>
                            <MenuItem value={'Monthly'}>Monthly</MenuItem>
                        </Select>
                        <FormHelperText>Interval</FormHelperText>
                    </FormControl>

                    {/* Categories Dropdown*/}
                    <FormControl sx={{ m: 1, minWidth: '50%' }}>
                        <InputLabel>Categories</InputLabel>
                        <Select
                        value={categories}
                        label="Categories"
                        onChange={handleCategories}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'Food'}>Food</MenuItem>
                            <MenuItem value={'Utilities'}>Utilities</MenuItem>
                            <MenuItem value={'Entertainment'}>Entertainment</MenuItem>
                            <MenuItem value={'Other'}>Other</MenuItem>
                        </Select>
                        <FormHelperText>Categories</FormHelperText>
                    </FormControl>
                </div>

                {/* Back and Save Continue Button */}
                <div style={{display: "flex", justifyContent: "space-between", fontWeight: "bold"}}>
                    <div></div>
                    
                    <div>
                        <Link href="/viewSetBudget" className="text-center">
                            <Button variant="contained" style = {{marginRight: '1.5vw', backgroundColor:'green'}}>        
                                Back
                            </Button>
                        </Link>
                        
                        <Button variant="contained" style = {{marginRight: '1.5vw', backgroundColor:'green'}}>        
                            Save and Continue
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default setBudget;