import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createCity } from '../../store/city';

import styles from './CityEdit.module.css';

const CityCreateForm = ({ userId, setShowModal, setShowVerification }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState('');
    const [state, setState] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnailImg, setThumbnailImg] = useState('');

    const TEXTAREA_ROWS = 4;

    const handleCreate = async (e) => {
        e.preventDefault();

        const payload = {
            name,
            state,
            description,
            thumbnail_img: thumbnailImg,
            user_id: userId,
        }

        const city = await dispatch(createCity(payload));
        history.push(`/city/${city.id}`)
        setShowModal(false);
    };

    return (
        <div className='city_container'>
            <div className='header_edit_container'>
                <h2>Create City</h2>
            </div>
            <div className={styles.edit_input_container}>
                <input
                    className='edit_field'
                    type='text'
                    name='name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder='Name'
                    autoFocus={true}
                >
                </input>
                <input
                    className='edit_field'
                    type='text'
                    name='state'
                    onChange={(e) => setState(e.target.value)}
                    value={state}
                    placeholder='State or province'
                >
                </input>
                <input
                    className='edit_field'
                    type='text'
                    name='thumbnail img'
                    onChange={(e) => setThumbnailImg(e.target.value)}
                    value={thumbnailImg}
                    placeholder='banner image url'
                >
                </input>
                <textarea
                    className='edit_field'
                    type='text'
                    name='description'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    rows={TEXTAREA_ROWS}
                    placeholder='Add a description...'
                >
                </textarea>
                <div>
                    <button
                        onClick={handleCreate}
                        className='save_button'
                    >
                        <i className='fas fa-check-circle'></i>
                        <span>Save</span>
                    </button>
                    <button
                        className='cancel_button'
                        onClick={() => setShowVerification(true)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
};

export default CityCreateForm;