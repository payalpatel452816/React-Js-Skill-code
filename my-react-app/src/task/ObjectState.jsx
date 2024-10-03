import { useState } from "react"


const ObjectState = () => {
    const [car,setcar] =useState({year:2024,make:"Ford",model:"Mustang"});
    function  handleyearChange(event) {
         setcar({...car,year:parseInt(event.target.value)})  // spread operator to create a new object and update the year property.
        
    }
    function  handlemakeChange(event) {
         setcar({...car,make:event.target.value})  // spread operator to create a new object and update the make property.
        
    }
    function  handlemodelChange(event) {
         setcar({...car,model:event.target.value})  // spread operator to create a new object and update the model property.  // parseInt is used to convert the input value to integer.  // value attribute is used to display the current value of the input field.  // onChange event is triggered when the user finishes typing in the input field.  // event.target.value contains the current value of the input field.   // setcar updates the state with the new object with updated properties.   // spread operator is used to create a new object and update the properties of the car object.  // The properties of the car object are updated only when the corresponding input fields change.   // The new object is then assigned to the car state.  // This way, the car state is updated in real-time as the user types in the input fields.   // The input fields are controlled by the handleyearChange, handlemakeChange, and handlemodelChange
        
    }

  return (
    <div className="information">
        <p>Your Favorite Car Is:{car.year} {car.make} {car.model}</p>
        <input  type="number" onChange={handleyearChange}  value={car.year}/><br/>
        <input  type="text"   onChange={handlemakeChange}  value={car.make}/><br/>
        <input  type="text"   onChange={handlemodelChange}  value={car.model}/>

    </div>
  )
}

export default ObjectState