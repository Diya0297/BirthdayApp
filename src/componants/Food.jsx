import React, {useState} from 'react'

export default function Food({box7, handleClick}){
   
    return(
        <div 
            className={box7.class}
            onClick={() => handleClick(box7.id)}
           
        >

            {box7.on ? 
            <div className='box-7-container-off'>
                <h2>🍴 Birthday Bites: What’s on the Menu? </h2>
            </div> : 
            <div>
                <div className='FoodImages-grid'>
                    <img className="food-images" src="src/assets/Ramenimage-removebg-preview.png" alt="" />
                    <img className="food-images" src="src/assets/IndianFoodImage-removebg-preview.png" alt="" />
                    <img className="food-images" src="src/assets/BurgerImage-removebg-preview.png" alt="" />
                    <img className="food-images" src="src/assets/PizzaImage-removebg-preview.png" alt="" />
                </div>
            </div>}
          
        </div>
    )
}