import { Link } from 'react-router-dom';

import styles from './Card.module.css';

const InsightCard = ({ insight }) => {

    if (!insight) return null;

    return (
        <div
            className={`${styles.card_container}`}
        >
            <div
                className={`${styles.card_insight_container}`}
            >
                <Link 
                    to={`/city/${insight.city_id}`}
                    className={styles.title_link}  
                >
                    <h2>{ insight.city_name }</h2>
                </Link>
                <p><i className='fa fa-globe-europe'></i> { insight.city_state }</p>
                <p>Insight: <br />{ insight.insight }</p>
            </div>
        </div>
    )
};

export default InsightCard;