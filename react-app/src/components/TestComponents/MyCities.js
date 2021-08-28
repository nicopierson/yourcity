import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getCitiesByUser, resetCities } from '../../store/city';

function MyCities() {
    const dispatch = useDispatch();
    const cities = useSelector(state => state.city);
    const userId = useSelector(state => state.session.user?.id);

    useEffect(() => {
        if (userId) {
            dispatch(resetCities())
            dispatch(getCitiesByUser(userId));
        }
    }, [dispatch, userId]);

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
            <h1>My Cities:</h1>
            <ul>{cityComponents}</ul>
        </>
    );
}

export default MyCities;