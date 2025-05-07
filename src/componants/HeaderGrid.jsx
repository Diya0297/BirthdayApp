import React, {useState} from 'react'

export default function HeaderGrid({box1, handleClick}){
    
    return(
        <div 
            className={box1.class}
            onClick={() => handleClick(box1.id)}
            
        >
            <div className='inner-container'>
            <img className='sakura-gif'
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXBuN2VucW5vN3RlbzgwZG5icDJxNXo1a256dGo3NGFkcmY2dGRjbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FIZ1QC610AAhi/giphy.gif"
            alt="Funny GIF"
            />
            <div>
                <h1 className='bday-title'>Happy Birthday ____!</h1>
                <p className="japanese-text">お誕生日おめでとう</p>
            </div>
            </div>
            
           
        </div>
    )
}