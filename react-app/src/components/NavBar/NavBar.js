// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import CityCreate from '../City/CityCreate';
import { login } from '../../store/session';

import './NavBar.css';

const NavBar = () => {

    //TODO: add validators
    // const [errors, setErrors] = useState([]);
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const demoLogin = async () => {
        await dispatch(login('nicopierson@gmail.com', 'password'));
        // if (data) {
        //     setErrors(data);
        // }
    }

    return (
        <nav className="navbar-container layout__header_container">
            <ul className="navbar-ul">
                <div className="navbar-li navbar-title-and-feed">
                    <li>
                        <NavLink to='/' exact={true}
                            className="navbar-title navbar-btn-container"
                        >
                            YourCity
                        </NavLink>
                    </li>
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
                    <li>
                        <NavLink to='/profile' exact={true} 
                            activeClassName='active'
                            className="navbar-btn"
                        >
                            My Cities
                        </NavLink>
                    </li>
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
                                    className=""
                                >
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