import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getCity } from '../../store/city';
import CityEdit from './CityEdit';
import CityView from './CityView';
import CityBanner from './CityBanner';

import './City.css';
import InsightPage from '../Insight';

const City = () => {
    const { cityId } = useParams();
    const dispatch = useDispatch();
    
    /* isOwner Boolean to check if 4city is owned by current user */
    const userId = useSelector(state => state.session.user?.id);
    const cityOwnerId = useSelector(state => state.city[cityId]?.user_id);
    const isOwner = userId === cityOwnerId; 

    const [showEdit, setShowEdit] = useState(false);

    const city = useSelector(state => state.city[cityId]);

    useEffect(() => {
        if (cityId) {
            dispatch(getCity(cityId))
        }
    }, [dispatch, cityId]);

    if (!city) return null;

    return (
        <>
            <div className='layout__main_container'>
                <CityBanner city={city} />
                {!showEdit &&
                    <CityView 
                        city={city}
                        setShowEdit={setShowEdit}
                        isOwner={isOwner}
                    />
                }
                {showEdit &&
                    <CityEdit
                        city={city}
                        setShowEdit={setShowEdit}
                        isOwner={isOwner}
                    />
                }
            </div>
            <div className='layout__insights_container'>
                <InsightPage
                    cityId={cityId}
                    userId={userId}
                />
            </div>
        </>
    )
};

export default City;