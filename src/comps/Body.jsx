import React from 'react'
import Logo from '../assets/logo.svg'
import J from '../assets/J.png'

const Body = () => {
    return (
       <div className="j_section">
           <div className="j_section_wrapper_1">
               <img src={J} alt="" className="j_section_wrapper_1_img" />
           </div>
           <div className="j_section_wrapper">
               <img src={J} alt="" className="j_section_wrapper_img" />
           </div>

       </div>
    )
}

export default Body
