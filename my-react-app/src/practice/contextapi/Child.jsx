import React, { useContext } from 'react'
import { GlobalInfo } from './Child2'
import Context from './Context';

const Child = () => {
  const {appColor}= useContext(GlobalInfo);
  console.log(appColor) // will print the appColor value
  return (
    <div>

      <h1 style={{color: appColor }}>This is Child Component</h1>
       <Context/>
    </div>
  )
}

export default Child