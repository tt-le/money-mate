import React from 'react';
import { Stack, Typography, createTheme, TextField, ThemeProvider, 
    FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, 
    Button, Divider, Box, Grid } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import './login-register.css';
import logo from './money-management.png';

const loginTheme = createTheme({
    components: {
        MuiTypography: {
            variants: [{
                props: { variant: 'h5' },
                style: { fontWeight: 500 }
            }]
        }
    },
    palette: {
        primary: {
            main: '#4F86D0',
            dark: '#4775B3'
        }
    }
});

function Login() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className='login'>
            <ThemeProvider theme={ loginTheme }>
                <Grid 
                    container 
                    justifyContent='center' 
                    alignItems='center' 
                    height='inherit'
                >
                    <Stack
                        className='login-components'
                        spacing={ 1.5 } 
                        justifyContent='center' 
                        alignItems='center'
                        sx={{ borderRadius: '14px' }}
                    >
                        <img className='logo' src={ logo } alt="logo" />
                        <Typography variant='h5' gutterBottom>
                            MONEY MATE
                        </Typography>
                        
                        <Box height='15px'></Box>
                        
                        <TextField 
                            id='email' 
                            label='Email' 
                            variant='outlined' 
                            sx={{ m: 1, width: '350px' }}
                        />
                        
                        <FormControl sx={{ m: 1, width: '350px' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        
                        <Button 
                            variant='contained' 
                            color='primary' 
                            sx={{ m: 1, width: '350px' }}
                        >
                            Log In
                        </Button>
                    </Stack>
                </Grid>  
            </ThemeProvider>
        </div>
    );
}

export default Login;