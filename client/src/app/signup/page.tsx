import React from 'react';
import Link from "next/link";
import '../globals.css';
import { Button, Divider, TextField, Typography } from '@mui/material';
import { EmailOutlined, GitHub, Google, LockOutlined } from '@mui/icons-material';

const signUp = () => {
    return(
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100vh', width: '100vw', backgroundImage: 'url("/imageExpense/image2.jpeg")', paddingLeft: '0 !important' }}>
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                textAlign: 'left', 
                height: '100vh', 
                width: '44vw', 
                background: 'linear-gradient(to top, #6574cd, #7886d7)',
                borderRadius: '0px 70px 0px 0px',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{ 
                    fontWeight: '900', 
                    textAlign: 'center', 
                    background: `url('https://cdn.glitch.com/d1543bd7-bc7d-4cd5-bfe2-2119128d273a%2Fparticles.gif?v=1609615951326')`, 
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent'
                }}>
                    <div style = {{fontSize: '46px'}}>WELCOME</div>
                    <div style = {{fontSize: '26px'}}>to</div>
                    <div style = {{fontSize: '32px'}}>CAPITAL CREST</div>
                </div>

                <div>
                    <img src = "https://cdn.glitch.global/d1543bd7-bc7d-4cd5-bfe2-2119128d273a/sign-up-8694031-6983270.png?v=1713207994194" style = {{width:'80%', margin: '5vh'}}></img>
                </div>

                <Link href="/account">
                    <Button variant="contained" style={{ fontSize:'22px', width: '14vw', background: `url('https://cdn.glitch.com/d1543bd7-bc7d-4cd5-bfe2-2119128d273a%2Fparticles.gif?v=1609615951326')`, borderRadius: '20px' }}>        
                        Back
                    </Button>
                </Link>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', width: '70vw', justifyContent: 'center'}}>
                {/* Main Content */}
                <div style={{ width: '50%', borderRadius: '40px', padding: '20px', backgroundColor: '#e5e7eb', paddingTop: '50px', paddingBottom: '50px' }}>
                    <Typography variant="h5" component="h1" gutterBottom sx={{textAlign: 'left', color: '#7886d7', fontSize: '32px', fontWeight: '700'}}>
                        Sign Up with Capital Crest
                    </Typography>

                    <Typography variant="subtitle1" gutterBottom sx={{textAlign: 'left', color: '#525252', fontSize: '16px', fontWeight: '400'}}>
                        Create your account credentials today!
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

                        <Button variant="contained" style={{ width: '100%', backgroundColor: 'green', borderRadius: '20px' }}>        
                            SIGN UP
                        </Button>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div>
                                <Link href = "/account">
                                    <Button size="small" sx={{color: '#7886d7'}}>
                                        Already have an account? Log In
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div style = {{ display: 'flex', justifyContent: 'center' }}>
                            <div style = {{ fontSize: '10px', width: "70%" }}>
                                By continuing, you agree to the <b>Terms of Services</b>, <b>Privacy Policy</b>, and <b>Community Standard of UniMate</b>.
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
                            </div>
                            <div>
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

export default signUp;