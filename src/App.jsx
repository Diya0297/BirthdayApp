import React, { useState } from "react";
import gridData from "./gridData.js"

import Cake from "./componants/Cake.jsx";
import Food from "./componants/Food.jsx"
import Gallory from "./componants/Gallory.jsx"
import HeaderGrid from "./componants/HeaderGrid.jsx"
import Playlist from "./componants/Playlist.jsx"
import ToDo from "./componants/ToDoGrid.jsx"
import Wishes from "./componants/Wishes.jsx"
import Extra from "./componants/Extra.jsx"

export default function App(){
  const [grids, setGrids] = useState(gridData);

  function handleClick(id){
    setGrids(prevGrid => prevGrid.map(item => item.id == id ? {...item, on:!item.on} :  item))
  }
  
  return(
  
       <div className="container">
          <HeaderGrid box1={grids[0]} handleClick={handleClick} />

          <ToDo box2={grids[1]} handleClick={handleClick}/>

          <Playlist box3={grids[2] } handleClick={handleClick}/>

          <Cake box4={grids[3]} handleClick={handleClick}/>

          <Wishes box5={grids[4]} handleClick={handleClick}/>

          <Gallory box6={grids[5]} handleClick={handleClick}/>

          <Food box7={grids[6]} handleClick={handleClick}/>

          <Extra box8={grids[7]} handleClick={handleClick}/>
      </div>
  
  )
}
