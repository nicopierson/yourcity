import { Link } from 'react-router-dom';

import styles from './Card.module.css';

const InsightCard = ({ insight }) => {

    if (!insight) return null;

    return (
        <Link 
            to={`/city/${insight.city_id}`}
            className={styles.title_link}  
        >
            <div
                className={`${styles.card_insight_outer_container}`}
            >
                <div
                    className={`${styles.card_insight_container}`}
                >
                        <h2>{ insight.city_name }</h2>
                    <p><i className='fa fa-globe-europe'></i> { insight.city_state }</p>
                    <div
                        className={styles.description}
                    >
                        { insight.insight }
                    </div>
                </div>
            </div>
        </Link>
    )
};

export default InsightCard;