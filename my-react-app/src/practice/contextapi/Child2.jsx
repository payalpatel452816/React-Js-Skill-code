import React, { createContext, useState } from 'react'
import Child from './Child'
import './Contex.css'
export const GlobalInfo= createContext();

const Child2 = () => {
  const [color,setColor] = useState('black')
  return (
    <>
    <GlobalInfo.Provider value={{appColor:color}}>
      <button onClick={() => setColor(color ==='black'?'red':'black')} >Toggle Color</button>
      <Child />
    </GlobalInfo.Provider>
   
    </>
  )
}

export default Child2