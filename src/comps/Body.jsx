import React from 'react'
import J from '../assets/J.png'
import J2 from '../assets/J2.png'
import J4 from '../assets/J4.png'
import room from '../assets/room.png'


const Body = () => {
    const style = {
        backgroundImage:`url(${room})`,
    }
    
    return (
       <div className="j_section">
           <div className="j_section_wrapper_1">
               <span className="j_section_wrapper_1_span_A">A</span>
               <img src={J4} alt="" className="j_section_wrapper_1_img" />
               <span className="j_section_wrapper_1_span_I">I</span>

           </div>
           <div className="j_section_wrapper">
               <img src={J} alt="" className="j_section_wrapper_img" />
               <span className="j_section_wrapper_1_span_R">R</span>
           </div>
        <div className="j_section_end" style={style}>
            {/* <img src={room} alt="" className="j_section_img" /> */}
        </div>
        <span className="j_section_span_1">Nike Air Jordan</span>
        <span className="j_section_span_2">Why Not Zer0'3 "UNITE"</span>

       </div>
    )
}

export default Body
