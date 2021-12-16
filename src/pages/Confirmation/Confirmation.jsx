import React, { Component } from 'react';
import { CssBaseline, Grid, Divider, Button, 
    Typography, Box, List, ListItem, ListItemText, FormControlLabel, Checkbox } from '@mui/material';
import {RiMoneyEuroBoxLine} from 'react-icons/ri';

export class Confirmation extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    goBack = e => {
        e.preventDefault();
        this.props.previousStep();
    }

    render() {
        const {values: {loanAmount,loanTerm,repaymentDate,netSalary,obligations, firstName, lastName, code, education, position, marital, telephone}} = this.props;
        return (
            <div className="main-div">
                <React.Fragment>
                    <Typography 
                        variant="h4"
                        align="center"
                        color="primary"
                        fontWeight={700}
                        pt={2}>
                        Small Loan Application<br/> Step 3: Confirm &amp; Submit
                    </Typography>
                    <Divider variant="middle">
                        <RiMoneyEuroBoxLine />
                    </Divider>
                    <CssBaseline />
                    <form autoComplete='off'>
                        <Grid container>
                            <Grid item xs={12} md={6} xl={6} p={3}>
                                <Typography 
                                    variant="h5"
                                    align="left"
                                    color="primary"
                                    fontWeight={700}
                                    pt={2}>
                                    Personal Details
                                </Typography>
                                <Grid spacing={2} container align="center">
                                    <Grid item xs={12} md={6} xl={6}>
                                        <List>
                                            <ListItem>
                                                <ListItemText primary="First Name" secondary={firstName } />
                                            </ListItem>
                                        </List>
                                    </Grid>
                                    <Grid item xs={12} md={6} xl={6}>
                                        <List>
                                            <ListItem>
                                                <ListItemText primary="Last Name" secondary={ lastName } />
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                                <List>
                                    <ListItem>
                                        <ListItemText primary="Marital Status" secondary={ marital } />
                                    </ListItem>
                                </List>
                                <Grid spacing={2} container align="center">
                                    <Grid item xs={12} md={6} xl={6}>
                                        <List>
                                            <ListItem>
                                                <ListItemText primary="Telephone Number" secondary={ telephone } />
                                            </ListItem>
                                        </List>
                                    </Grid>
                                    <Grid item xs={12} md={6} xl={6}>
                                        <List>
                                            <ListItem>
                                                <ListItemText primary="Personal Code" secondary={ code } />
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                                
                            </Grid>
                            <Grid item xs={12} md={6} xl={6} p={3}>
                                <Typography 
                                    variant="h5"
                                    align="left"
                                    color="primary"
                                    fontWeight={700}
                                    pt={2}>
                                    Education &amp; Experience
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText primary="Educational Background" secondary={ education } />
                                    </ListItem>
                                </List>
                                
                                <Box component="div" sx={{ p: 1 }}>
                                </Box>
                                <List>
                                    <ListItem>
                                        <ListItemText primary="Position Held" secondary={ position } />
                                    </ListItem>
                                </List>
                                
                            </Grid>
                            <Grid item xs={12} md={6} xl={6} p={3}>
                                <Typography 
                                    variant="h5"
                                    align="left"
                                    color="primary"
                                    fontWeight={700}
                                    pt={2}>
                                    Loan Details
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText primary="Loan Amount" secondary={ loanAmount } />
                                    </ListItem>
                                </List>
                                <List>
                                    <ListItem>
                                        <ListItemText primary="Loan Term (Months)" secondary={ loanTerm } />
                                    </ListItem>
                                </List>
                                <List>
                                    <ListItem>
                                        <ListItemText primary="Preferred Repayment Date" secondary={ repaymentDate } />
                                    </ListItem>
                                </List>
                                
                                
                            </Grid>
                            <Grid item xs={12} md={6} xl={6} p={3}>
                                <Typography 
                                    variant="h5"
                                    align="left"
                                    color="primary"
                                    fontWeight={700}
                                    pt={2}>
                                    Declaration
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText primary="Monthly Salary after Taxes (€)" secondary={ netSalary } />
                                    </ListItem>
                                </List>
                                <List>
                                    <ListItem>
                                        <ListItemText primary="Do You Have Other Obligations Outside Swedbank" secondary={ obligations } />
                                    </ListItem>
                                </List>
                                <FormControlLabel
                                    required
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="I confirm the details submitted are true to the best of my knowledge"
                                />
                                
                            </Grid>
                        </Grid>
                        <Grid spacing={2} container align="center">
                            <Grid item xs={12} md={6} xl={6}>
                                <Button
                                    align="left"
                                    xs={6}
                                    type="submit"
                                    variant="outlined"
                                    color="primary"
                                    onClick={this.goBack}
                                >
                                    Previous
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6} xl={6}>
                                <Button
                                    align="right"
                                    xs={6}
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    onClick={this.continue}
                                >
                                    Complete My Application
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                    <Box component="div" sx={{ p: 1 }}>
                    </Box>
                </React.Fragment>
            </div>
        )
    }
}

export default Confirmation
