
import SplashHeader from './SplashHeader';
import SplashBody from './SplashBody';

import './SplashLayout.css';

const Splash = () => {
    return (
        <div
            className='layout__splash_container'
        >
            <section
                className='layout__splash_header'
            >
                <SplashHeader />
            </section>
            <section
                className='layout__splash_body'
            >
                <SplashBody />
            </section>
            <section
                className='layout__splash_footer'
            >
                <h2>Splash Lower</h2>
            </section>
        </div>
    )
};

export default Splash;