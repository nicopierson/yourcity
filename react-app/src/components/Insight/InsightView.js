import { useEffect } from 'react';

const InsightView = ({ insight, isOwner, setShow }) => {

 
    //TODO make user slice to obtain user for each insight

    return (
        <div>
            <div className='header_edit_container'>
                <h2>Insight</h2>
                {isOwner &&
                    <i
                        onClick={() => setShow(true)}
                        className='fas fa-edit edit_item'
                    >
                    </i>
                }
            </div>
            <div>
                <h4>Owner id: { insight.user_id }</h4>
                <p>{ insight.insight }</p>
            </div>
        </div>
    )
};

export default InsightView;