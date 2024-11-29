import { useState } from 'react'
import './App.css'
//import Import from './practice/hook/Import'
import Layout from './practice/routers/pages/Layout'
import Serch from './practice/routers/componets/Serch'
import AddToCart from './practice/routers/componets/AddToCart'
//import Child2 from './practice/contextapi/Child2'
//import OurMenuComponets from './practice/routers/componets/OurMenuComponets'
import Task from './task/Task'
//import Work from './practice/work/Work'
//import Layout2 from './practice/routers/pages/Layout2'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    {/* <Work/> */}
     {/* <AddToCart/> */}
    <Task/>
    {/* <Layout2/> */}
     {/* <Layout/> */}
     {/* <Serch/> */}
     {/* <OurMenuComponets/> */}
     {/* <Import/>     */}
     {/* <Child2/> */}
     

    </>
  )
}

export default App
