import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const DropdownMenu = () => {
  
  
  
  
  return (
    <div className='traverse'>
    
    
    <button className='btns' ><p style={{transform: "rotate(90deg)"}}>Home</p></button>
    <button className='btns' ><p style={{transform: "rotate(90deg)"}}>Blog</p></button>
    <button className='btns' ><p style={{transform: "rotate(90deg)" }}>More</p></button>
    <button className='btns' ><p style={{transform: "rotate(90deg)",position: "relative",bottom:"9px"}}>GitHub</p></button>


     
    </div>
  );
};

export default DropdownMenu;
