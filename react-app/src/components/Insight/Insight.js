import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getInsightsByCity, resetInsights } from '../../store/insight';
import InsightView from './InsightView';

const Insight = ({ cityId, isOwner }) => {
    const dispatch = useDispatch();

    const insights = useSelector(state => state.insight);
    console.log(insights);

    useEffect(() => {
        dispatch(resetInsights());
        dispatch(getInsightsByCity(cityId));
    }, [dispatch]);
    // const [showView, setShowView] = useState(false);

    return (
        <div>
            <InsightView 
                isOwner={isOwner}
                insights={insights}
            />
        </div>
    )
};

export default Insight;