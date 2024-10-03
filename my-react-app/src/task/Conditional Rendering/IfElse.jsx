import React, { useState } from "react";
//import React from "react";

// const IfElseExample = ({ n }) => {
//   let message;

//   // Conditional logic to set the message
//   if (n > 0) {
//     message = "is a positive number.";
//   } else if (n < 0) {
//     message = "is a negative number.";
//   } else {
//     message = "is zero.";
//   }

//   // Return statement inside the function
//   return (
//     <div>
//       <p>Number {n} {message}</p>
//     </div>
//   );
// };

// export default IfElseExample;

const IfElse =()=> {
  const [isLogIn, setisLogIn] = useState(false);
  if (isLogIn) {
    return (
      <div>
        <h1>Welcome User!</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Please Log In</h1>
        <button onClick={() => setisLogIn(true)}>Login</button>
      </div>
    );
  }
}
export default IfElse;
