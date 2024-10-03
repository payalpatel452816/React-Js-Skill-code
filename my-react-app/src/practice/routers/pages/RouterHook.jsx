import React from "react";
import{Link,useNavigate} from 'react-router-dom'


const RouterHook = () =>{
     const navigate= useNavigate()
      return(
        <div>
            <button onClick={()=> navigate('/')}>Click For Home</button>
        </div>
      )
}
export default RouterHook