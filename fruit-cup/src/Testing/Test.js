import React from 'react'
import { useState } from 'react';
import DropdownMenu from '../components/ddm';
import ICONS from '../index.js';
import "./Test.css";


export default function Test() {



    const [disp, slide] = useState(true);


    const handleHover = () => {
      slide(true);
      
      console.log('slide down');
    }
    const handleExit = () => {
      slide(false);
      console.log('slide up');
    }

  return (
      <h2 id='test2' 
      onMouseOver={ handleHover } onMouseLeave={ handleExit }>↓</h2>
     

  )
}






