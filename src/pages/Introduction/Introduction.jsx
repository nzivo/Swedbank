import React, { Component } from 'react';
import Login from '../Login/Login';

export class Introduction extends Component {
    state = {
        step: 1,
        userName: '',
        email: '',
        password: ''
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
        this.setState({[input]: e.target.value});
    }

    render() {
        const {step} = this.state;
        const {userName, email, password} = this.state;
        const values = {userName, email, password}
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
                return <h1>Application</h1>
            case 3:
                return <h1>Personal Data</h1>
            case 4:
                return <h1>Confirmation</h1>
            case 5:
                return <h1>Success</h1>
            default:
                return(
                    <Login
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values={values}
                    />
                )
        }
    }
}

export default Introduction
