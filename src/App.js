import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AddChild from './components/AddChild';
import SearchChild from './components/SearchChild';
import VaccinationTracker from './components/VaccinationTracker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vaccination Reminder Application</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-child">Add Child</Link></li>
            <li><Link to="/view-tracker">View Vaccination Tracker</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-child" element={<AddChild />} />
        <Route path="/view-tracker" element={<SearchChild />} />
        <Route path="/vaccination-tracker/:childId" element={<VaccinationTracker />} />
      </Routes>
    </div>
  );
}

const Home = () => (
  <section>
    <h2>Welcome to the Vaccination Reminder Application</h2>
    <p>Select a page from the navigation menu.</p>
  </section>
);

export default App;
