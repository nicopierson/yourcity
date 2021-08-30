import { Link } from 'react-router-dom';

import styles from './Insight.module.css';
import './InsightLayout.css';

const InsightView = ({ insight, isOwner, setShow, username }) => {
    
    return (
        <div className='layout__one_insight_container'>
            <div 
                className={`${styles.headers_container} header_edit_container layout__one_insight_header`}
            >
                <img 
                    alt='profile' 
                    src='https://yourcity-app.s3.us-west-1.amazonaws.com/profile-photos/pudds_profile.jpg' 
                />
            </div>
            <div className={`${styles.text_container} layout__one_insight_text`}>
                <p className={styles.text_show_all}>
                    <span>
                        <Link 
                            className={styles.username_link}
                            to={`/profile/${insight.user_id}`}
                        >
                            { username }
                        </Link></span>  { insight.insight }
                </p>
                <p className={styles.text_show_min}>
                    <span>
                        <Link 
                            className={styles.username_link}
                            to={`/profile/${insight.user_id}`}
                        >
                            { username }
                        </Link></span>  { insight.insight }
                </p>
            </div>
            {isOwner &&
                <div
                    className='layout__one_insight_edit'
                >
                    <i
                        onClick={() => setShow(true)}
                        className='fas fa-edit edit_item'
                    >
                    </i>
                </div>
            }
        </div>
    )
};

export default InsightView;