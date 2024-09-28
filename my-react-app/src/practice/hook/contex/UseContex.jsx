import { useState } from "react";
import MyContex from "./MyContex";

const UseContex = (props) => {
    const yojna={
        money:2000,
        rashan:true,
        penstion:500,
    };
    const [counter,setCounter] = useState(0);
  return (
    <div>
       <MyContex.Provider value={{yojna,
        counter,
        setCounter,
       
       }}>
        {props.children}
       </MyContex.Provider>
    </div>
  )
}

export default UseContex