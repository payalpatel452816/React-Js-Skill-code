import React from 'react'

const AndOpe = ({isLoading}) => {
  const result = true && 'Hello World'
console.log(result)
// Hello World

const result2 = false && 'Hello World'
console.log(result2)
// false

  return (
    <div>
        { isLoading && <p>Loading...</p> }
        
        
    </div>
  )
}

export default AndOpe