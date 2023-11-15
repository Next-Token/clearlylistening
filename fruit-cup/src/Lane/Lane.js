import React from 'react'
import { fruit } from '../db/data'
import { getFruitBall } from '../Util/Util'


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