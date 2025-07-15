import React from 'react'
import "./Footer.css";
export default function Footer() {
  return (
    <div>
       <footer>
       <header>
        <div className="header-container">
            <div className="logo"/>
                {/* <img src="icon.webp" alt="Nature Logo"/> */}
                <h1>Agri World Farming</h1>
                <div className="social-icons">
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i>  </a>
                <a href="#"><i className="fa-brands fa-google-plus-g"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                <a href="#"><i className="fa-brands fa-youtube"></i></a>
            </div>
            </div>
          
            <div classNameName='line'></div>

    </header>
        <div className="footer-container">
            <div className="footer-section">
                <h2>Get In Touch</h2>
                <p>Street 238,52 tempor<br/>
               </p>
                <p><strong>Phone:</strong> +1 500 000 0000<br/>
                <strong>E-mail:</strong> <a href="">example@gmail.com</a><br/>
                <strong>Website:</strong> <a href="">Farming</a></p>
            </div>
            <div className="footer-section">
                <h2>Categories</h2>
                <ul>
                    <li>Seasons</li>
                    <li>Types</li>
                    <li>Management</li>
                    <li>Lands</li>
                    
                </ul>
            </div>
            <div className="footer-section">
                <h2>Navigation</h2>
                <ul>
                    <a href="#Navbar.js"><li>Home</li></a>
                    <a href="#About.js"><li>About Us</li></a>
                    <a href="https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012"><li>Government Facilities</li></a>
                    <a href='#Crop'><li>Crops</li></a>
                    <a href="https://www.commodityonline.com/mandiprices"><li>Mandi Prices</li></a>
                    <a href='#Machines'><li>Machinaries</li></a>
                </ul>
            </div>
            {/* <div className="footer-section">
                <h2>Latest Posts</h2>
                <ul>
                    <li>Voluptas nulla pariatur</li>
                    <li>Perspiciatis unde omnis</li>
                    <li>Eiusmod tempor incididunt</li>
                </ul>
            </div> */}
        </div>
        <div className="footer-bottom">
            <p>&copy; Copyright 2024. Nature All Rights Reserved</p>
            <p>Design By </p>
        </div>
    </footer>
    </div>
  )
}