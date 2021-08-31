import InsightText from './InsightText';

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
                <InsightText
                    insight={insight}
                    username={username}
                />
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