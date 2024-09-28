import React from "react";

const Meal = ({ detail }) => {
  console.log(detail);

  return (
    <div className="meals">
      {!detail ? "" : detail.map((curItem) => {
            return (
              <div>
                <img src={curItem.strMealThumb}/>
                <p>{curItem.strMeal}</p>
                <button>Recipe</button>
              </div>
            );
          })}
    </div>
  );
};

export default Meal;
