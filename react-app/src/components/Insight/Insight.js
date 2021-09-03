import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InsightView from './InsightView';
import InsightForm from './InsightForm';
import { getProfile } from '../../store/profile';

import styles from './Insight.module.css';

const Insight = ({ insight, userId }) => {
    const dispatch = useDispatch();
    const [showEdit, setShowEdit] = useState(false);

    /* isOwner Boolean to check if insight is owned by current user */
    const isOwner = userId === insight.user_id;
    const profile = useSelector(state => state.profile[insight.user_id]);

    useEffect(() => {
        if (insight) {
            dispatch(getProfile(insight.user_id));
        }
    }, [dispatch, insight]);

    if (!insight) return null;
    if (!profile) return null;

    return (
        <div className={styles.insight_container}>
            {!showEdit &&  
                <InsightView 
                    isOwner={isOwner}
                    insight={insight}
                    setShow={setShowEdit}
                    username={profile.username}
                    profileImg={profile.profile_img}
                />
            }
            {showEdit &&
                <InsightForm
                    isOwner={isOwner}
                    insight={insight}
                    setShow={setShowEdit}
                    isCreate={false}
                    desc={'Edit'}
                />
            }
        </div>
    )
};

export default Insight;