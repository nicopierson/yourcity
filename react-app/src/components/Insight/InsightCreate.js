import { useState } from 'react';

import InsightForm from './InsightForm';

const InsightCreate = ({ userId, cityId }) => {
    const [showCreate, setShowCreate] = useState(false);

    return (
        <div className='layout__insight_create'>
            {!showCreate &&
                <>
                    <button
                        className='save_button'
                        onClick={() => setShowCreate(true)}
                    >
                        Add Insight
                    </button>
                </>
            }
            {showCreate &&
                <InsightForm
                    isCreate={true}
                    userId={userId}
                    cityId={cityId}
                    setShow={setShowCreate}
                />
            }
        </div>
    );
};

export default InsightCreate;