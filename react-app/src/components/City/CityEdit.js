import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import { updateCity, removeCity } from '../../store/city';

import styles from './CityEdit.module.css';

const CityEdit = ({ city, setShowEdit, isOwner }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState(city.name ? city.name : '');
    const [state, setState] = useState(city.state ? city.state : '');
    const [description, setDescription] = useState(city.description ? city.description : '');
    const [thumbnailImg, setThumbnailImg] = useState(city.thumbnail_img ? city.thumbnail_img : '');

    const TEXTAREA_ROWS = 4;

    const handleEdit = (e) => {
        e.preventDefault();

        const payload = {
            id: city.id,
            name,
            state,
            description,
            thumbnail_img: thumbnailImg,
            user_id: city.user_id,
        }

        dispatch(updateCity(payload));
        setShowEdit(false);
    };

    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(removeCity(city.id));
        history.push('/profile');
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