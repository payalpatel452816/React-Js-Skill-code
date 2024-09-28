import React, { useEffect } from 'react'

const ChildCallback = ({handleClick}) => {
    useEffect(() =>{
        console.log("useEffect() called")
    },[handleClick]
)
  return (
    <div>

    </div>
  )
}

export default ChildCallback