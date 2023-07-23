import React from 'react';
import './data.css';
import { Box, Grid, Typography, Divider } from '@mui/material';

function Item({ name, category, date, amount }) {
    return (
        <Grid item>
            <Divider />
            <Grid
                className='item'
                container
                direction='row'
                alignItems='baseline'
            >
                <Grid item xs textAlign='left'>
                    <Box sx={{ fontWeight: 'medium' }}>
                        { name }
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box sx={{ fontWeight: 'medium' }}>
                        { category }
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box sx={{ fontWeight: 'medium' }}>
                        { date }
                    </Box>
                </Grid>
                <Grid item xs textAlign='end'>
                    <Box sx={{ fontWeight: 'medium' }}>
                        { amount }
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}

function Table() {
    return (
        <div className='table'>
            <Grid
                container
                justifyContent='center'
                alignItems='center'
                height='inherit'
            >
                <Grid
                    className='table-components'
                    spacing={ 1 }
                    alignItems='center'
                    sx={{ borderRadius: '14px' }}
                >
                    <Grid item>
                        <Typography variant='h5' textAlign='left'  >
                            HISTORY
                        </Typography>
                    </Grid>

                    <Grid
                        className='subtitles'
                        container
                        direction='row'
                        justifyContent='space-between'
                        alignItems='baseline'
                    >
                        <Grid item xs textAlign='left'>
                            <Typography variant='overline' fontSize={ 14 }>
                                Name
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant='overline' fontSize={ 14 }>
                                Category
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant='overline' fontSize={ 14 }>
                                Date
                            </Typography>
                        </Grid>
                        <Grid item xs textAlign='end'>
                            <Typography variant='overline' fontSize={ 14 }>
                                Amount
                            </Typography>
                        </Grid>
                    </Grid>
                        
                    <Item
                        name='item 1'
                        category='category'
                        date='date'
                        amount='amount'
                    />
                    <Item
                        name='item 2'
                        category='category'
                        date='date'
                        amount='amount'
                    />

                    <Grid item>
                        <Divider sx={{ borderBottomWidth: 2, borderColor: 'black' }} />
                        <Grid 
                            className='total'
                            container
                            direction='row'
                            alignItems='baseline'
                        >
                            <Grid item xs textAlign='left'>
                                <Typography variant='overline' fontSize={ 16 }>
                                    Total
                                </Typography>
                            </Grid>
                            <Grid item xs textAlign='end'>
                                <Typography variant='overline' fontSize={ 16 }>
                                    $$$
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Table;