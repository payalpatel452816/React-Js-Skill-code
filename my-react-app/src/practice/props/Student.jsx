import { useState } from "react"


const Student = (props) => {
    const [name, setName] = useState(props.name);
    const [age, setAge] = useState(props.age);
    const [gender, setGender] = useState(props.gender);

  return (
    <div>
         <h2>Student Details:</h2>
         <p>Name: {name}</p>
         <p>Age: {age}</p>
         <p>Gender: {gender}</p>
         <button onClick={() => setName('payal patel')}>Change Name</button>
         <button onClick={() => setAge(27)}>Change Age</button>
         <button onClick={() => setGender('Female')}>Change Gender</button>
         <button onClick={props.deleteStudent}>Delete Student</button>
    </div>
  )
}

export default Student