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

function Header() {
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
                    sm='auto'
                >
                    <Grid item>
                        <ThemeProvider theme={ buttonTheme }>
                            <Button variant='outlined' color='primary'>
                                Log Out
                            </Button>
                        </ThemeProvider>
                    </Grid>
                </Grid>
            </Grid>
        </header>
    );
}

export default Header;