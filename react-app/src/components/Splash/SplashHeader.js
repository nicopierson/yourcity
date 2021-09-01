import { useHistory } from 'react-router-dom';

import styles from './Splash.module.css';

const SplashHeader = () => {
    const history = useHistory();

    return (
        <div
            className={styles.header_outer_container}
        >
            <div
                className={styles.header_inner_container}
            >
                <div
                    className={styles.header_text}
                >
                    <h2>Find Your City</h2>
                    <p>We match you to your lost city.</p>
                    <p>Whether you are looking to travel or to move,</p>
                    <p>YourCity will help you along the way.</p>
                    <h4
                        onClick={() => history.push('/sign-up')}
                    >
                        Learn More
                        <i className='far fa-arrow-alt-circle-right'></i>
                    </h4>
                </div>
            </div>
        </div>
    )
};

export default SplashHeader;