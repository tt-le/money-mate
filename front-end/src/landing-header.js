import React from "react";
import { Button, Grid, ThemeProvider, Typography, createTheme } from '@mui/material';
import { Link } from 'react-router-dom';

import './header.css';
import logo from './money-management.png';

const buttonTheme = createTheme({
    palette: {
        primary: {
            main: '#4F86D0'
        }
    }
});

function LandingHeader() {
    return (
                <div>
                    <Grid
                        className='header'
                        container
                        direction='row'
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <Grid
                            container 
                            direction='row'
                            justifyContent='space-between'
                            alignItems='center' 
                            sx={{ width: '160px'}}
                        >
                            <Grid item>
                                <img className='header-logo' src={ logo } alt='logo' />
                            </Grid>
                            <Grid item>
                                <Typography variant='button' sx={{ fontSize: '18px' }}>
                                    Money Mate
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            container 
                            direction='row'
                            justifyContent='space-between'
                            sx={{ width: '150px' }}
                        >
                            <ThemeProvider theme={ buttonTheme }>
                                <Grid item>
                                    <Link to='/'>
                                        <Button color='primary'>
                                            Log In
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to='register'>
                                        <Button color='primary'>
                                            Register
                                        </Button>
                                    </Link>
                                </Grid>
                            </ThemeProvider>
                        </Grid>
                    </Grid>
                </div>
    );
}

export default LandingHeader;