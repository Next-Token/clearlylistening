import React from 'react'
import { fruit } from '../db/data'
import { getFruitBall } from '../Util/Util'

let left = 0;
const dist = 500;
const fruitloop = document.querySelector('.bowling');

function bowl(){

    left +=5;
    fruitloop.style.transform = `translateX(${left}px)`;



    if(left !== dist){
        requestAnimationFrame(bowl);
    }
    else if(left == dist){
        
    fruitloop.style.transform = `translateX(0px)`;
    }

}

function Lane() {



    



  const listed = fruit.map(ball =>
    <li key={ball.id}>
        <img src={getFruitBall(ball)} alt={ball.name} className='bowling'
        />
    </li>
    
    );

    return <ul> { listed } </ul>;

}


export default Lane