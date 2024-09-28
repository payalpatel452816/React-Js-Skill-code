import React from 'react'
import { useRef } from 'react'

const UseRef = () => {
    const myRef = React.useRef(null)
    console.log(myRef);
  return (
    <div>
        <input type="text" ref={myRef} />
        <button onClick={() => console.log(myRef.current.value)}>Get Value</button>
        <button onClick={() => myRef.current.focus()}>Focus Input</button>
    </div>
  )
}

export default UseRef