import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__branding-bar"></div>
            <div className='footer__group-links'>
                <div className='footer__contact-us block__padding'>
                    <h2>Contact Us</h2>
                    <p>Frequently asked questions</p>
                    <p>Contacts, branches, ATMs</p>
                    <p>Book a consultation</p>
                    <p>About Swedbank</p>
                </div>
                <div className='footer__contact-us block__padding'>
                    <h2>Useful Links</h2>
                    <p>Sustainability</p>
                    <p>COVID-19</p>
                    <p>Online banking</p>
                    <p>Prices and rates</p>
                    <p>Calculators</p>
                    <p>Correspondent banks</p>
                    <p>Career</p>
                </div>
                <div className='footer__contact-us block__padding'>
                    <h2>Terms and conditions</h2>
                    <p>User terms</p>
                    <p>Processing of Personal Data</p>
                    <p>Handling customer claims</p>
                    <p>Your rights when making payments in EU</p>
                    <p>Cookies</p>
                    <p>Deposit and liability insurance for investors</p>
                    <p>Payment Service Directive (PSD2)</p>
                    <p>Prevention of money laundering</p>
                </div>
                <div className='footer__contact-us block__padding'>
                    <h2>Customer Programmes</h2>
                    <p>{`Swedbank’s Youth Programme`}</p>
                    <p>For parents of children and youth</p>
                    <p>For salary receivers</p>
                    <p>Golden Programme</p>
                    <p>Private Banking</p>
                    <p>Senior Programme</p>
                    <p>Become a business customer</p>
                </div>
            </div>
            <div className='footer__copyright'>
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
