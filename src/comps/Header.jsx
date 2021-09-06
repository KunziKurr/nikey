import React from 'react'
import Logo from '../assets/logo.svg'
import menu from '../assets/notes.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="header_logo">
                <img src={Logo} alt="Nike Logo" className="header_logo_img" />
            </div>
            <nav className="header_nav">
                <ul className="header_nav_ul">
                    <li className="header_nav_ul_li"><span className="header_nav_ul_li_span">info</span></li>
                    <li className="header_nav_ul_li"><span className="header_nav_ul_li_span">sneakers</span></li>
                    <li className="header_nav_ul_li"><span className="header_nav_ul_li_span">shop</span></li>
                    <li className="header_nav_ul_li"> <img src={menu} className="header_nav_ul_li_img" alt="" srcset="" /> </li>

                </ul>
            </nav>
            {/* <div className="header_social">
                <a href="#" className="header_social_a">I</a>
                <a href="#" className="header_social_a">f</a>
                <a href="#" className="header_social_a">T</a>
            </div> */}
        </header>
    )
}

export default Header
