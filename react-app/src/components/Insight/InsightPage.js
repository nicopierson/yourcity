import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Insight from './Insight';
import InsightCreate from './InsightCreate';
import { getInsightsByCity, resetInsights } from '../../store/insight';

const InsightPage = ({ cityId, userId }) => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);
    const insights = useSelector(state => Object.values(state.insight));

    useEffect(() => {
        if (cityId) {
            dispatch(resetInsights());
            dispatch(getInsightsByCity(cityId));
        }
    }, [dispatch, cityId]);


    return (
        <div>
            {insights.length > 0 && 
                insights.map((insight) =>             
                    <Insight 
                        userId={userId}
                        insight={insight}
                        key={insight.id}
                    />
                )
            }
            {user &&
                <InsightCreate 
                    userId={userId}
                    cityId={cityId}
                />
            }
        </div>
    )
};

export default InsightPage;