import React, { useContext } from 'react'
import MyContex from '../contex/MyContex'
const People = ( ) => {
  // console.log( "jnta Component:",yojna)
  const data= useContext(MyContex)
  console.log( "This data coming from",data)
  return (
    <div>
         people
         {/* <h1>{yojna.money}</h1>
         <h1>{yojna.rashan}</h1>
         <h1>{yojna.penstion}</h1> */}
    </div>
  )
}

export default People