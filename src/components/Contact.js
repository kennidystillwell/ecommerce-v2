import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comments: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name' && (value.trim() === '' || /[^a-zA-Z\s]/.test(value))) {
      alert('Please enter a valid name.');
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    console.log('Form submitted:', formData);

    alert('Thanks for Subscribing!');
  };

  return (
    <div id="contact-form">
      <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
      <p id="subscribe-text">Subscribe if you'd like to receive our weekly newsletter via email. We offer more information about hair types and styling, highlight our staff's choice products of the week, and give you access to exclusive promos and deals!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        
        <label htmlFor="comments">Comments:</label>
        <textarea id="comments" name="comments" value={formData.comments} onChange={handleInputChange} required></textarea>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;