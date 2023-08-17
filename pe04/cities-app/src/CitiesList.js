import React from 'react';
import { Link } from 'react-router-dom';

function CitiesList({ cities }) {
  return (
    <div>
      {/* <h1>Cities Details</h1> */}
      <ul>
        {cities.map(city => (
          <li key={city.id}>
            <Link to={`/cities/${city.id}`} className="city-details-link">
              {city.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CitiesList;
