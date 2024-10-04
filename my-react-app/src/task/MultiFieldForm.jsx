import React, { useState } from 'react';
import './style.css'

const MultiFieldForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        setFormData({
            name: '',
            email: '',
            age: '',
            message: ''
        });
    };

    return (
        <div className='form'>

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
            <button type="submit" className='btn-5'>Submit</button>
        </form>
        </div>
    );
};

export default MultiFieldForm;
