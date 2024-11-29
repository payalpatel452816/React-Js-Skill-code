import React, { useState } from "react";
import "./style.css";

const MultiFieldForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setFormData({
      name: "",
      email: "",
      age: "",
      message: "",
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <div className="flex justify-around">
          <input type="checkbox" id="vehicle1" name="male"  />
          <label for="male"> Male</label>        
          <input type="checkbox" id="vehicle2" name="female" />
          <label for="female"> Female</label>
          <input type="checkbox" id="vehicle3" name="other"  />
          <label for="other">Other</label>
        </div>
        <br />
        <label for="date"></label>
        <input type="date" id="date" value="2024-05-02" />
        <br />
        <button type="submit" className="btn-5">
          Submit
        </button>
        <input type="reset" value="Reset" className="btn-6 ml-2" />
      </form>
    </div>
  );
};

export default MultiFieldForm;
