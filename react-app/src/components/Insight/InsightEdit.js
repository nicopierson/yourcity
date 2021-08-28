import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateInsight, removeInsight } from '../../store/insight';

import styles from '../City/CityEdit.module.css'

const InsightEdit = ({ insight, isOwner, setShowEdit }) => {
    const dispatch = useDispatch();
    const [insightText, setInsightText] = useState(insight.insight ? insight.insight : '');
    
    const TEXTAREA_ROWS = 6;
    console.log(insight.city_id, insight.user_id);

    const handleEdit = async (e) => {
        e.preventDefault();

        const payload = {
            id: insight.id,
            insight: insightText,
            user_id: insight.user_id,
            city_id: insight.city_id,
        };

        const data = await dispatch(updateInsight(payload));
        // console.log(data);
        // returns the errors or the insight
        setShowEdit(false);
    };

    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(removeInsight(insight.id));
    };

    return (
        <div>
            <div className='header_edit_container'>
                <h2>Edit Insight</h2>
                {isOwner &&
                    <i
                        onClick={handleDelete}
                        className={`fas fa-minus-circle delete_item`}
                    ></i>
                }
            </div>
            <div className={styles.edit_input_container}>
                <textarea
                    className='edit_field'
                    value={insightText}
                    name='insight'
                    type='text'
                    onChange={(e) => setInsightText(e.target.value)}
                    rows={TEXTAREA_ROWS}
                    autoFocus={true}
                    placeholder='Provide insight about the city...'
                >
                </textarea>
                    <div>
                        <button
                            onClick={handleEdit}
                            className='save_button'
                        >
                            <i className='fas fa-check-circle'></i>
                            <span>Save</span>
                        </button>
                        <button
                            className='cancel_button'
                            onClick={() => setShowEdit(false)}
                        >
                            Cancel
                        </button>
                    </div>
            </div>
        </div>
    )
};

export default InsightEdit;