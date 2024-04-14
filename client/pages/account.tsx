import React from 'react';
import Link from "next/link";
import '../src/app/globals.css';
import { Typography, TextField, Button, Divider } from '@mui/material';
import { EmailOutlined, LockOutlined, Google, GitHub } from '@mui/icons-material';

const account = () => {
    return(
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100vh', width: '100vw', backgroundColor: '#e5e7eb', paddingLeft: '0 !important' }}>
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                textAlign: 'left', 
                height: '100vh', 
                width: '50vw', 
                background: 'linear-gradient(to top, #6574cd, #7886d7)',
                borderRadius: '0px 70px 0px 0px',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{ 
                    fontSize: '40px', 
                    fontWeight: '1000', 
                    textAlign: 'center', 
                    background: `url('https://cdn.glitch.com/d1543bd7-bc7d-4cd5-bfe2-2119128d273a%2Fparticles.gif?v=1609615951326')`, 
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent'
                }}>
                    WELCOME TO CAPITAL CREST
                </div>

                <div>
                    <img src = "https://cdn.glitch.global/d1543bd7-bc7d-4cd5-bfe2-2119128d273a/account-login-flat-illustration-vector.png?v=1713045332807" style = {{width:'80%', margin: '5vh'}}></img>
                </div>

                <Link href="/">
                    <Button variant="contained" style={{ fontSize:'22px', width: '14vw', background: `url('https://cdn.glitch.com/d1543bd7-bc7d-4cd5-bfe2-2119128d273a%2Fparticles.gif?v=1609615951326')`, borderRadius: '20px' }}>        
                        Back
                    </Button>
                </Link>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', width: '70vw', justifyContent: 'center'}}>
                {/* Main Content */}
                <div style={{ padding: 4, width: '50%' }}>
                    <Typography variant="h5" component="h1" gutterBottom sx={{textAlign: 'left', color: '#7886d7', fontSize: '32px', fontWeight: '700'}}>
                        Login
                    </Typography>

                    <Typography variant="subtitle1" gutterBottom sx={{textAlign: 'left', color: '#525252', fontSize: '16px', fontWeight: '400'}}>
                        Login to access your account
                    </Typography>

                    <form>
                        {/* Email */}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            name="email"
                            autoComplete="email"
                            placeholder='Email'
                            autoFocus
                            InputProps={{
                                style: {
                                    borderRadius: '50px',
                                    border: '1px solid #7886d7',
                                    background: '#F2FDFF'
                                },
                                startAdornment: (
                                    <EmailOutlined sx={{ marginRight: '8px' }} />
                                ),
                            }}
                        />

                        {/* Passcode */}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            placeholder='Password'
                            InputProps={{
                                style: {
                                    borderRadius: '50px',
                                    border: '1px solid #7886d7',
                                    background: '#F2FDFF'
                                },
                                startAdornment: (
                                    <LockOutlined sx={{ marginRight: '8px' }} />
                                ),
                            }}
                        />

                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <div>
                                <Button size="small" sx={{color: '#7886d7'}}>
                                    Forgot Password?
                                </Button>
                            </div>
                        </div>


                        <Button variant="contained" style={{ width: '100%', backgroundColor: 'green', borderRadius: '20px' }}>        
                            LOGIN
                        </Button>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div>
                                <Button size="small" sx={{color: '#7886d7'}}>
                                    Don't have an account? Sign up
                                </Button>
                            </div>
                        </div>
                        
                        <Divider sx={{ my: 3, color: '#777' }}>Continue with Others</Divider>

                        <div style = {{display: 'flex', justifyContent: 'space-between'}}>
                            <div>
                                <Button variant="outlined" startIcon={<Google />}  
                                    sx={{borderRadius: '50px', border: '1px solid #D9D9D9', fontSize: '14px', fontWeight: '400', color: '#777'}}
                                >
                                    Continue with Google
                                </Button>
                                <Button variant="outlined" startIcon={<GitHub />}  
                                    sx={{borderRadius: '50px', border: '1px solid #D9D9D9', fontSize: '14px', fontWeight: '400', color: '#777'}}
                                >
                                    Continue with GitHub
                                </Button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default account;