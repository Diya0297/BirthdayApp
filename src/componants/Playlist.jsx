import React, {useState} from 'react'
import Lottie from "lottie-react";
import Animation from "/Users/diyapatel/Desktop/BirthdaySurpriseApp/src/animations/glibiAnimation.json"
export default function Playlist({box3, handleClick}){
    
    return(
        <div 
            className={box3.class}
            onClick={() => handleClick(box3.id)}
            
        >
            {box3.on ? 
            <div className="box3-container">
                <img className="music-gif" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb21rcGV2MjRhbDcydWkzMHo0cWtnNzh1eG5nNWR3OHB5MG1keDJvZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Yq2DaPfhTMb3GEZWju/giphy.gif" alt="" />
                <div>
                    <h1 className='remove-margin'>PLAYLIST</h1>
                    <h2 className='japanese-text remove-margin'>音楽</h2>
                </div>
                <Lottie animationData={Animation} loop={true} />
            
               
            </div> : 
            <div className="box3-container">
                <div>
                <ul className='box3-list-container'>
                    <li className='box3-list'>
                        <img src="src/assets/apt.jpg" alt="" />
                        <div >
                            <h2 className='music-content'>APT.</h2>
                            <p className='music-content'>Rose' & Bruno Mars</p>
                        </div>
                       
                    </li>
                    <li className='box3-list'>
                        <img src="src/assets/DieWithSmile.jpg" alt="" />
                        <div>
                            <h2 className='music-content'>Die with a smile</h2>
                            <p className='music-content'>Lady Gaga & Bruno Mars</p>
                        </div>
                        
                    </li>
                    <li className='box3-list'>
                        <img src="src/assets/Suzume.jpg" alt="" />
                        <div>
                            <h2 className='music-content'>Suzume</h2>
                            <p className='music-content'>Keiko Masuda</p>
                        </div>
                        
                    </li>
                </ul>
                </div>
                <div className='add-song-container'>
                    <h1 style={{fontFamily: '"Sour Gummy", sans-serif'}}>Add your favourite songs!</h1>
                    <a 
                    href="https://open.spotify.com/playlist/30HgregI6NbhyvdqCTeWk5?si=3KxgtzaZTQWj2DP4iYV3-Q" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                    >
                    <button className="square-move">Click Me</button>
                    </a>
                </div>
                
            </div>}
            
        </div>
    )
}