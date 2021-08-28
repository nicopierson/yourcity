import { useState } from 'react';

import InsightView from './InsightView';
import InsightEdit from './InsightEdit';

const Insight = ({ insight, userId }) => {
    const [showEdit, setShowEdit] = useState(false);

    /* isOwner Boolean to check if insight is owned by current user */
    const isOwner = userId === insight.user_id;

    if (!insight) return null;

    return (
        <div>
            {!showEdit &&  
                <InsightView 
                    isOwner={isOwner}
                    insight={insight}
                    setShowEdit={setShowEdit}
                />
            }
            {showEdit &&
                <InsightEdit
                    isOwner={isOwner}
                    insight={insight}
                    setShowEdit={setShowEdit}
                />
            }
        </div>
    )
};

export default Insight;