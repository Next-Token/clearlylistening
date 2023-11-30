import React from 'react'
import ICONS from '../index.js';
import Wallpaper from '../components/Wallpaper.js';

export function getFruitBall(ball){
    return( ball.name + '.png');
}


export function getFruitWall(ball){
  if (ball.selected === false){
  return('/' + ball.name + '.png');
  }
  else
    return (false);
}


export function setFruitWall(ball){

  console.log('made it here');
  if(ball.id===0 ){
    return (ball.selected = true);
  }
  if (ball.id===1){
    return (ball.selected = true);
  }
  if (ball.id===2 ){
    return (ball.selected = true);
  }
  if(ball.id===3 ){
    return (ball.selected = true);
  }
  if (ball.id===4 ){
    return (ball.selected = true);
  }
  if (ball.id===5){
    return (ball.selected = true);
  }
  if(ball.id===6){
    return (ball.selected = true);
  }
  if (ball.id===7){
    return (ball.selected = true);
  }
  if (ball.id===8){
    console.log({ball})
    return <Wallpaper {...ball}/>;
  }


   


}

/*
export function mDBConn(){


  const { MongoClient, ServerApiVersion } = require('mongodb');


  const username = encodeURIComponent("fruitboy");

const password = encodeURIComponent("<password>");

const cluster = "<clusterName>";

const authSource = "<authSource>";

const authMechanism = "<authMechanism>";

let uri =

  `mongodb+srv://${username}:${password}@${cluster}/?authSource=${authSource}&authMechanism=${authMechanism}`;




  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }



  run().catch(console.dir);




}*/

 function Util() {





  return (





    <div>Util</div>



  )
}



export default Util