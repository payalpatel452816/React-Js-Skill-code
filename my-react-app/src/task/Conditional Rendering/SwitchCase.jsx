import React from "react";
import { useState } from "react";

const SwitchCase = () => {
  const [selectedState, setSelectedState] = useState("default");
  const handleChange = (event) => {
    setSelectedState(event.target.value);
  };

  let message;
  switch (selectedState) {
    case "option1":
      message = "You selected Option 1!";
      break;
    case "option2":
      message = "You selected Option 2!";
      break;
    case "option3":
      message = "You selected Option 3!";
      break;
    default:
      message = "Please select an option.";
  }

  return (
    <div className=" flex justify-center gap-3 items-center">
      <h1>Switch Case</h1>
      <select onChange={handleChange}>
        <option value="default">-- Select an Option --</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <h1>{message}</h1>
    </div>
  );
};

export default SwitchCase;
