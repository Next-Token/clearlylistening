import React from 'react'
import { useState } from 'react';
import DropdownMenu from '../components/ddm';
import ICONS from '../index.js';

export default function Test() {



    const [disp, setDisp] = useState(false);


    const handleHover = () => {
      setDisp(true);
    }
    const handleExit = () => {
      setDisp(false);
    }
    // onMouseOver={ handleHover } onMouseLeave={ handleExit }

  return (
    <test>
        <div classname="temp" onMouseOver={ handleHover } onMouseLeave={ handleExit }>
        <img src={ ICONS.banana }/>
          {/* <DropdownMenu /> */}
          {disp && <DropdownMenu />}
    
            
            
            
            
            
        </div>



    </test>


  )
}






