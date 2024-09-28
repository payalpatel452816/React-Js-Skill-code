import React from 'react'
import UseState from './UseState'
import UseReducer from './UseReducer'
import UseEffect from './UseEffect'
import UseRef from './UseRef'

import IndianGov from './PropsDrilling/IndianGov'
import UseContex from './contex/UseContex'
import UseCallback from './usecallback/UseCallback'
import UseLayoutEffect from './UseLayoutEffect'


const Import = () => {
  return (
    <div>
      <UseContex>
        {/* <UseState/> */}
        {/* <UseReducer/> */}
        {/* <UseEffect/> */}
        {/* <UseRef/> */}
        {/* <IndianGov/> */}
        {/* <UseCallback/> */}
        <UseLayoutEffect/>
        </UseContex>
       
    </div>
  )
}

export default Import