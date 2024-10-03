import React from 'react'
import { useMemo,useState } from 'react'

const UseMemo = () => {
    const[inputValue,SetInputValue] = useState("");

    const CalculateResult =(input) => {
        console.log("Calculating result...");
        return input * 2;

    }
    const memoResult=useMemo(()=>CalculateResult(inputValue),[inputValue])
  return (
    <div>
        <input value= {inputValue} onChange={(e)=>SetInputValue(e.target.value)} type="text"/>
        <p>Calculated Result: {memoResult}</p>
        <button onClick={()=>console.log(memoResult)}>Calculate</button>
    </div>
  )
}

export default UseMemo