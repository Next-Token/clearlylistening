import React from 'react'

import { getFruitWall } from '../Util/Util'
import { fruitMap } from '../db/data'


const Wallpaper = (props) => {
  
  const selected = props.selected;

  console.log('wallp');
console.log(props,selected);
console.log(';');



//const test = <img src={path} alt='2' />




  return (
    <div >


<img src={selected.path} alt='2'/>


    </div>
  )
}



export default Wallpaper