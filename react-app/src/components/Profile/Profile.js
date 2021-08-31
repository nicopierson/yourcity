import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import ProfileCard from './ProfileCard';
import ProfileFeed from './ProfileFeed';
import { getUser, resetUsers } from '../../store/user';

import './ProfileLayout.css';

const Profile = () => {
    const { profileId } = useParams();
    const dispatch = useDispatch();

    /* isOwner Boolean to check if profile is owned by current user */
    const user = useSelector(state => state.session.user);
    const profile = useSelector(state => state.user[profileId])
    const isOwner = +profileId === user.id;

    useEffect(() => {
        if (profileId) {
            dispatch(resetUsers());
            dispatch(getUser(profileId));
        }
    }, [dispatch, profileId]);

    return (
        <div className='layout__profile_container'>
            <section
                className='layout__profile_card_container'
            >
                <ProfileCard 
                    profile={profile}
                    isOwner={isOwner}
                />
            </section>
            <section
                className='layout__profile_feed_container'
            >
                <ProfileFeed 
                    isOwner={isOwner}
                    profileId={profileId}
                />
            </section>
        </div>
    )
};

export default Profile;