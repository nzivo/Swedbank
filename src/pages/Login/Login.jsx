import React, { Component } from 'react'
import { Box, CssBaseline , Container, Chip, TextField, Grid, Divider, Checkbox, Button } from '@mui/material'

import Card from '@mui/material/Card';
import {RiFingerprintFill, RiGoogleFill} from 'react-icons/ri';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import '../Login/Login.css';

export class Login extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="xl" mb={10}>
                    <Box sx={{ bgcolor: '#fafafa' }} />
                </Container>
                <Grid container>
                    <Grid item xs={12} md={5} xl={5} p={3}>
                        <Card >
                            <CardMedia
                                component="img"
                                height="194"
                                image="/banking-homepage.jpg"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Divider variant="middle">
                                    <Chip 
                                        color="primary" 
                                        label="A SwedBank Customer?" />
                                </Divider>
                                <Typography 
                                variant="body2" 
                                color="text.secondary"
                                pt={2}
                                pb={3}>
                                    It is best to complete your application while logged in,
                                    as many fields are previously completed. The application enables us to find the most suitable solution
                                    for you and make you a personal loan offer. Completing an application does not oblige you to sign an agreement.

                                    Sign in the Login Section.
                                </Typography>
                                <Divider variant="middle">
                                    <Chip
                                        color="secondary"
                                        label="Not a SwedBank Customer?" />
                                </Divider>
                                <Typography 
                                    variant="body2"
                                    color="text.secondary"
                                    pt={2}>
                                    Completing an application enables us to find the most suitable solution for you and make preliminary assesment of your solvency.
                                    Completing an application does not oblige you to sign an agreement.

                                    Complete your application
                                </Typography>
                            </CardContent>
                            </Card>
                    </Grid>
                    <Grid item xs={12} md={7} xl={7} p={3} align="center">
                        <Typography 
                            variant="h5"
                            align="center"
                            color="primary"
                            fontWeight={700}
                            pt={2}>
                            Sign In
                        </Typography>
                        
                        <Typography 
                            variant="body1"
                            align="center"
                            variant="h6"
                            color="text.secondary"
                            fontWeight={400}
                            pt={2}>
                            Get better loans which make it manageable to repay
                        </Typography>
                        <form autoComplete='off'>
                            <TextField
                                label="Email Address"
                                size="small"
                                variant="outlined"
                                color="primary"
                                required
                                
                            />
                            <br/>
                            <TextField
                                label="Password"
                                size="small"
                                variant="outlined"
                                color="primary"
                                required
                                
                            />
                            <br/>
                            <Checkbox label="I agree to SwedBanks Terms of Service" />
                            <br/>
                            
                            <Button variant="contained">Access my Account</Button>
                            <br/>
                            <Divider variant="middle">
                                <Chip 
                                    color="secondary" 
                                    label="OR" />
                            </Divider>
                            <br/>
                            <Button width={200} variant="outlined" startIcon={<RiGoogleFill />}>
                                Sign In With Google
                            </Button>
                            <br/>
                            <Button width={200} variant="outlined" startIcon={<RiFingerprintFill />}>
                                Sign In With Fingerprint
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

export default Login
