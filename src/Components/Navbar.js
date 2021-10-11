import React from 'react'

export default function Navbar() {

    return (
        <div>
            <div className="page-wrapper">
                    <div className="nav-wrapper">
                    <div className="grad-bar"></div>
                    <nav className="navbar">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuWmiIzr_AAVeHUmc7JHYWzv2TqEU8GWL6JQ&usqp=CAU" alt="/"/>
                        <div className="menu-toggle" id="mobile-menu">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        </div>
                        <ul className="nav no-search">
                        <li className="nav-item"><a href="/">Home</a></li>
                        <li className="nav-item"><a href="/about">About</a></li>
                        <li className="nav-item"><a href="/service">Service</a></li>
                        <li className="nav-item"><a href="/contact">Contact Us</a></li>
                        </ul>
                </nav>
                </div>
             </div>
        </div>
    )
}

