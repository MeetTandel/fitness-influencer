import React from 'react'
import VideoDetail from './VideoDetail'
import downArrow from "../../images/down-arrow.svg"

export default function Videos() {
    return (
        <div className="h-screen">
        <h1>Check out my Videos</h1>
         
         <div className="down-arrow">
             <img src={downArrow} alt="down-arrow" />
         </div>
        </div>
    )
}
