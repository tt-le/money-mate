import React from "react";
import './header.css';
import logo from './money-management.png';
import { Button, Grid, ThemeProvider, Typography, createTheme } from '@mui/material';

const buttonTheme = createTheme({
    palette: {
        primary: {
            main: '#4F86D0'
        }
    }
});

function LandingHeader() {
    return (
        <header>
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
                            <Button color='primary'>
                                Log In
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button color='primary'>
                                Register
                            </Button>
                        </Grid>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </header>
    );
}

export default LandingHeader;