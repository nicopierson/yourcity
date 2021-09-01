import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import LogoutButton from '../auth/LogoutButton';
import CityCreate from '../City/CityCreate';
import { login } from '../../store/session';

import './NavBar.css';
import logo from '../../assets/images/yourcity-white-red-logo.png';

const NavBar = () => {

    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const demoLogin = async () => {
        await dispatch(login('nicopierson@gmail.com', 'password'));
    };

    return (
        <nav className="navbar-container layout__header_container">
            <ul className="navbar-ul">
                <div className="navbar-li navbar-title-and-feed">
                    <NavLink to='/' exact={true}
                        className="navbar-title navbar-btn-container"
                    >
                        <img alt='logo' src={logo} />
                    </NavLink>
                </div>
                <div className="navbar-li navbar-search">
                    <div className="navbar-search__input-wrapper">
                        <input
                        className="navbar-search-input"
                        key="search-bar"
                        placeholder="Search City"
                        />

                        <i className="fas fa-search navbar-icon-search--icon navbar-icon-search"></i>

                    </div>
                </div>
                <div className="navbar-li navbar-create-and-auth">
                    {/* <li>
                        <NavLink to='/profile' exact={true} 
                            activeClassName='active'
                            className="navbar-btn"
                        >
                            My Cities
                        </NavLink>
                    </li> */}
                    {!user &&
                        <>
                            <li>
                                <p
                                    className="navbar-btn navbar-btn-signed-out"
                                    onClick={demoLogin}
                                >
                                    Demo Login
                                </p>
                            </li>
                            <li>
                                <NavLink to='/login' exact={true} 
                                    activeClassName='active'
                                    className="navbar-btn navbar-btn-signed-out"
                                >
                                    Login
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/sign-up' exact={true} 
                                    activeClassName='active'
                                    className="navbar-btn navbar-btn-signed-out"
                                >
                                    
                                    Sign Up
                                </NavLink>
                            </li>
                        </>
                    }
                    {user &&
                        <>
                            <li
                                className="button-fix navbar-li"
                            >
                                <CityCreate 
                                    userId={user.id}
                                />
                            </li>
                            <li className="profile-avatar">
                                <NavLink  to={`/profile/${user.id}`} 
                                    exact={true}
                                    style={{ textDecoration: 'none' }}
                                >
                                    My Profile
                                    <i className="fa fa-user"></i>
                                </NavLink>
                            </li>
                            <li>
                                <LogoutButton />
                            </li>
                        </>
                    }
                </div>
            </ul>
        </nav>
    );
}

export default NavBar;