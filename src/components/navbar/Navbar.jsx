import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine, RiArrowDownSLine} from 'react-icons/ri';
import { FaHome, FaSearch, FaSignInAlt } from "react-icons/fa";
import './navbar.css';
import logo from '../../assets/swedbank-logo.svg'

const Menu = () => (
    //React Fragment for the menu
    <>
        <a href="/"><FaHome color='#f35b1c' size={18}/></a>
        <a href="/">Everyday Banking</a>
        <a href="/">Cards</a>
        <a href="/">Loan, leasing</a>
        <a href="/">Savings, Investments</a>
        <a href="/">Pension</a>
        <a href="/">Insurance</a>
        <a href="/"><FaSearch color='#f35b1c' size={18}/></a>
    </>
)

const Navbar = () => {

    const [toggleMenu , setToggleMenu] = useState(false);

    return (
        <div className='navbar'>
            <div className="navbar__branding-bar"></div>
            
            <div className='navbar__top-navbar'>
                <div className='navbar__top-navbar--left'>
                    <div className='navbar__logo'>
                        <img src={logo} alt='' />
                    </div>
                    <div className='navbar__service-type'>
                        <p>Personal <RiArrowDownSLine  color='#f35b1c' size={18}/></p>
                    </div>
                </div>
                <div className='navbar__top-navbar--right'>
                    <ul>
                        <li><a href="/">EN <RiArrowDownSLine color='#f35b1c' size={18}/></a></li>
                        <li><a href="/">Become a Customer</a></li>
                        <li><a href="/"><FaSignInAlt  color='#f35b1c' size={18}/> LogIn</a></li>
                    </ul>
                </div>
                <div className='navbar__toggle'>
                    {toggleMenu ? <RiCloseLine color='#f35b1c' onClick={() => setToggleMenu(false)}/>
                    :<RiMenu3Line color='#f35b1c' onClick={() => setToggleMenu(true)}/>
                    }
                    {toggleMenu && (
                        <div className='navbar__mobile-menu'>
                            <div className='navbar__mobile-menu--items'>
                                <Menu />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='navbar__bottom-navbar'>
                <Menu/>
            </div>
        </div>
    )
}

export default Navbar
