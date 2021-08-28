import { useState } from 'react';

import InsightForm from './InsightForm';

const InsightCreate = ({ userId, cityId }) => {
    const [showCreate, setShowCreate] = useState(false);

    return (
        <>
            {!showCreate &&
                <div className=''>
                    <button
                        className='save_button'
                        onClick={() => setShowCreate(true)}
                    >
                        Add Insight
                    </button>
                </div>
            }
            {showCreate &&
                <InsightForm
                    isCreate={true}
                    userId={userId}
                    cityId={cityId}
                    setShow={setShowCreate}
                />
            }
        </>
    );
};

export default InsightCreate;