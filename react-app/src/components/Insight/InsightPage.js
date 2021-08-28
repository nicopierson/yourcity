import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getInsightsByCity, resetInsights } from '../../store/insight';
import Insight from './Insight';

const InsightPage = ({ cityId, userId }) => {
    const dispatch = useDispatch();

    const insights = useSelector(state => Object.values(state.insight));

    useEffect(() => {
        if (cityId) {
            dispatch(resetInsights());
            dispatch(getInsightsByCity(cityId));
        }
    }, [dispatch]);


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
        </div>
    )
};

export default InsightPage;