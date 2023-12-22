import React from 'react'
import { useState } from 'react';
import DropdownMenu from '../components/ddm';
import ICONS from '../index.js';
import "./Test.css";


function Test() {



    const [disp, slide] = useState(true);


    const handleHover = () => {
      slide(true);
      
      console.log('slide down');
    }
    const handleExit = () => {
      slide(false);
      console.log('slide up');
    }

  return ( <div className='traverse'>
    
    
      <button className='btns' >Home</button>
      <button className='btns' >Blog</button>
      <button className='btns' >Youtube</button>
      <button className='btns' >GitHub</button>


      </div>

  );
}






export default Test