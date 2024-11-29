import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { buy_choco , buy_cake } from '../Componets/Action'
const ReduxContainer = () => {
    const data1 = useSelector(state => state.numOfChoco)
    const data2 = useSelector(state => state.numOfCake)
    console.log('reduxcontainer data',data1);
    console.log('reduxcontainer data',data2);
    const dispatch = useDispatch()
    
  return (
    <div>
      <h1 className='heading'>This is React Redux</h1>
      <span>{data1}</span>
      <button onClick={() => dispatch(buy_choco())}>Click Choco</button>
      <div></div>
      <span>{data2}</span>
      <button onClick={() => dispatch(buy_cake())}>Click Cake</button>
    </div>
  )
}
export default ReduxContainer