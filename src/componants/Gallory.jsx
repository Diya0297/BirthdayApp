import React, {useState} from 'react'


export default function Gallory({box6, handleClick}){
   
    return(
        <div 
            className={box6.class}
            onClick={() => handleClick(box6.id)}
   
        >
       
           <img className="cat-image" src="src/assets/luck-charm-cat2-removebg-preview.png" alt="" />
            
            
        </div>
    )
}