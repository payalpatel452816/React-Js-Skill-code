import React, { useState } from 'react'


const TernaryOperator = () => {
    let [change,setchange]=useState(false)
    const  handlechange =()=>{
        return setchange(!change);
    }
  return (
    <div className='flex justify-center items-center'>
      <h1 className='text-2xl'>
        Ternary Operator
      </h1>
      <div className='mt-10 py-5'>
       <button onClick={()=>handlechange()} className='"bg-transparent  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"'>Click Me</button>
       {change? <p>JavaScript</p>:<p>JQuery</p>}
      </div>
    </div>
  )
}

export default TernaryOperator