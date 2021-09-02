import CityCreate from '../../components/City/CityCreate';

import styles from './Splash.module.css';
import './SplashLinks.css';

const SplashCities = () => {

    return (
        <div
            className={styles.cities_outer_container}
        >
            <div
                className={styles.cities_overlay_container}
            >
                <div
                className={styles.cities_inner_container}
                >
                    <div
                        className={styles.header_text}
                    >
                        <h3>Cities</h3>
                        <p>Add Hidden Cities with description and photo.</p>
                        <div
                            className={`splash_link__city_create`}
                        >
                            <CityCreate />
                            <i className='far fa-arrow-alt-circle-right'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SplashCities;