import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InsightView from './InsightView';
import InsightForm from './InsightForm';
import { getUser } from '../../store/user';

import styles from './Insight.module.css';

const Insight = ({ insight, userId }) => {
    const dispatch = useDispatch();
    const [showEdit, setShowEdit] = useState(false);

    /* isOwner Boolean to check if insight is owned by current user */
    const isOwner = userId === insight.user_id;
    const username = useSelector(state => state.user[insight.user_id]?.username)

    useEffect(() => {
        if (insight) {
            dispatch(getUser(insight.user_id));
        }
    }, [dispatch, insight]);

    if (!insight) return null;

    return (
        <div className={styles.insight_container}>
            {!showEdit &&  
                <InsightView 
                    isOwner={isOwner}
                    insight={insight}
                    setShow={setShowEdit}
                    username={username}
                />
            }
            {showEdit &&
                <InsightForm
                    isOwner={isOwner}
                    insight={insight}
                    setShow={setShowEdit}
                    isCreate={false}
                />
            }
        </div>
    )
};

export default Insight;