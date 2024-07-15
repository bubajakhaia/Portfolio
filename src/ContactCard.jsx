import React from 'react';
import './ContactCard.css';

const ContactCard = () => {
  return (
    <div className="contact-card">
      <h2>Contact Information</h2>
      <p>Email: bubajakhaia@gmail.com</p>
      <p>Phone: +995 592 677 774</p>
      <p><span>🐱‍👤</span><a href='https://github.com/bubajakhaia?tab=repositories' target='/blank'>Github</a></p>
    </div>
  );
};

export default ContactCard;