import React, { Component } from 'react'
import { CssBaseline , Chip, TextField, Grid, Divider, Checkbox, Button, FormControlLabel, Link, Card, CardMedia, CardContent, Typography } from '@mui/material'
import {RiFingerprintFill} from 'react-icons/ri';

import '../Login/Login.css';

export class Login extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    

    render() {
        const {values, handleChange} = this.props;
        return (
            <div className="main-div">
                <React.Fragment>
                    <CssBaseline />
                    <Grid container>
                        <Grid item xs={12} md={5} xl={5} p={3} >
                            <Card >
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="/banking-homepage.jpg"
                                    alt="Banking App"
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
                            <Grid item xs={12} md={7} xl={7}>
                                <Typography 
                                    variant="h4"
                                    align="center"
                                    color="primary"
                                    fontWeight={700}
                                    pt={2}>
                                    Sign In
                                </Typography>
                                
                                <Typography 
                                    align="center"
                                    variant="h6"
                                    color="text.secondary"
                                    fontWeight={400}
                                    pt={2}>
                                    Get better loans which make it manageable to repay
                                </Typography>
                                <form autoComplete='off' onSubmit={this.continue}>
                                    <TextField
                                        label="Email Address"
                                        id='email'
                                        type="email"
                                        size="small"
                                        variant="outlined"
                                        color="primary"
                                        required = 'true'
                                        fullWidth
                                        margin="normal"
                                        onChange={handleChange('email')}
                                        defaultValue={values.email}
                                    />
                                    <TextField
                                        id="password"
                                        label="Password"
                                        type="password"
                                        size="small"
                                        variant="outlined"
                                        color="primary"
                                        required={true}
                                        fullWidth
                                        margin="normal"
                                        onChange={handleChange('password')}
                                        defaultValue={values.password}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                    >
                                        Access my Account
                                    </Button>
                                    <br/>
                                    <br/>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="/" variant="body2">
                                            Forgot password?
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link href="/" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                    <br/>
                                    <Divider variant="middle">
                                        <Chip 
                                            color="secondary" 
                                            label="OR" />
                                    </Divider>
                                    <br/>
                                    <Button 
                                        fullWidth
                                        width={200} 
                                        variant="outlined" 
                                        margin="normal"
                                        startIcon={<RiFingerprintFill />}
                                        onClick={this.continue}
                                    >
                                        Sign In With Biometrics
                                    </Button>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                </React.Fragment>
            </div>
        )
    }
}

export default Login
