import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateInsight, removeInsight, createInsight } from '../../store/insight';

import styles from '../City/CityEdit.module.css';

const InsightForm = ({ insight, isOwner, setShow, isCreate, cityId, userId }) => {
    const dispatch = useDispatch();
    const [insightText, setInsightText] = useState(insight?.insight ? insight.insight : '');
    const title = isCreate ? 'Add Insight' : 'Edit Insight';
    const city_id = insight?.city_id ? insight.city_id : cityId;
    const user_id = insight?.user_id ? insight.user_id : userId;

    const TEXTAREA_ROWS = 6;

    const handleEdit = async (e) => {
        e.preventDefault();

        const payload = {
            id: insight.id,
            insight: insightText,
            user_id,
            city_id,
        };

        await dispatch(updateInsight(payload));
        // const data = await dispatch(updateInsight(payload));
        // console.log(data);
        // returns the errors or the insight
        setShow(false);
    };

    const handleCreate = async (e) => {
        e.preventDefault();

        const payload = {
            insight: insightText,
            user_id,
            city_id,
        };

        await dispatch(createInsight(payload));
        // const data = await dispatch(createInsight(payload));
        // console.log(data);
        // returns the errors or the insight
        setShow(false);
    };

    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(removeInsight(insight.id));
    };

    return (
        <div className='layout__insight_create_form'>
            <div className={`header_edit_container`}>
                <h2>{ title }</h2>
                {isOwner && !isCreate &&
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
            </div>
            <div className={styles.submit_buttons}>
                {isCreate &&
                    <button
                        onClick={handleCreate}
                        className='save_button'
                    >
                        <i className='fas fa-check-circle'></i>
                        <span>Save</span>
                    </button>
                }
                {!isCreate &&
                    <button
                        onClick={handleEdit}
                        className='save_button'
                    >
                        <i className='fas fa-check-circle'></i>
                        <span>Save</span>
                    </button>
                }
                <button
                    className='cancel_button'
                    onClick={() => setShow(false)}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
};

export default InsightForm;