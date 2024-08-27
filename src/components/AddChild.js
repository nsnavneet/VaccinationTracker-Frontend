import React, { useState } from 'react';
import { addChild } from '../services/api';

const AddChild = () => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const child = { name, date_of_birth: dateOfBirth, phone_number: phoneNumber };
    try {
      await addChild(child);
      alert('Child added successfully');
      setName('');
      setDateOfBirth('');
      setPhoneNumber('');
    } catch (error) {
      console.error('Error adding child:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Date of Birth</label>
        <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
      </div>
      <div>
        <label>Phone Number</label>
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
      </div>
      <button type="submit">Add Child</button>
    </form>
  );
};

export default AddChild;
