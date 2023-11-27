import React from 'react'
import { fruit } from '../db/data'
import { getFruitWall } from '../Util/Util'


 function Wallpaper() {



    const source = fruit.map(ball =>
<div style={{ 
  backgroundImage: `url(${getFruitWall(ball)})`, 
  backgroundRepeat: 'repeat', 
  width: '100%', 
  height:'100%',
  margin: '.4px',
  padding: '3px',
  zIndex:'999999',
  position:'absolute'}}>
</div>


        );


  return (
    <div>{source}</div>
  )
}



export default Wallpaper