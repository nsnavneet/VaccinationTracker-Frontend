import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Ensure this matches your backend server URL
});

export const addChild = async (child) => {
  const response = await api.post('/children', child);
  return response.data;
};

export const getVaccinationSchedule = async (childId) => {
  const response = await api.get(`/schedules/${childId}`);
  return response.data;
};

export default api;
