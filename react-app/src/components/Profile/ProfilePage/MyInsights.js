import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InsightCard from '../../Card/InsightCard';
import { resetInsights, getInsightsByUser } from '../../../store/insight';

import styles from '../../Card/Card.module.css';

const MyInsights = ({ profileId }) => {
    const dispatch = useDispatch();

    const insights = useSelector((state) => state.insight);

    useEffect(() => {
        if (profileId) {
            dispatch(resetInsights());
            dispatch(getInsightsByUser(profileId));
        }
    }, [dispatch, profileId]);

    if (!insights) return null;

    return (
        <section
            className={styles.section_insight__page}
        >
            {insights &&
                Object.values(insights).map((insight) => 
                    <InsightCard
                        insight={insight}
                        key={insight.id}
                    />
                )
            }
        </section>
    );
};

export default MyInsights;