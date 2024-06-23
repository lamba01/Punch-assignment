import React from 'react'
import ForwardButton from './Common/Button/ForwardButton'
import '../styles/footer.css'
import logo from '../assets/images/Group 625177.png'

function Footer() {
  return (
    <footer>
        <div className='footer-div'>
            <h3>
                Need a job done, and done well? Get started
            </h3>
            <div className='tt' ><ForwardButton /></div>
        </div>
        <div className="footer-info">
            <div>
                <img src={logo} className='logo' alt="logo" />
                <p className='info'>We take complex hiring processes - 
                 and simplify them. Connecting you to the world’s highly qualified talent pool.</p>
            </div>
            <h1>Connecting the right people to the right businesses.</h1>
        </div>
        <div class="footer-container">
            <div className="footer-column">
                <h6>Links and direct</h6>
                <div>
                    <button className='footer-btn'>Hire now</button>
                    <button className='footer-btn'>Apply now</button>
                </div>           
            </div>
            <div class="footer-column">
                <h6>Platform</h6>
                <ul>
                    <li>Find Work</li>
                    <li>Find Talent</li>
                    <li>Categories</li>
                    <li>About us</li>
                </ul>
            </div>
            <div class="footer-column">
                <h6>Categories</h6>
                <ul>
                    <li>Data Science</li>
                    <li>IT & Networking</li>
                    <li>Web & Mobile</li>
                </ul>
            </div>
            <div class="footer-column">
                <h6>Help</h6>
                <ul>
                    <li>FAQ's</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div class="footer-column">
                <h6>Get in Touch@</h6>
                <ul>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </div>
        <div className='rights'>
            <p>All rights reserved by Zwilt</p>
            <div className='privacy'>
                <span>Privacy Policy</span>
                <span>Terms and Condition</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer