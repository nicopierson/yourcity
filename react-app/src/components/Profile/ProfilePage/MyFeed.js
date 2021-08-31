import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { resetCities, getAllCities } from '../../../store/city';
import CityCard from '../../Card/CityCard';

import styles from '../../Card/Card.module.css';

const MyFeed = () => {
    const dispatch = useDispatch();

    const cities = useSelector(state => state.city);
    const userId = useSelector(state => state.session.user?.id);

    useEffect(() => {
        if (userId) {
            dispatch(resetCities())
            dispatch(getAllCities());
        }
    }, [dispatch, userId]);

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

export default MyFeed;