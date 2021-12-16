import React, { Component } from 'react';
import Application from '../Application/Application';
import Confirmation from '../Confirmation/Confirmation';
import Login from '../Login/Login';
import PersonalData from '../PersonalData/PersonalData';
import Success from '../Success/Success';

export class Introduction extends Component {
    state = {
        step: 1,
        userName: '',
        email: '',
        password: '',
        loanAmount: null,
        loanTerm: '',
        repaymentDate: '',
        netSalary: null,
        obligations: '',
        firstName: '',
        lastName: '',
        code: null,
        education: '',
        position: '',
        marital: '',
        telephone: ''
    }

    //Next Step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    //Previous Step
    previousStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    //Handling changes
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const {step} = this.state;
        const {userName, email, password,loanAmount,loanTerm,repaymentDate,netSalary,obligations, firstName, lastName, code, education, position, marital, telephone} = this.state;
        const values = {userName, email, password,loanAmount,loanTerm,repaymentDate,netSalary,obligations, firstName, lastName, code, education, position, marital, telephone}
        switch(step) {
            case 1:
                return (
                    <Login
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (<Application
                    nextStep = {this.nextStep}
                    previousStep = {this.previousStep}
                    handleChange = {this.handleChange}
                    values={values}
                />)
            case 3:
                return (<PersonalData
                    nextStep = {this.nextStep}
                    previousStep = {this.previousStep}
                    handleChange = {this.handleChange}
                    values={values}
                />)
            case 4:
                return (<Confirmation
                    nextStep = {this.nextStep}
                    previousStep = {this.previousStep}
                    values={values}
                />)
            case 5:
                return (<Success />)
            default:
                return (<Application
                    nextStep = {this.nextStep}
                    previousStep = {this.previousStep}
                    handleChange = {this.handleChange}
                    values={values}
                />)
        }
    }
}

export default Introduction
