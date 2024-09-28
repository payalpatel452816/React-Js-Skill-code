import React from 'react'
import { useState } from 'react'
import ChildCallback from './ChildCallback'

const UseCallback = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const handleClick = React.useCallback(() => {
    setCount1(count1 + 1)
  }, [count1]) // Only re-run this effect if count1 changes
  return (
    <div>
         <p>{count2}</p>
         <ChildCallback handleClick={handleClick} />
         <button onClick={() => setCount2(count2 + 1)}>Increment Count1</button>
    </div>
  )
}

export default UseCallback