import React, {useState} from 'react'

export default function Cake({box4, handleClick}){
   
    return(
        <div 
            className={box4.class}
            onClick={() => handleClick(box4.id)}
            
        >
            {box4.on ? 
            <div>
                <h1 className="cake-title">Choose cake for your wedding!!</h1> 
            </div> : 
            <div className='cake-flip-container'>
                <p>Kidding for your BDay! 🥳</p>
                <div className='cake-img-container'>
                    <img src="src/assets/cakeImages.png" alt="" />
                </div>
                
            </div>}
        </div>
    )
}