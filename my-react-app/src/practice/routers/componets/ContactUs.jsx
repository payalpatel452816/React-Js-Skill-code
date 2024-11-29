// src/ContactUs.js
import React, { useState } from 'react';
import './contact.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSubmitted(true);
      setError('');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setError('There was a problem submitting the form. Please try again.');
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Whether you have a question, feedback, or just want to say hi, feel free to reach out.</p>
      <div className="contact-info">
        <h3>Our Location</h3>
        <p>123 Coffee Lane</p>
        <p>Coffee City, CO 12345</p>
        <p>Hours: Mon-Sun 7 AM - 7 PM</p>
      </div>
      {submitted && <p>Thank you for your message!</p>}
      {error && <p className="error-message">{error}</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
