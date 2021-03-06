import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import { updateCity, removeCity } from '../../store/city';

import styles from './CityEdit.module.css';

const CityEdit = ({ city, setShowEdit, isOwner }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState(city.name ? city.name : '');
    const [state, setState] = useState(city.state ? city.state : '');
    const [description, setDescription] = useState(city.description ? city.description : '');
    const [thumbnailImg, setThumbnailImg] = useState(city.thumbnail_img ? city.thumbnail_img : '');

    const TEXTAREA_ROWS = 4;

    const handleEdit = async (e) => {
        e.preventDefault();

        let thumbnail_img;
        if (thumbnailImg.length === 0) {
            thumbnail_img = 'https://yourcity-app.s3.us-west-1.amazonaws.com/city-photos/city_skyline.jpeg';
        } else {
            thumbnail_img = thumbnailImg;
        }

        const payload = {
            id: city.id,
            name,
            state,
            description,
            thumbnail_img,
            user_id: city.user_id,
        }

        const cityData = await dispatch(updateCity(payload));
        if ('errors' in cityData) {
            setErrors(cityData.errors);
        } else {
            setShowEdit(false);
        }
    };

    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(removeCity(city.id));
        history.push(`/profile/${city.user_id}`);
    };

    return (
        <div className={styles.edit_container}>
            <div className={styles.header_outer_container}>
                <div className='header_edit_container'>
                    <h2>Edit {city.name}</h2>
                    {isOwner &&
                        <i 
                            className={`fas fa-minus-circle delete_item`}
                            onClick={handleDelete}
                        ></i>
                    }
                </div>
                <div className={styles.errors}>
                    <p className={styles.header_description_edit_city}>Change information about your city...</p>
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
                <div
                    className={styles.edit_city__buttons}
                >
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

export default CityEdit;