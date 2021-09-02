import styles from './Profile.module.css';

const ProfileCard = ({ profile, isOwner}) => {

    if (!profile) return null;

    return (
        <div
            className={styles.profile_container}
        >
            <div
                className={styles.headers_container}
            >
                <img 
                    alt='profile' 
                    src='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/pudds_profile.jpg' 
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
                        Los Angeles, CA
                    </p>
                </div>
            </div>
            <div
                className={styles.description_container}
            >
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                </p>
            </div>
            <div
                className={styles.attributes}
            >
                <div>
                    <span>Likes:</span>
                    <span>10</span>
                </div>
                <div>
                    <span>Insights:</span>
                    <span>20</span>
                </div>
            </div>
            <div
                className={styles.social_media}
            >   
                <i className='fab fa-facebook'></i>
                <i className='fab fa-instagram'></i>
                <i className='fab fa-whatsapp'></i>
                <i className='fab fa-linkedin'></i>
                <i className='fab fa-behance-square'></i>
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