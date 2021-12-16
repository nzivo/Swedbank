import React, { Component } from 'react'
import { CssBaseline, TextField, Grid, Divider, Button, Radio, RadioGroup, Slider, Typography, Stack, FormControlLabel, FormLabel, Box } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import {RiMoneyEuroBoxLine} from 'react-icons/ri';

export class Application extends Component {

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
                        Small Loan Application<br/> Step 1: Amount Selection
                    </Typography>
                    <Typography 
                        align="center"
                        variant="body2"
                        color="text.secondary"
                        fontWeight={400}
                        pt={2}>
                        All Fields Marked * are Required
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
                                    Loan Amount Details
                                </Typography>
                                <Typography 
                                    align="left"
                                    variant="body1"
                                    color="text.secondary"
                                    fontWeight={800}
                                    pt={2}>
                                    Loan Amount
                                </Typography>
                                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                                    <Typography 
                                        align="center"
                                        variant="body1"
                                        color="text.secondary"
                                        fontWeight={400}
                                        pt={2}>
                                        500 €
                                    </Typography>
                                    <Slider
                                        aria-label="Always visible"
                                        valueLabelDisplay="on"
                                        label="Loan Amount"
                                        size="small"
                                        defaultValue={500}
                                        min={500}
                                        max={20000}
                                        aria-label="Small"
                                        onChange={handleChange('loanAmount')}
                                        defaultValue={values.loanAmount}
                                    />
                                    <Typography 
                                        align="center"
                                        variant="body1"
                                        color="text.secondary"
                                        fontWeight={400}
                                        pt={2}>
                                        20,000 €
                                    </Typography>
                                </Stack>
                                <Typography 
                                    align="left"
                                    variant="body1"
                                    color="text.secondary"
                                    fontWeight={800}
                                    pt={2}>
                                    Term of Loan
                                </Typography>
                                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                                    <Typography 
                                        align="center"
                                        variant="body1"
                                        color="text.secondary"
                                        fontWeight={400}
                                        pt={2}>
                                        6 Months
                                    </Typography>
                                    <Slider
                                        aria-label="Always visible"
                                        valueLabelDisplay="on"
                                        label="Loan Term"
                                        size="small"
                                        defaultValue={6}
                                        min={6}
                                        max={60}
                                        aria-label="Small"
                                        onChange={handleChange('loanTerm')}
                                        defaultValue={values.loanTerm}
                                    />
                                    <Typography 
                                        align="center"
                                        variant="body1"
                                        color="text.secondary"
                                        fontWeight={400}
                                        pt={2}>
                                        60 Months
                                    </Typography>
                                </Stack>
                                <Box component="div" sx={{ p: 1 }}>
                                </Box>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DateTimePicker
                                        renderInput={(props) => <TextField {...props} />}
                                        label="Preferred Repayment Date"
                                        margin="normal"
                                        onChange={handleChange}
                                        defaultValue={values.repaymentDate}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} md={6} xl={6} p={3}>
                                <Typography 
                                    variant="h5"
                                    align="left"
                                    color="primary"
                                    fontWeight={700}
                                    pt={2}>
                                    Income and Obligations Data
                                </Typography>
                                <TextField
                                    label="Monthly Salary after Taxes"
                                    size="small"
                                    variant="outlined"
                                    color="primary"
                                    required
                                    fullWidth
                                    margin="normal"
                                    onChange={handleChange('netSalary')}
                                    defaultValue={values.netSalary}
                                />
                                <Box component="div" sx={{ p: 1 }}>
                                </Box>
                                <FormLabel component="legend">Do you have obligations outside Swedbank</FormLabel>
                                <RadioGroup row aria-label="gender" name="row-radio-buttons-group" 
                                    onChange={handleChange('obligations')}>
                                    <FormControlLabel value="I have obligations Outside Swedbank" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="I do not have obligations Outside Swedbank" control={<Radio />} label="No" />
                                </RadioGroup>
                                <br/>
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
                                    disabled
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

export default Application
