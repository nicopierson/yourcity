import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getCity } from '../../store/city';
import CityEdit from './CityEdit';
import CityView from './CityView';
import CityBanner from './CityBanner';

const City = () => {
    const { cityId } = useParams();
    const dispatch = useDispatch();
    
    const [showEdit, setShowEdit] = useState(false);

    const city = useSelector(state => state.city[cityId]);

    useEffect(() => {
        if (cityId) {
            dispatch(getCity(cityId))
        }
    }, [dispatch]);

    if (!city) return null;

    return (
        <div>
            <CityBanner city={city} />
            {!showEdit &&
                <CityView 
                    city={city}
                    setShowEdit={setShowEdit}
                />
            }
            {showEdit &&
                <CityEdit
                    city={city}
                    setShowEdit={setShowEdit}
                />
            }
        </div>
    )
};

export default City;