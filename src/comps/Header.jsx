import React from 'react'

const Header = () => {
    return (
        <header className="header">
            <div className="header_logo">
                <img src="" alt="Nike Logo" className="header_logo_img" />
            </div>
            <nav className="header_nav">
                <ul className="header_nav_ul">
                    <li className="header_nav_ul_li"><span className="header_nav_ul_li_span">info</span></li>
                    <li className="header_nav_ul_li"><span className="header_nav_ul_li_span">sneakers</span></li>
                    <li className="header_nav_ul_li"><span className="header_nav_ul_li_span">shop</span></li>
                </ul>
            </nav>
            <div className="header_social">
                <a href="#" className="header_social_a">I</a>
                <a href="#" className="header_social_a">f</a>
                <a href="#" className="header_social_a">T</a>
            </div>
        </header>
    )
}

export default Header
