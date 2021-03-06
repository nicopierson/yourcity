import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createCity } from '../../store/city';

import styles from './CityEdit.module.css';

const CityCreateForm = ({ userId, setShowModal, setShowVerification }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState('');
    const [state, setState] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnailImg, setThumbnailImg] = useState('');

    const TEXTAREA_ROWS = 4;

    const handleCreate = async (e) => {
        e.preventDefault();

        let thumbnail_img;
        if (thumbnailImg.length === 0) {
            thumbnail_img = 'https://yourcity-app.s3.us-west-1.amazonaws.com/city-photos/city_skyline.jpeg';
        } else {
            thumbnail_img = thumbnailImg;
        }

        const payload = {
            name,
            state,
            description,
            thumbnail_img,
            user_id: userId,
        }

        const city = await dispatch(createCity(payload));
        if ('errors' in city) {
            setErrors(city.errors);
        } else {
            history.push(`/city/${city.id}`);
            setShowModal(false);
        }
    };

    return (
        <div className='city_container'>
            <div className={`${styles.header_container}`}>
                <h2>Create City</h2>
                <div className={styles.errors}>
                    <p className={styles.header_description}>Fill out the information about your city...</p>
                </div>
            </div>
            <div className={styles.edit_input_container}>
                <input
                    className={`edit_field ${errors.length > 0 && Object.keys(errors[0]).includes('name') ? 'errors_input' : ''}`}
                    type='text'
                    name='name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder='Name'
                    autoFocus={true}
                >
                </input>
                <p className='modal_errors_message'>
                    {errors.length > 0 &&
                        <>
                            {errors[0].name}
                        </>
                    }
                </p>
                <input
                    className={`edit_field ${errors.length > 0 && Object.keys(errors[0]).includes('state') ? 'errors_input' : ''}`}
                    type='text'
                    name='state'
                    onChange={(e) => setState(e.target.value)}
                    value={state}
                    placeholder='State or province'
                >
                </input>
                <p className='modal_errors_message'>
                    {errors.length > 0 &&
                        <>
                            {errors[0].state}
                        </>
                    }
                </p>
                <input
                    className={`edit_field ${errors.length > 0 && Object.keys(errors[0]).includes('thumbnail_img') ? 'errors_input' : ''}`}
                    type='text'
                    name='thumbnail img'
                    onChange={(e) => setThumbnailImg(e.target.value)}
                    value={thumbnailImg}
                    placeholder='banner image url'
                >
                </input>
                <p className='modal_errors_message'>
                    {errors.length > 0 &&
                        <>
                            {errors[0].thumbnail_img}
                        </>
                    }
                </p>
                <textarea
                    className={`edit_field ${errors.length > 0 && Object.keys(errors[0]).includes('description') ? 'errors_input' : ''}`}
                    type='text'
                    name='description'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    rows={TEXTAREA_ROWS}
                    placeholder='Add a description...'
                >
                </textarea>
                <p className='modal_errors_message'>
                    {errors.length > 0 &&
                        <>
                            {errors[0].description}
                        </>
                    }
                </p>
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