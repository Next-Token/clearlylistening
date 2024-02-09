import React from 'react'
import { fruitMap } from '../db/data'
import { render } from '@testing-library/react'

let CUR =0;
let Count=0;
let Offset=69;
let Opacity =33;
let Cap=30;
let Next=1;
const myMap = new Map();
const myMap2 = new Map();

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
    // full page width ~ 30 fruit
    // want handle 31st fruit click  (show hidden fruit? unlocks login page)
    // need sidebar still 

    let selected = fruitMap.get(Selc());// log which fruit was clicked

    

    const handleApple = () => {
        count=count+1;
        let adjust = Offset * count;

      //  if (count > 30){
            

                //need to unrender the first item that was clicked. and pass the other 29 behind it to the 2nd map.
                //then render the new in place of first
                
                
                //1. un render current first
                //2. render new first
                //or
                // set cap. give reset button
             
   // }
        console.log('apple');   
        if(count <31){     
render(<div id='column' classname={count} style={{ 
        backgroundImage: `url(./apple.png)`, 
        backgroundRepeat: 'repeat-y', 
        width: '80px', 
        height:'100%',
        margin: '.2px',
        marginTop: '10px',
        marginLeft: '20px',
        opacity: `${Opacity}%`,
        padding: '1px',
        zIndex:'999999',
        left: `${adjust}px`,
        position:'absolute'  }}> </div>);       
        console.log(count);
        console.log('apple-Style');
        myMap.set(count, 'apple' );
}
        else{

            console.log('Initial Map FILLED');



            for (const [key, value] of myMap) {
                console.log(`${key} = ${value}`);
                
            }
            
            Next = count % 30;
            console.log('Current: ' + myMap.get(Next));
                myMap.delete(Next);
                myMap.set(Next, 'apple');
                count +=1;
                
        }
    }
    const handleBanana = () => {
        count=count+1;
        let adjust = Offset * count;

        console.log('banana');
        
render(<div style={{ 
        backgroundImage: `url(./banana.png)`, 
        backgroundRepeat: 'repeat-y', 
        width: '73px', 
        height:'100%',
        margin: '.2px',
        marginTop: '10px',
        marginLeft: '20px',
        opacity: `${Opacity}%`,
        padding: '1px',
        zIndex:'999999',
        left: `${adjust}px`,
        position:'absolute'  }}> </div>);       
        console.log(count);
        console.log('banana-Style');
        
        myMap.set(count, 'banana' );
}


    const handleCherry = () => {
        count=count+1;
        let adjust = Offset * count;
        
        console.log('cherry');
        
        
render(<div style={{ 
        backgroundImage: `url(./cherry.png)`, 
        backgroundRepeat: 'repeat-y', 
        width: '80px', 
        height:'100%',
        margin: '.2px',
        marginTop: '10px',
        marginLeft: '20px',
        opacity: `${Opacity}%`,
        padding: '1px',
        zIndex:'999999',
        left: `${adjust}px`,
        position:'absolute'  }}> </div>);       
        console.log(count);
        console.log('cherry-Style');
        myMap.set(count, 'cherry' );
    }
    const handlegrape = () => {
        count=count+1;
        let adjust = Offset * count;

        console.log('grape');
        
render(<div style={{ 
        backgroundImage: `url(./grape.png)`, 
        backgroundRepeat: 'repeat-y', 
        width: '80px', 
        height:'100%',
        margin: '.2px',
        marginTop: '10px',
        marginLeft: '20px',
        opacity: `${Opacity}%`,
        padding: '1px',
        zIndex:'999999',
        left: `${adjust}px`,
        position:'absolute'  }}> </div>);       
        console.log(count);
        console.log('grape-Style');
        myMap.set(count, 'grape' );    }
    const handlelamon = () => {
        count=count+1;
        let adjust = Offset * count;

        console.log('lamon');
        
render(<div style={{ 
        backgroundImage: `url(./lamon.png)`, 
        backgroundRepeat: 'repeat-y', 
        width: '80px', 
        height:'100%',
        margin: '.2px',
        marginTop: '10px',
        marginLeft: '20px',
        opacity: `${Opacity}%`,
        padding: '1px',
        zIndex:'999999',
        left: `${adjust}px`,
        position:'absolute'  }}> </div>);       
        console.log(count);
        console.log('lamon-Style');
        myMap.set(count, 'lamon' );}
    const handlemellon = () => {
        count=count+1;
        let adjust = Offset * count;

        console.log('mellon');
        
render(<div style={{ 
        backgroundImage: `url(./mellon.png)`, 
        backgroundRepeat: 'repeat-y', 
        width: '80px', 
        height:'100%',
        margin: '.2px',
        marginTop: '10px',
        marginLeft: '20px',
        opacity: `${Opacity}%`,
        padding: '1px',
        zIndex:'999999',
        left: `${adjust}px`,
        position:'absolute'  }}> </div>);       
        console.log(count);
        console.log('mellon-Style');
        myMap.set(count, 'mellon' );    }
    const handleorange = () => {
        count=count+1;
        let adjust = Offset * count;

        console.log('orange');
        
render(<div style={{ 
        backgroundImage: `url(./orange.png)`, 
        backgroundRepeat: 'repeat-y', 
        width: '80px', 
        height:'100%',
        margin: '.2px',
        marginTop: '10px',
        marginLeft: '20px',
        opacity: `${Opacity}%`,
        padding: '1px',
        zIndex:'999999',
        left: `${adjust}px`,
        position:'absolute'  }}> </div>);       
        console.log(count);
        console.log('orange-Style');
        myMap.set(count,'orange');
    }
    const handlepear = () => {
        count=count+1;
        let adjust = Offset * count;

        console.log('pear');
        
render(<div style={{ 
        backgroundImage: `url(./pear.png)`, 
        backgroundRepeat: 'repeat-y', 
        width: '80px', 
        height:'100%',
        margin: '.2px',
        marginTop: '10px',
        marginLeft: '20px',
        opacity: `${Opacity}%`,
        padding: '1px',
        zIndex:'999999',
        left: `${adjust}px`,
        position:'absolute'  }}> </div>);       
        console.log(count);
        console.log('pear-Style');
        
        myMap.set(count,'pear');
    }
    const handlepepper = () => {
        count=count+1;
        let adjust = Offset * count;

        console.log('pepper');
        
render(<div style={{ 
        backgroundImage: `url(./pepper.png)`, 
        backgroundRepeat: 'repeat-y', 
        width: '80px', 
        height:'100%',
        margin: '.2px',
        marginTop: '10px',
        marginLeft: '20px',
        opacity: `${Opacity}%`,
        padding: '1px',
        zIndex:'999999',
        left: `${adjust}px`,
        position:'absolute'  }}> </div>);       
        console.log(count);
        console.log('pepper-Style');
        myMap.set(count,'pepper');
    }
    const handlestrawberry = () => {
        count=count+1;
        let adjust = Offset * count;

        console.log('strawberry');
        
render(<div style={{ 
        backgroundImage: `url(./strawberry.png)`, 
        backgroundRepeat: 'repeat-y', 
        width: '80px', 
        height:'100%',
        margin: '.2px',
        marginTop: '10px',
        marginLeft: '20px',
        opacity: `${Opacity}%`,
        padding: '1px',
        zIndex:'999999',
        left: `${adjust}px`,
        position:'absolute'  }}> </div>);       
        console.log(count);
        console.log('strawberry-Style');
        myMap.set(count,'strawberry');
        
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