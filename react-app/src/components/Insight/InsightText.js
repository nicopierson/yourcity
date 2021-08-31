import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './Insight.module.css';

const InsightText = ({ insight, username }) => {
    const [showMore, setShowMore] = useState(false);
    const [isOverflow, setIsOverflow] = useState(true);

    
    useEffect(() => {
        const scrollHeight = document.getElementById(`insight__text_id-${insight.id}`)?.scrollHeight;
        const offsetHeight = document.getElementById(`insight__text_id-${insight.id}`)?.offsetHeight;

        if (scrollHeight && offsetHeight) {
            if (scrollHeight > offsetHeight) {
                setShowMore(false);
            } else {
                setShowMore(true);
                setIsOverflow(false);
            }
        }
    }, [insight.id]);

    return (
        <>
            {!showMore &&
            <>
                <p
                    id={`insight__text_id-${insight.id}`}
                    className={`${styles.text_show_min}`}
                >
                    <span>
                        <Link 
                            className={styles.username_link}
                            to={`/profile/${insight.user_id}`}
                        >
                            { username }
                        </Link></span>  { insight.insight }
                </p>
                    <p className={styles.text_dots}>...</p>
                    <span 
                        className={styles.text_view_more}
                        onClick={() => setShowMore(true)}
                    >
                        Read more
                    </span>
                </>
            }
            {showMore &&
                <>
                    <p
                        id={`insight__text_id-${insight.id}`}
                        className={`${styles.text_show_all}`}
                    >
                        <span>
                            <Link 
                                className={styles.username_link}
                                to={`/profile/${insight.user_id}`}
                            >
                                { username }
                            </Link></span>  { insight.insight }
                    </p>
                    {isOverflow &&
                        <span 
                            className={styles.text_view_more}
                            onClick={() => setShowMore(false)}
                        >
                            Show less
                        </span>
                    }
                    
                </>
            }
        </>
    )
};

export default InsightText;