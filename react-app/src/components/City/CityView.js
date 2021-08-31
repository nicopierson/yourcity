import styles from './City.module.css';

const CityView = ({ city, setShowEdit, isOwner, username }) => {

    return (
        <>
            <div className={`${styles.header_container} header_edit_container`}>
                <h2>{ city.name }</h2>
                {isOwner &&
                    <i 
                        onClick={() => setShowEdit(true)}
                        className='fas fa-edit edit_item'
                    ></i>
                }
            </div>
            <div className={styles.text_container}>
                <p
                    className={styles.subheader_container}
                >
                    <span>
                        <i className='fas fa-map-marked-alt'></i>
                        { city.state }
                    </span>
                    <span>
                        <i className='fas fa-user'></i>
                        { username }
                    </span>
                </p>
                <p>{ city.description }</p>
            </div>
        </>
    );
};

export default CityView;