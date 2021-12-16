import React, { Component } from 'react';
import { CssBaseline, Typography, Box } from '@mui/material';

export class Success extends Component {

    render() {
        return (
            <div className="main-div">
                <React.Fragment>
                    <Typography 
                        variant="h4"
                        align="center"
                        color="primary"
                        fontWeight={700}
                        pt={2}>
                        Your Loan Application<br/> Was Successful
                    </Typography>
                    <CssBaseline />
                    <Typography 
                        variant="body1"
                        align="center"
                        fontWeight={400}
                        pt={2}>
                        Your application has been received and is currently being reviewed by one of our champions.<br/>
                        We will get back to you within 12 Hours through your contact details.
                    </Typography>
                    <Box component="div" sx={{ p: 1 }}>
                    </Box>
                </React.Fragment>
            </div>
        )
    }
}

export default Success
