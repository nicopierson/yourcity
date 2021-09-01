import styles from './Splash.module.css';

const SplashHeader = () => {
    return (
        <div
            className={styles.header_outer_container}
        >
            <div
                className={styles.header_inner_container}
            >
                <h2>Find Your City</h2>
                <p>Our app matches you to your lost city.</p>
                <p>Whether you are looking to travel or to move, YourCity will help you along the way.</p>
                <h4>Learn More</h4>
            </div>
        </div>
    )
};

export default SplashHeader;