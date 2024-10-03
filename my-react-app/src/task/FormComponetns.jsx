import React, { useState } from 'react';

const FormComponent = () => {
    // State to manage form inputs
    const [formState, setFormState] = useState({
        name: '',
        email: '',
    });

    // Handle input change
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', formState);
        setFormState({ name: '', email: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 items-center  gap-3 flex justify-center">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 border border-gray-300 rounded "
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Enter your email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 border border-gray-300 rounded "
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-blue-500 rounded"
            >
                Submit
            </button>
        </form>
    );
};

export default FormComponent;
