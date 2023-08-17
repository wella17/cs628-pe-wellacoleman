import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CitiesList from './CitiesList';
import CityDetails from './CityDetails';
import AddCity from './AddCity';
import './App.css';

function App() {
  const [cities, setCities] = useState([]);

  const handleAddCity = newCity => {
    setCities(prevCities => [...prevCities, newCity]);
  };

  return (
    <Router>
      <div className="container">
        <h1>Cities Application</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Cities List</Link>
            </li>
            <li>
              <Link to="/add-city">Add City</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/add-city" element={<AddCity onAddCity={handleAddCity} />} />
          <Route path="/cities/:cityId" element={<CityDetails cities={cities} />} />
          <Route path="/" element={<CitiesList cities={cities} />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2023 Cities App. All rights reserved. Created by: Wella Coleman.</p>
      </footer>
    </Router>
  );
}

export default App;
