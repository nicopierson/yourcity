import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { resetCities, getCitiesByUser } from '../../../store/city';
import CityCard from '../../Card/CityCard';

import styles from '../../Card/Card.module.css';

const MyCities = ({ profileId }) => {
    const dispatch = useDispatch();

    const cities = useSelector(state => state.city);

    useEffect(() => {
        if (profileId) {
            dispatch(resetCities())
            dispatch(getCitiesByUser(profileId));
        }
    }, [dispatch, profileId]);

    return (
        <section
            className={styles.section_feed__page}
        >
            {cities &&
                Object.values(cities).map((city) => 
                    <CityCard
                        city={city}
                        key={city.id}
                    />
                )
            }
        </section>
    );
};

export default MyCities;