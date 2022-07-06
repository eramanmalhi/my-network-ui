import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import RegisterComponent from './RegisterComponent';
import LoginComponent from './LoginComponent';

const LandingPageComponent = () => {
    return (
        <Box sx={{ flexGrow: 1 }} className="mt-4 center" >
            <Grid
                direction="row"
                justifyContent="center"
                container spacing={1}>
                <Grid item xs={5}>
                    <Paper className='text-primary mt-2 ps-2 pt-2 pb-2 pe-2 align-middle'><h2>Join <img src="/images/my-logo.png" alt="My Network" width="60" height="48" className="d-inline-block align-text-top" /> In One Simple Step</h2>
                    <Divider className="pe-2" orientation="horizontal" flexItem>
                </Divider>
                    <RegisterComponent />
                    </Paper>
                </Grid>
                <Divider orientation="vertical" flexItem>
                <img src="/images/my-logo.png" alt="" width="90" height="72" className="d-inline-block align-text-top" />
                </Divider>
                <Grid item xs={5}>
                <Paper className='text-primary mt-2 ps-2 pt-2 pb-2 pe-2 align-center'><h2>Sign In <img src="/images/my-logo.png" alt="My Network" width="60" height="48" className="d-inline-block align-text-top" /></h2>
                    <Divider className="pe-2" orientation="horizontal" flexItem>
                </Divider><LoginComponent /></Paper>
                </Grid>

            </Grid>
        </Box>
    )
}

export default LandingPageComponent