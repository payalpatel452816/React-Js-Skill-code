import React, { useState } from 'react'

const StateVariable = () => {
  const [count ,setCount] =useState()
  const [isOn,setIsOn] = useState(false)
  const handleClick = () => {
    setCount(count + 1)
    setIsOn(!isOn)
  }
  return (
    <div className='state'>
      <h1>Count: {count}</h1>
      <button onClick={handleClick} className='btn-6'>{isOn? 'Turn Off' : 'Turn On' }</button>
      <p>{isOn? 'The light is on' : 'The light is off'}</p>
    </div>
  )
}

export default StateVariable