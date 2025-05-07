import React, {useState} from 'react'
import Lottie from "lottie-react";
import cakeAnimation from "/Users/diyapatel/Desktop/BirthdaySurpriseApp/src/animations/CakeAnimation.json"

export default function Wishes({box5, handleClick}){
    const wishesList = ["Unlimited pizza for a week (yes, even cold leftover slices)", 
                        "Noise-cancelling headphones that also block drama",
                        "A year’s supply of instant noodles — fancy ones!",
                        "A laptop that never crashes (or updates during class)",
                        "A bank account that refills every Friday night",
                        "Straight A’s and a nap",
                        "A birthday party with free snacks and zero awkward small talk",
                        "A bed that makes itself and does my homework"
    ]
    const [selectedWish, setSelectedWish] = useState("");
   
    function randomWish(){
        let num = Math.floor((Math.random() * wishesList.length));
        setSelectedWish(wishesList[num])  
    }
    
    return(
        <div 
            className={box5.class}
            onClick={() => handleClick(box5.id)}
        
        >
            {box5.on ? 
            <div>
                <div className='wishes-container-off'>
                <h4>Wish Generator</h4>
                <p className='japanese-text'>希望します</p>
                <Lottie animationData={cakeAnimation} loop={true} />
                </div>
               
            </div> 
            : 
            <div>
                <div className='wishes-container-on'>
                    <p>{selectedWish}</p>
                    <button className='get-wish-btn' onClick={(e) => {
                        e.stopPropagation(); 
                        randomWish()
                        }}>
                            Get a wish
                    </button>
                </div>
            </div>}
                
         </div>
    )
}