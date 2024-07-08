import React, { useState } from 'react';

function ShotgunBoard() {
  const [formData, setFormData] = useState({ name: '', bet: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h2>Shotgun Board</h2>
      <p>Welcome to the Shotgun Board!</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Bet:
          <input type="text" name="bet" value={formData.bet} onChange={handleChange} />
        </label>
        <button type="submit">Place Bet</button>
      </form>
    </div>
  );
}

export default ShotgunBoard;
