import styles from './CityBanner.module.css';

const CityBanner = ({ city }) => {
    return (
        <div className={styles.banner_container}>
            <img alt='city thumbnail' src={city.thumbnail_img} />
        </div>
    )
};

export default CityBanner;