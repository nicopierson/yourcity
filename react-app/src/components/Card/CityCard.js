import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const CityCard = ({ city }) => {
    if (!city) return null;

    return (
        <Link 
            to={`/city/${city.id}`}
            className={styles.title_link}  
        >
            <div
                className={styles.card_container}
            >
                
                <img
                    src={city.thumbnail_img}
                    alt='title'
                />
                
                    <h2>{city.name}</h2>
                
                <p><i className='fas fa-globe-europe'></i> {city.state}</p>
                <p>
                    <i className='fas fa-award'></i> food, music
                </p>
            </div>
        </Link>
    )
};

export default CityCard;