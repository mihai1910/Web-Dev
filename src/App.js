import React, { useState } from 'react';
import "./styles.css"

const MyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [terms, setTerms] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setMessage('Please fill in your name');
      return;
    }

    if (!email) {
      setMessage('Please fill in your email address');
      return;
    }

    if (!phone) {
      setMessage('Please fill in your phone number');
      return;
    }

    if (!terms) {
      setMessage('Please accept the terms and conditions');
      return;
    }

    const phoneRegex = /^07\d{8}$/;
    if (!phoneRegex.test(phone)) {
      setMessage('Please enter a valid phone number.');
      return;
    }

    setMessage('The form has been registered!');
    setName('');
    setEmail('');
    setPhone('');
    setTerms(false);
  };

  return (
    <div className="formContainer">
      <div className="title"><h1>Contact form</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="inputField"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            className="inputField"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            className="inputField"
            placeholder="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="checkboxContainer">
          <input
            type="checkbox"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
          />
          <label>Approve terms and conditions</label>
        </div>
        <button type="submit" className="submitButton">CLICK ME</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default MyForm;
