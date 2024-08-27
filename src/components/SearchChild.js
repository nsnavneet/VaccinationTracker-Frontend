import React, { useState } from 'react';
import VaccinationTracker from './VaccinationTracker';

const SearchChild = () => {
  const [childId, setChildId] = useState('');
  const [showTracker, setShowTracker] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!childId.trim()) {
      setError('Please enter a valid Child ID');
      setShowTracker(false);
      return;
    }
    setError('');
    setShowTracker(true);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Child ID"
        value={childId}
        onChange={(e) => {
          setError('');
          setChildId(e.target.value);
        }}
      />
      <button onClick={handleSearch} disabled={!childId.trim()}>Search</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {showTracker ? (
        <VaccinationTracker childId={childId} />
      ) : (
        error && <p>No records found for the provided ID.</p>
      )}
    </div>
  );
};

export default SearchChild;
