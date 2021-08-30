import styles from './Insight.module.css';

const InsightView = ({ insight, isOwner, setShow }) => {
    
    //TODO make user slice to obtain user for each insight

    return (
        <>
            <div className={`${styles.headers_container} header_edit_container`}>
                <h2>Insight</h2>
                {isOwner &&
                    <i
                        onClick={() => setShow(true)}
                        className='fas fa-edit edit_item'
                    >
                    </i>
                }
            </div>
            <div className={styles.text_container}>
                <h4>Owner id: { insight.user_id }</h4>
                <p>{ insight.insight }</p>
            </div>
        </>
    )
};

export default InsightView;