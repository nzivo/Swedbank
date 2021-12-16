import React, { Component } from 'react';
import { CssBaseline, TextField, Grid, Divider, Button, 
    Typography, Box, MenuItem, FormControl, Select, InputLabel     } from '@mui/material';
import {RiMoneyEuroBoxLine} from 'react-icons/ri';

export class PersonalData extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    goBack = e => {
        e.preventDefault();
        this.props.previousStep();
    }

    render() {
        const {values, handleChange} = this.props;
        return (
            <div className="main-div">
                <React.Fragment>
                    <Typography 
                        variant="h4"
                        align="center"
                        color="primary"
                        fontWeight={700}
                        pt={2}>
                        Small Loan Application<br/> Step 2: Personal Data
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
                                    Borrower's Data
                                </Typography>
                                <Grid spacing={2} container align="center">
                                    <Grid item xs={12} md={6} xl={6}>
                                        <TextField
                                            label="First Name"
                                            size="small"
                                            variant="outlined"
                                            color="primary"
                                            required
                                            fullWidth
                                            margin="normal"
                                            onChange={handleChange('firstName')}
                                            defaultValue={values.firstName}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6} xl={6}>
                                        <TextField
                                            label="Last Name"
                                            size="small"
                                            variant="outlined"
                                            color="primary"
                                            required
                                            fullWidth
                                            margin="normal"
                                            onChange={handleChange('lastName')}
                                            defaultValue={values.lastName}
                                        />
                                    </Grid>
                                </Grid>
                                <TextField
                                    label="Personal Code"
                                    size="small"
                                    variant="outlined"
                                    color="primary"
                                    required
                                    fullWidth
                                    margin="normal"
                                    onChange={handleChange('code')}
                                    defaultValue={values.code}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} xl={6} p={3}>
                                <Typography 
                                    variant="h5"
                                    align="left"
                                    color="primary"
                                    fontWeight={700}
                                    pt={2}>
                                    Extended Data
                                </Typography>
                                <FormControl fullWidth>
                                    <InputLabel id="education">Education</InputLabel>
                                    <Select
                                    labelId="education"
                                    id="education"
                                    defaultValue={values.education}
                                    label="Education"
                                    onChange={handleChange('education')}
                                    >
                                    <MenuItem value="Primary">Primary</MenuItem>
                                    <MenuItem value="Secondary">Secondary</MenuItem>
                                    <MenuItem value="Vocational">Vocational</MenuItem>
                                    <MenuItem value="College">College</MenuItem>
                                    <MenuItem value="Higher">Higher</MenuItem>
                                    </Select>
                                </FormControl>
                                <Box component="div" sx={{ p: 1 }}>
                                </Box>
                                <FormControl fullWidth>
                                    <InputLabel id="position">Position Held</InputLabel>
                                    <Select
                                    labelId="position"
                                    id="position"
                                    defaultValue={values.position}
                                    label="Education"
                                    onChange={handleChange('position')}
                                    >
                                    <MenuItem value="Worker">Worker</MenuItem>
                                    <MenuItem value="Specialist / Office Worker">Specialist / Office Worker</MenuItem>
                                    <MenuItem value="Superior Specialist">Superior Specialist</MenuItem>
                                    <MenuItem value="Middle Manager">Middle Manager</MenuItem>
                                    <MenuItem value="Executive">Executive</MenuItem>
                                    <MenuItem value="Owner">Owner</MenuItem>
                                    <MenuItem value="Student">Student</MenuItem>
                                    <MenuItem value="Pensioner">Pensioner</MenuItem>
                                    <MenuItem value="At Home">At Home</MenuItem>
                                    <MenuItem value="Unemployed">Unemployed</MenuItem>
                                    <MenuItem value="Private Entrepreneur">Private Entrepreneur</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6} xl={6} p={3}>
                                <Typography 
                                    variant="h5"
                                    align="left"
                                    color="primary"
                                    fontWeight={700}
                                    pt={2}>
                                    Personal Data
                                </Typography>
                                
                                <FormControl fullWidth>
                                    <InputLabel id="marital">Marital Status</InputLabel>
                                    <Select
                                    labelId="marital"
                                    id="marital"
                                    defaultValue={values.marital}
                                    label="Marital Status"
                                    onChange={handleChange('marital')}
                                    >
                                    <MenuItem value="Single">Single</MenuItem>
                                    <MenuItem value="Married">Married</MenuItem>
                                    <MenuItem value="Common Law Marriage">Common Law Marriage</MenuItem>
                                    <MenuItem value="Divorced">Divorced</MenuItem>
                                    <MenuItem value="Widow / Widower">Widow / Widower</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6} xl={6} p={3}>
                                <Typography 
                                    variant="h5"
                                    align="left"
                                    color="primary"
                                    fontWeight={700}
                                    pt={2}>
                                    Contact Data
                                </Typography>
                                <TextField
                                    label="Telephone Number"
                                    size="small"
                                    variant="outlined"
                                    color="primary"
                                    required
                                    fullWidth
                                    margin="normal"
                                    onChange={handleChange('telephone')}
                                    defaultValue={values.telephone}
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
                                    Next
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

export default PersonalData
