import React from 'react';
import './login-register.css';
import logo from './money-management.png';
import { Stack, Typography, createTheme, TextField, ThemeProvider, 
    FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, 
    Button, Divider, Box, Link, Grid } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const loginTheme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: { variant: 'h5' },
                    style: { fontWeight: 500 }
                }
            ]
        }
    },
    palette: {
        primary: {
            main: '#4F86D0',
            dark: '#4775B3'
        }
    }
});

function TextBox({ id, label }) {
    return (
        <TextField 
            id={ id }
            label={ label } 
            variant='outlined' 
            sx={{ m: 1, width: '350px' }}
        />
    );
}

function Password({ label }) {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <FormControl sx={{ m: 1, width: '350px' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">{ label }</InputLabel>
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
                label={ label }
            />
        </FormControl>
    );
}

function Register() {
    return (
        <div className='register'>
            <ThemeProvider theme={ loginTheme }>
                <Grid 
                    container 
                    justifyContent='center' 
                    alignItems='center' 
                    height='inherit'
                >
                    <Stack
                        className='register-components'
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
                        
                        <TextBox id='first-name' label='First Name' />
                        <TextBox id='last-name' label='Last Name' />
                        <TextBox id='email' label='Email' />
                        <Password label='Password' />
                        <Password label='Confirm Password' />
                        
                        <Button variant='contained' color='primary' sx={{ m: 1, width: '350px' }}>
                            <Typography variant='button'>Sign Up</Typography>
                        </Button>
                        
                        <div></div>
                        <Divider variant='middle' sx={{width: '100%', maxWidth: '350px' }}/>
                        
                        <Link href="" underline='none' color='#4F86D0'>
                            <Typography variant='caption'>Sign in</Typography>
                        </Link>
                    </Stack>
                </Grid>
                
            </ThemeProvider>
        </div>
    );
}

export default Register;