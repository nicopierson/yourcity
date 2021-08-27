import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function CitiesList() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/cities/');
      const responseData = await response.json();
      setCities(responseData.cities);
    }
    fetchData();
  }, []);

  const cityComponents = cities.map((city) => {
    return (
      <li key={city.id}>
        <NavLink to={`/city/${city.id}`}>{city.name}</NavLink>
      </li>
    );
  });

  return (
    <>
      <h1>City List: </h1>
      <ul>{cityComponents}</ul>
    </>
  );
}

export default CitiesList;
