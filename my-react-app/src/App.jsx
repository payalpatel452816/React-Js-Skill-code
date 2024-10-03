import { useState } from 'react'
import './App.css'
//import Import from './practice/hook/Import'
import Layout from './practice/routers/pages/Layout'
import OurMenuComponets from './practice/routers/componets/OurMenuComponets'
import Task from './task/Task'
//import Layout2 from './practice/routers/pages/Layout2'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Task/>
    {/* <Layout2/> */}
     {/* <Layout/> */}
     {/* <OurMenuComponets/> */}
     {/* <Import/>     */}

    </>
  )
}

export default App
