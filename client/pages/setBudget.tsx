import React, { useState } from 'react';
import Link from "next/link";
import '../src/app/globals.css';
import { FormControl, InputLabel, MenuItem, FormHelperText, Typography, Button, TextField } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CloseIcon from '@mui/icons-material/Close';


const setBudget = () => {
    const [interval, setInterval] = React.useState('');
    const [categories, setCategories] = React.useState('');
    const [additionalFields, setAdditionalFields] = useState(1);

    const handleInterval = (event: SelectChangeEvent) => {
        setInterval(event.target.value);
    };

    const handleCategories = (event: SelectChangeEvent) => {
        setCategories(event.target.value);
    };

    const handleAddAnotherEntry = () => {
        setAdditionalFields(prev => prev + 1);
    };

    const handleRemoveEntry = () => {
        setAdditionalFields(prev => prev - 1);
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
                    <Typography variant="h5">
                        SET BUDGET
                    </Typography>
                    <Button variant="contained" style = {{marginRight: '1.5vw', backgroundColor:'green'}}>        
                        Set Budget
                    </Button>
                </div>

                {/* Entering Budget */}
                <div className="bg-white rounded-lg shadow-md p-12 m-8">
                    <div>
                        <div>
                            {/* Render Fields */}
                            {[...Array(additionalFields)].map((_, index) => (
                                <div key={index}>
                                    <Typography variant="h5" style = {{marginBottom: '2vh', display: "flex", justifyContent: "space-between", width: '51%'}}>
                                        Entry {index + 1}
                                        {additionalFields > 1 && index > 0 && <CloseIcon style={{ cursor: 'pointer' }} onClick={() => handleRemoveEntry()} />}
                                    </Typography>

                                    {/* Textfield to enter amount */}
                                    <TextField id="outlined-basic" label="Amount" variant="outlined" helperText="Amount" sx={{ m: 1, minWidth: '50%' }}/>
                                    
                                    
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
                                            <MenuItem value={'Housing'}>Housing</MenuItem>
                                            <MenuItem value={'Utilities'}>Utilities</MenuItem>
                                            <MenuItem value={'Insurance'}>Insurance</MenuItem>
                                            <MenuItem value={'Entertainment'}>Entertainment</MenuItem>
                                            <MenuItem value={'Transportation'}>Transportation</MenuItem>
                                            <MenuItem value={'Miscellaneous'}>Miscellaneous</MenuItem>
                                            <MenuItem value={'Other'}>Other</MenuItem>
                                        </Select>
                                        <FormHelperText>Categories</FormHelperText>
                                    </FormControl>

                                </div>
                            ))}

                            {/* Render Additional Fields */}
                            <Button variant="contained" style = {{marginRight: '1.5vw', backgroundColor:'green'}} onClick={handleAddAnotherEntry}>        
                                Add Another
                            </Button>
                        </div>

                    </div>

                    {/* Back and Save Continue Button */}
                    <div style={{display: "flex", justifyContent: "space-between", fontWeight: "bold"}}>
                        <div></div>

                        <div>
                            {/* Back Button --> viewSetBudget page */}
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
                </div>

                
            </main>
        </div>
    );
}

export default setBudget;