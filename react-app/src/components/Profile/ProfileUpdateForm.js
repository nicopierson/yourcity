import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateProfile } from '../../store/profile';

import styles from '../City/CityEdit.module.css';

const ProfileUpdateForm = ({ profile, setShowModal, setShowVerification }) => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState(profile?.username ? profile.username : '');
    const [location, setLocation] = useState(profile?.location ? profile.location : '');
    const [bio, setBio] = useState(profile?.bio ? profile.bio : '');
    const [profileImg, setProfileImg] = useState(profile?.profile_img ? profile.profile_img : '');
    const [site, setSite] = useState(profile?.site ? profile.site : '');

    const TEXTAREA_ROWS = 4;

    const handleCreate = async (e) => {
        e.preventDefault();

        let profile_img;
        if (profileImg.length === 0) {
            profile_img = 'https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/user_default.png';
        } else {
            profile_img = profileImg;
        }

        const payload = {
            id: profile.id,
            username,
            location,
            bio,
            profile_img,
            site,
        }

        const profileData = await dispatch(updateProfile(payload));

        if ('errors' in profileData) {
            setErrors(profileData.errors);
        } else {
            setShowModal(false);
        }
    };

    return (
        <div className='city_container'>
            <div className={`${styles.header_container}`}>
                <h2>Update Profile</h2>
                <div className={styles.errors}>
                    {errors.length > 0 && errors.map((error, ind) => (
                        <p key={ind}>{error.field}: {error.message}</p>
                    ))}
                    {errors.length === 0 &&
                        <p className={styles.header_description}>Fill out the information about your profile...</p>
                    }
                </div>
            </div>
            <div className={styles.edit_input_container}>
                <input
                    className='edit_field'
                    type='text'
                    name='username'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder='Username'
                    autoFocus={true}
                >
                </input>
                <input
                    className='edit_field'
                    type='text'
                    name='location'
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                    placeholder='Location'
                >
                </input>
                <input
                    className='edit_field'
                    type='text'
                    name='profile img'
                    onChange={(e) => setProfileImg(e.target.value)}
                    value={profileImg}
                    placeholder='profile image url'
                >
                </input>
                <input
                    className='edit_field'
                    type='text'
                    name='site'
                    onChange={(e) => setSite(e.target.value)}
                    value={site}
                    placeholder='site url'
                >
                </input>
                <textarea
                    className='edit_field'
                    type='text'
                    name='bio'
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}
                    rows={TEXTAREA_ROWS}
                    placeholder='Add a bio...'
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

export default ProfileUpdateForm;