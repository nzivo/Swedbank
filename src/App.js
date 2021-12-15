import React from 'react'
import {Introduction} from './pages/Introduction/Introduction'
import {Navbar, Footer} from './components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css'

const swedBankTheme = createTheme({
    palette: {
        primary: {
            main: '#f35b1c'
        },
        secondary: {
            main: '#257886'
        },
        tertiary1: "#5b8ad6",
        tertiary2: "#c5569a"
    },
    typography: {
        fontFamily: 'Source Sans Pro',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    }
})

const App = () => {
    return (
        <ThemeProvider theme={swedBankTheme}>
            <div>
                <Navbar />
                <Introduction/>
                <Footer />
            </div>
        </ThemeProvider>
    )
}

export default App
