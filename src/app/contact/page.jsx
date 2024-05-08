"use client";
import { useState } from "react";
import styles from './contact.module.css'

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Implement form submission logic here (explained later)

    setName("");
    setEmail("");
    setMessage("");
    setFormSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <h1>Contact</h1>
      {formSubmitted ? (
        <p>Thank you for your message! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
}

export default Contact;
