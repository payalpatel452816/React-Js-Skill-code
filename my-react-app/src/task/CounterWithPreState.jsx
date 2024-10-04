import React from 'react'
import './style.css'

const CounterWithPreState = () => {
    const [count, setCount] = React.useState(0);
    const [prev, setPrev] =  React.useState(0);

    const increment = () =>{
        for(let i = 0; i < 10; i++) {
            setCount((prev)=> prev + 1);
        }
    }
  return (
    <div className='Counter'>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount((prev + 1))} className='btn-1'>Increment</button>
        <button onClick={()=>setCount((prev- 1))} className='btn-2'>Decrement</button>
        <button onClick={()=>setCount(0)} className='btn-3'>Reset</button>
        <button onClick={increment} className='btn-4'>Increment 10 times</button>
    </div>
  )
}

export default CounterWithPreState