import { useHistory } from 'react-router-dom';

import styles from './Splash.module.css';
import cityImage from '../../assets/images/undraw_city.svg';
import countryImage from '../../assets/images/undraw_Country_side_k69.svg';
import worldImage from '../../assets/images/undraw_world.svg';

const SplashBody = () => {
    const history = useHistory();

    return (
        <div
            className={styles.splash_body_container}
        >
            <div
                className={styles.splash_body_header}
            >
                <h2>Find Your Match</h2>
                <h3>It's never too late.</h3>
                <p>Learn and search for cities that suit your personality</p>
            </div>
            <div
                className={styles.header_links}
            >
                <span
                    onClick={() => history.push('/sign-up')}
                >
                    Learn More
                    <i className='far fa-arrow-alt-circle-right'></i>
                </span>
                <span
                    onClick={() => history.push('/sign-up')}
                >
                    Match
                    <i className='far fa-arrow-alt-circle-right'></i>
                </span>
            </div>
            <div
                className={styles.header_images}
            >
                <div className={styles.city_image}>
                    <img src={cityImage} alt='city' />
                    <p>Look up the most popular urban cities</p>
                </div>
                <div className={styles.world_image}>
                    <img src={worldImage} alt='world' />
                    <p>Favorite your locations</p>
                </div>
                <div className={styles.country_image}>
                    <img src={countryImage} alt='country' />
                    <p>Consider your wellness goals</p>
                </div>
            </div>
        </div>
    );
};

export default SplashBody;