import React, { useState } from "react";
import './style.css'

const StateWithArray = () => {
  const [items, setItems] = useState([]);

  const addItems = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random()*10)+1// generate unique id for each item
      },
    ]);
  };

  return (
    <div className="array">
      <button onClick={addItems}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default StateWithArray;
