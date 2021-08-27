import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAllCities } from '../../store/city';

function CitiesList() {
  const dispatch = useDispatch();
  const cities = useSelector(state => state.city);

  useEffect(() => {
    dispatch(getAllCities());
  }, [dispatch]);

  if (!cities) return null;

  const cityComponents = Object.values(cities).map((city) => {
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
