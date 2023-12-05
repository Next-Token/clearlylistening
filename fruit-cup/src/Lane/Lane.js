import React from 'react'
import { fruit } from '../db/data'
import { getFruitBall } from '../Util/Util'
import { getFruitWall } from '../Util/Util'
import { apple } from  '../Util/Util'

import { useState } from 'react';

import { fruitMap } from '../db/data'

import { setFruitWall } from '../Util/Util'
import Wallpaper from '../components/Wallpaper'
import { render } from '@testing-library/react'

let CUR =0;
let Count=0;
let Offset=69;


let left = 0;
const dist = 100;
const start=-180;
const fruitloop = document.querySelector('.bowl');
let count = 0;

function bowl(){

    if (count %2 == 0){ // go right
        left +=5;
        fruitloop.style.transform = `translateX(${left}px)`;
        if (left <= dist){
            requestAnimationFrame(bowl);
        }
        else{
            count+=1;
            bowl();
        }
    }
    else{ //go left

        left -=5;
        fruitloop.style.transform = `translateX(${left}px)`;
        if (left >= start){            
            requestAnimationFrame(bowl);
        }
        else{
            count+=1;
            bowl();
        }
    }

}

export function Selc(a){

    if (a ===0){
        console.log('Selc0');
        
        
        CUR =0;
        console.log(CUR);
        return CUR
    }
    if (a === 1) {
        console.log('Selc1');
        
        CUR =1;
        console.log(CUR);
        return CUR
    } 
    if (a ===2){
        console.log('Selc2');
        return 2
    }
    if (a === 3) {
        CUR=3;
        return CUR
    } 
    if (a ===4){
        CUR =4;
        return CUR
    }
    if (a === 5) {
        CUR = 5;
        return CUR
    } 
    if (a ===6){
        CUR = 6;
        return CUR
    }
    if (a === 7) {
        CUR = 7;
        return CUR
    } 
    if (a === 8) {
        CUR=8;
        return CUR
    } 
    if (a === 9) {
        
        CUR = 9; 
        console.log('9');
        return CUR
    } 
    else {
        console.log('initialload');
        CUR = 0;
        return CUR
        
    }

}


function Lane() {

    let selected = fruitMap.get(Selc());

    const handleApple = () => {
        count=count+1;
        let adjust = Offset * count;
        console.log(selected);
        selected=Selc(1);
        console.log(selected);
        console.log('apple');        
render(<div id='column' style={{ 
        backgroundImage: `url(./apple.png)`, 
        backgroundRepeat: 'repeat-y', 
        width: '100%', 
        height:'100%',
        margin: '.2px',
        marginTop: '10px',
        marginLeft: '20px',
        opacity: '33%',
        padding: '1px',
        zIndex:'999999',
        left: `${adjust}px`,
        position:'absolute'  }}> </div>);       
        console.log(count);
        console.log('nana');
    }
    const handleBanana = () => {
        count=count+1;
        let adjust = Offset * count;
        console.log(selected);
        selected=Selc(1);
        console.log(selected);
        console.log('banana');
        
render(<div style={{ 
        backgroundImage: `url(./banana.png)`, 
        backgroundRepeat: 'repeat-y', 
        width: '100%', 
        height:'100%',
        margin: '.2px',
        padding: '1px',
        zIndex:'999999',
        left: `${adjust}px`,
        position:'absolute'  }}> </div>);       
        console.log(count);
        console.log('nana');
}


    const handleCherry = () => {
        count=count+1;
        let adjust = Offset * count;
        console.log(selected);
        selected=Selc(1);
        console.log(selected);
        console.log('cherry');
        
render(<div style={{ 
        backgroundImage: `url(./cherry.png)`, 
        backgroundRepeat: 'repeat-y', 
        width: '100%', 
        height:'100%',
        margin: '.2px',
        padding: '1px',
        zIndex:'999999',
        left: `${adjust}px`,
        position:'absolute'  }}> </div>);       
        console.log(count);
        console.log('nana');
    }
    const handlegrape = () => {
        count=count+1;
        let adjust = Offset * count;
        console.log(selected);
        selected=Selc(1);
        console.log(selected);
        console.log('grape');
        
render(<div style={{ 
        backgroundImage: `url(./grape.png)`, 
        backgroundRepeat: 'repeat-y', 
        width: '100%', 
        height:'100%',
        margin: '.2px',
        padding: '1px',
        zIndex:'999999',
        left: `${adjust}px`,
        position:'absolute'  }}> </div>);       
        console.log(count);
        console.log('nana');
    }
    const handlelamon = () => {
        count=count+1;
        let adjust = Offset * count;
        console.log(selected);
        selected=Selc(1);
        console.log(selected);
        console.log('lamon');
        
render(<div style={{ 
        backgroundImage: `url(./lamon.png)`, 
        backgroundRepeat: 'repeat-y', 
        width: '100%', 
        height:'100%',
        margin: '.2px',
        padding: '1px',
        zIndex:'999999',
        left: `${adjust}px`,
        position:'absolute'  }}> </div>);       
        console.log(count);
        console.log('lamon');
    }
    const handlemellon = () => {
        count=count+1;
        let adjust = Offset * count;
        console.log(selected);
        selected=Selc(1);
        console.log(selected);
        console.log('mellon');
        
render(<div style={{ 
        backgroundImage: `url(./mellon.png)`, 
        backgroundRepeat: 'repeat-y', 
        width: '100%', 
        height:'100%',
        margin: '.2px',
        padding: '1px',
        zIndex:'999999',
        left: `${adjust}px`,
        position:'absolute'  }}> </div>);       
        console.log(count);
        console.log('nana');
    }
    const handleorange = () => {
        count=count+1;
        let adjust = Offset * count;
        console.log(selected);
        selected=Selc(1);
        console.log(selected);
        console.log('orange');
        
render(<div style={{ 
        backgroundImage: `url(./orange.png)`, 
        backgroundRepeat: 'repeat-y', 
        width: '100%', 
        height:'100%',
        margin: '.2px',
        padding: '1px',
        zIndex:'999999',
        left: `${adjust}px`,
        position:'absolute'  }}> </div>);       
        console.log(count);
        console.log('orange');
    }
    const handlepear = () => {
        count=count+1;
        let adjust = Offset * count;
        console.log(selected);
        selected=Selc(1);
        console.log(selected);
        console.log('pear');
        
render(<div style={{ 
        backgroundImage: `url(./pear.png)`, 
        backgroundRepeat: 'repeat-y', 
        width: '100%', 
        height:'100%',
        margin: '.2px',
        padding: '1px',
        zIndex:'999999',
        left: `${adjust}px`,
        position:'absolute'  }}> </div>);       
        console.log(count);
        console.log('pear');
    }
    const handlepepper = () => {
        count=count+1;
        let adjust = Offset * count;
        console.log(selected);
        selected=Selc(1);
        console.log(selected);
        console.log('pepper');
        
render(<div style={{ 
        backgroundImage: `url(./pepper.png)`, 
        backgroundRepeat: 'repeat-y', 
        width: '100%', 
        height:'100%',
        margin: '.2px',
        padding: '1px',
        zIndex:'999999',
        left: `${adjust}px`,
        position:'absolute'  }}> </div>);       
        console.log(count);
        console.log('pepper');
    }
    const handlestrawberry = () => {
        count=count+1;
        let adjust = Offset * count;
        console.log(selected);
        selected=Selc(1);
        console.log(selected);
        console.log('strawberry');
        
render(<div style={{ 
        backgroundImage: `url(./strawberry.png)`, 
        backgroundRepeat: 'repeat-y', 
        width: '100%', 
        height:'100%',
        margin: '.2px',
        padding: '1px',
        zIndex:'999999',
        left: `${adjust}px`,
        position:'absolute'  }}> </div>);       
        console.log(count);
        console.log('strawberry');
        
    }

  console.log(selected);
  console.log('fional');
    return <ul>
        <li>
            <img src='/apple.png' alt='0' className='bowling' onMouseDown={handleApple} />
        </li>
        <li>
            <img src='/banana.png' alt='1' className='bowling' onMouseDown={handleBanana} />
        </li>
        <li>
            <img src='/cherry.png' alt='2' className='bowling' onMouseDown={handleCherry} />
        </li>
        <li>
            <img src='/grape.png' alt='3' className='bowling' onMouseDown={handlegrape} />
        </li>
        <li>
            <img src='/lamon.png' alt='4' className='bowling' onMouseDown={handlelamon} />
        </li>
        <li>
            <img src='/mellon.png' alt='5' className='bowling' onMouseDown={handlemellon} />
        </li>
        <li>
            <img src='/orange.png' alt='6' className='bowling' onMouseDown={handleorange} />
        </li>
        <li>
            <img src='/pear.png' alt='7' className='bowling' onMouseDown={handlepear} />
        </li>
        <li>
            <img src='/pepper.png' alt='8' className='bowling' onMouseDown={handlepepper} />
        </li>
        <li>
            <img src='/strawberry.png' alt='9' className='bowling' onMouseDown={handlestrawberry} />
        </li>

    </ul>;

}


export default Lane