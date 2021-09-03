import ProfileUpdate from './ProfileUpdate';

import styles from './Profile.module.css';

const ProfileCard = ({ profile, isOwner}) => {

    if (!profile) return null;

    return (
        <div
            className={styles.profile_container}
        >
            {isOwner &&
                <ProfileUpdate 
                    profile={profile}
                />
            }
            <div
                className={styles.headers_container}
            >
                <img 
                    alt='profile' 
                    src={ profile.profile_img }
                />
                <h2>{ profile.username }</h2>
                <div
                    className={styles.profile_info}
                >
                    <p>
                        <i className='fas fa-envelope'></i>
                        { profile.email }
                    </p>
                    <p>
                        <i className='fas fa-globe-europe'></i>
                        { profile.location }
                    </p>
                </div>
            </div>
            <div
                className={styles.description_container}
            >
                <p>{ profile.bio }
                </p>
            </div>
            <div
                className={styles.attributes}
            >
                <div>
                    <span>Insights:</span>
                    <span>{ profile.insights_count }</span>
                </div>
            </div>
            <div
                className={styles.social_media}
            >   
                <i className='fas fa-globe'></i>
                <span>{ profile.site }</span>
            </div>
            <div
                className={styles.footer}
            >
                <p
                
                >
                    MEMBER SINCE: {profile.created_at.slice(0, -13)}
                </p>
            </div>

        </div>
    )
};

export default ProfileCard;