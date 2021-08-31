import { NavLink, BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';

import MyCities from './ProfilePage/MyCities';
import MyFeed from './ProfilePage/MyFeed';
import MyInsights from './ProfilePage/MyInsights';
import MyLikes from './ProfilePage/MyLikes';
import MyMatches from './ProfilePage/MyMatches';

import styles from './ProfileFeed.module.css';

const ProfileFeed = ({ profileId, isOwner }) => {
    const location = useLocation();

    console.log(location);
    return (
        <div
            className={styles.feed_container}
        >
            <div
                className={styles.feed_tab_container}
            >
                <NavLink 
                    exact
                    to={`/profile/${profileId}/cities`}
                    activeClassName={styles.active}
                    style={{ textDecoration: 'none' }}
                    isActive={(match, location) => {
                      if(location.pathname === `/profile/${profileId}/`
                      || match?.isExact) {
                          return true;
                      }
                      return false;
                    }}
                >
                    <p>My Cities</p>
                </NavLink>
                <NavLink 
                    to={`/profile/${profileId}/insights`}
                    activeClassName={styles.active}
                    style={{ textDecoration: 'none' }}
                >
                    <p>My Insights</p>
                </NavLink>
                <NavLink 
                    to={`/profile/${profileId}/likes`}
                    activeClassName={styles.active}
                    style={{ textDecoration: 'none' }}
                >
                    <p>Likes</p>
                </NavLink>
                <NavLink 
                    to={`/profile/${profileId}/matches`}
                    activeClassName={styles.active}
                    style={{ textDecoration: 'none' }}
                >
                    <p>Matches</p>
                </NavLink>
                <NavLink 
                    to={`/profile/${profileId}/feed`}
                    activeClassName={styles.active}
                    style={{ textDecoration: 'none' }}
                >
                    <p>Feed</p>
                </NavLink>
            </div>
            <div>
                <Switch>
                    <Route exact path={[`/profile/${profileId}/cities`, `/profile/${profileId}/`]}>
                        <MyCities />
                    </Route>
                    <Route exact path={`/profile/${profileId}/insights`}>
                        <MyInsights />
                    </Route>
                    <Route exact path={`/profile/${profileId}/likes`}>
                        <MyLikes />
                    </Route>
                    <Route exact path={`/profile/${profileId}/matches`}>
                        <MyMatches />
                    </Route>
                    <Route exact path={`/profile/${profileId}/feed`}>
                        <MyFeed />
                    </Route>
                </Switch>
            </div>
        </div>
    )
};

export default ProfileFeed;