import React from 'react'
import { fruit } from '../db/data'
import { getFruitBall } from '../Util/Util'

let left = 0;
const dist = 100;
const start=-1180;
const fruitloop = document.querySelector('.bowling');
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

function Lane() {



    



  const listed = fruit.map(ball =>
    <li key={ball.id}>
        <img src={getFruitBall(ball)} alt={ball.name} className='bowling'
        />
    </li>
    
    );
    bowl();

    return <ul> { listed } </ul>;

}


export default Lane