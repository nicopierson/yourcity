import SplashHeader from './SplashHeader';
import SplashBody from './SplashBody';
import SplashCities from './SplashCities';
import SplashInsights from './SplashInsights';

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
                className='layout__splash_cities'
            >
                <SplashCities />
            </section>
            <section
                className='layout__splash_insights'
            >
                <SplashInsights />
            </section>
        </div>
    )
};

export default Splash;