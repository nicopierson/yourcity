import { useState } from 'react';

import InsightView from './InsightView';
import InsightForm from './InsightForm';

const Insight = ({ insight, userId }) => {
    const [showEdit, setShowEdit] = useState(false);

    /* isOwner Boolean to check if insight is owned by current user */
    const isOwner = userId === insight.user_id;

    if (!insight) return null;

    return (
        <>
            {!showEdit &&  
                <InsightView 
                    isOwner={isOwner}
                    insight={insight}
                    setShow={setShowEdit}
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
        </>
    )
};

export default Insight;