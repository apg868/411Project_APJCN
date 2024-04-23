'use client';
import React, { useState } from 'react';
import Link from "next/link";
import '../globals.css';
import { FormControl, InputLabel, MenuItem, FormHelperText, Typography, Button, TextField } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CloseIcon from '@mui/icons-material/Close';
import Navbar from '@/app/components/navbar';


const setBudget = () => {
    const [interval, setInterval] = React.useState('');
    const [categories, setCategories] = React.useState('');
    const [additionalFields, setAdditionalFields] = useState(1);
    const [inputValues, setInputValues] = React.useState(['']);
    const [errors, setErrors] = React.useState([false]);

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

    const handleInputChange = (index, value) => {
        const newInputValues = [...inputValues];
        const newErrors = [...errors];
        newInputValues[index] = value;
        if (!/^\d+(\.\d{0,2})?$/.test(value)) {
            newErrors[index] = true;
        } else {
            newErrors[index] = false;
        }
        setInputValues(newInputValues);
        setErrors(newErrors);
    };
    
    return (
        <div className="flex min-h-screen">
            {/* Navbar */}
            <div className="bg-gradient-to-t from-indigo-400 to-indigo-700 dark:bg-zinc-800/30 w-30 p-4 flex flex-col justify-between">
                <Navbar/>
            </div>

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
                                    <TextField
                                        id={`outlined-basic-${index}`}
                                        label="Amount"
                                        variant="outlined"
                                        sx={{ m: 1, minWidth: '50%' }}
                                        value={inputValues[index]}
                                        onChange={(e) => handleInputChange(index, e.target.value)}
                                        error={errors[index]}
                                        helperText={errors[index] ? "Only numbers up to 2 decimal places allowed" : "Amount"}
                                    />
                                    
                                    
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