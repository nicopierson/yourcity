import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getCity } from '../../store/city';
import { getProfile } from '../../store/profile';
import CityEdit from './CityEdit';
import CityView from './CityView';
import CityBanner from './CityBanner';
import InsightPage from '../Insight';

import styles from './City.module.css';
import './CityLayout.css';

const City = () => {
    const { cityId } = useParams();
    const dispatch = useDispatch();
    
    /* isOwner Boolean to check if 4city is owned by current user */
    const userId = useSelector(state => state.session.user?.id);
    const cityOwnerId = useSelector(state => state.city[cityId]?.user_id);
    const isOwner = userId === cityOwnerId; 
    /* Get username for city */
    const username = useSelector(state => state.profile[cityOwnerId]?.username);

    const [showEdit, setShowEdit] = useState(false);

    const city = useSelector(state => state.city[cityId]);

    useEffect(() => {
        if (cityId) {
            dispatch(getCity(cityId));
        }
        if (cityId && cityOwnerId) {
            dispatch(getProfile(cityOwnerId));
        }
    }, [dispatch, cityId, cityOwnerId]);

    if (!city) return null;

    return (
        <div className='layout__city_container'>
            <section className='layout__city_info_container'>
                <CityBanner city={city} />
                {!showEdit &&
                    <div className={styles.main_city_text}>
                        <CityView 
                            city={city}
                            setShowEdit={setShowEdit}
                            isOwner={isOwner}
                            username={username}
                        />
                    </div>
                }
                {showEdit &&
                    <div className={styles.main_city_text}>
                        <CityEdit
                            city={city}
                            setShowEdit={setShowEdit}
                            isOwner={isOwner}
                            className={styles.main_city_text}
                        />
                    </div>
                }
            </section>
            <section className={`layout__insights_container ${styles.insights_text}`}>
                <InsightPage
                    cityId={cityId}
                    userId={userId}
                />
            </section>
        </div>
    )
};

export default City;