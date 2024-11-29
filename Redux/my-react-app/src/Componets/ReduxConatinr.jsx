import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { buy_choco , buy_cake } from '../Componets/Action'
const ReduxContainer = () => {
    const data1 = useSelector(state => state.choco.numOfChoco)
    const data2 = useSelector(state => state.cake.numOfCake)
    // const data = useSelector(state => state)
    console.log('reduxcontainer data',data1);
    console.log('reduxcontainer data',data2);
    // console.log('StoreData' , data);
    
    const dispatch = useDispatch()
    
  return (
    <div className='text-center'>
      <h1 className='heading'>This is React Redux</h1>
      <div>
      <span>{data1}</span>
      </div>
      <button onClick={() => dispatch(buy_choco())}>Click Choco</button>
      <div>
      <span>{data2}</span>
      </div>
      <button onClick={() => dispatch(buy_cake())}>Click Cake</button>
    </div>
  )
}
export default ReduxContainer