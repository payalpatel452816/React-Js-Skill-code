import React, { useState } from 'react'
import { useEffect } from 'react'

const UseEffect = () => {
    const [count,setCount] = useState(0)
    useEffect(() => {
         const fetchData = async () =>{
             const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
             const data = await response.json()
             console.log(data)
         }
         fetchData();
    }, [])
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=> setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default UseEffect