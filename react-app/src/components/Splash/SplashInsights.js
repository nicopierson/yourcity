import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Splash.module.css';

const SplashInsights = () => {
    const history = useHistory();
    const user = useSelector(state => state.session.user);

     const handleLearnMore = (e) => {
        e.preventDefault();
        if (user) {
            history.push(`/profile/${user.id}`)
        } else {
            history.push('/sign-up')
        }
    };

    return (
        <div
            className={styles.insights_outer_container}
        >
            <div
                className={styles.insights_inner_container}
            >
                <div
                    className={styles.header_text}
                >
                    <h3>Insights</h3>
                    <p>Explore Insights from the Community.</p>
                    <h4
                        onClick={handleLearnMore}
                    >
                        Join Us
                        <i className='far fa-arrow-alt-circle-right'></i>
                    </h4>
                </div>
            </div>
        </div>
    )
};

export default SplashInsights;