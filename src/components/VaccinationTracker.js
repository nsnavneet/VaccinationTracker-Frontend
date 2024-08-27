import React, { useEffect, useState } from 'react';
import { getVaccinationSchedule } from '../services/api';

const VaccinationTracker = ({ childId }) => {
  const [groupedSchedule, setGroupedSchedule] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    const fetchSchedule = async () => {
      try {
        const data = await getVaccinationSchedule(childId);
        setGroupedSchedule(data);
        setError('');
      } catch (error) {
        console.error('Error fetching vaccination schedule:', error);
        setError('Failed to fetch schedule. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchSchedule();
  }, [childId]);

  if (loading) {
    return <div>Loading vaccination schedule...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Vaccination Schedule for Child ID: {childId}</h2>
      {Object.keys(groupedSchedule).length > 0 ? (
        Object.keys(groupedSchedule).map(ageRange => (
          <section key={ageRange} className="age-group">
            <h3>{ageRange}</h3>
            {groupedSchedule[ageRange].map((item, index) => (
              <article key={index} className="vaccine-item">
                <h4>{item.vaccine_name}</h4>
                <p>Due on: {new Date(item.due_date).toLocaleDateString()}</p>
                <p>{item.vaccine_description}</p>
                <button>Mark Done</button>
              </article>
            ))}
          </section>
        ))
      ) : (
        <p>No vaccination schedule available for this child.</p>
      )}
    </div>
  );
};

export default VaccinationTracker;
