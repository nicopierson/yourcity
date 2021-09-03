import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { search } from '../../store/search';

import styles from './SearchBar.module.css';

const SearchBarDropdown = ({ setShowModal }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState('');
    const [results, setResults] = useState([]);

    const searchOnChange = async () => {
        console.log(searchString);
        const searchResults = await dispatch(search(searchString));
        console.log(searchResults);
        setResults(searchResults.results);
    };

    useEffect(() => {
        if (searchString.length !== 0) {
            searchOnChange();
        }
    }, [searchString]);

    const handleLink = async (e, url) => {
        e.preventDefault();

        setShowModal(false);
        history.push(url);
    };

//   const handleSearch = async () => {
//     const searchWines = await dispatch(showSearchWines(search));
//     setWines(searchWines);
//   };

    return (
        <div
        className={styles.search_container}
        >
            {/* <i className='fas fa-search'></i> */}
            <input
                // className="navbar-search-input"
                value={searchString}
                type='text'
                placeholder='Search City'
                name='search'
                id='search'
                onChange={(e) => setSearchString(e.target.value)}
                autoComplete='off'
                autoFocus
            />
            <label htmlFor='search'></label>
            <ul>
                { results.length > 0 && results.map(result => (
                    <li
                        onClick={(e) => handleLink(e, `/city/${result.id}`)}
                        key={result.id}
                        className={styles.search_link}
                    >
                        {result.name}
                    </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default SearchBarDropdown;