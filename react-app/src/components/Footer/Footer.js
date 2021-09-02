
import styles from './Footer.module.css';

const Footer = () => {
  return (
      <div className={`${styles.footer_container} layout__footer_container`}>
        <p
          className={styles.copyright}
        >
          Copyright @ 2021 YourCity Inc. All rights reserved.
        </p>
        <p
          className={styles.privacy}
        >
          Privacy Policy
        </p>
        <a href='https://github.com/nicopierson'>
          <i className='fab fa-github'></i>
        </a>
        <a href='https://www.linkedin.com/in/nico-pierson/'>
          <i className='fab fa-linkedin'></i>
        </a>
        <a href='https://angel.co/u/nico-gerard-pierson'>
          <i className='fab fa-angellist'></i>
        </a>
        <p
          className={styles.terms}
        >
          Terms of Use
        </p>
        <p
          className={styles.country}
        >
          United States
        </p>
      </div>
  );
};

export default Footer;