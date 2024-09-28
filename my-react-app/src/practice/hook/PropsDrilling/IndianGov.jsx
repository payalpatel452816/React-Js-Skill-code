import React from 'react'
import StateGov from './StateGov'

const IndianGov = () => {
   const  yojna ={
    money:2000,
    rashan:true,
    penstion:500
   }
  return (
    <div>IndianGov
        {/* <StateGov yojna={yojna}/> */}
        <StateGov/> {/* passing empty object as props */}
    </div>
  )
}

export default IndianGov