import React, {useState} from 'react'
import Lottie from "lottie-react";
import RamenAnimation from "/Users/diyapatel/Desktop/BirthdaySurpriseApp/src/animations/RamenAnimation.json"

export default function Extra({box8, handleClick}){
   
    return(
        <div 
            className={box8.class}
            onClick={() => handleClick(box8.id)}
           
        >
             <div className='animation-box'>
            <Lottie className="ramen-animation" animationData={RamenAnimation} loop={true} />
        </div>
          
        </div>
    )
}