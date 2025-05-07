import React, {useState} from 'react'

export default function ToDo({box2, handleClick}){
    return(
        <div 
            className={box2.class}
            onClick={() => handleClick(box2.id)}
           
        >
            {box2.on == false ? 
            <div>
                <ul class="todo-list">
                    <li>👑 Wake up & SLAY </li>
                    <li>🥋 Take it off (day not clothes)</li>
                    <li>Put on the cutest fit</li>
                    <li>💌 Post a cringey throwback on IG</li>
                    <li>🎁 Open gifts dramatically (Oscar energy pls)</li>
                    <li>📷 Take 1000 pics and post 3 </li>
                    <li>💖 Feel special & do absolutely nothing productive 🧘‍♀️💅</li>
                    <li>🌙 End the day with comfort food & feel the love 🍕🛋️💖</li>
                </ul>
            </div> :
            <div className="box2-container">
                <h1>First Things First</h1>
            </div> }
            
        </div>
    )
}