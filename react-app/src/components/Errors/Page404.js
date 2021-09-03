import styles from './Page404.module.css';

const Page404 = () => {
    return (
        <div
            className={styles.page_container}
        >
            <div
                className={styles.page_content}
            >
                <h2>You Found A Lost City</h2>
                <h3>404</h3>
            </div>
        </div>
    )
};

export default Page404;