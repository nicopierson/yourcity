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
        const searchResults = await dispatch(search(searchString));
        // grab only 10 results
        setResults(searchResults.results.slice(0,10));
    };

    useEffect(() => {
        if (searchString.length !== 0) {
            searchOnChange();
        } else {
            setResults([])
        }
    }, [searchString]);

    const handleLink = async (e, url) => {
        e.preventDefault();

        setShowModal(false);
        history.push(url);
    };

    return (
        <>
            <div
                className={styles.search_container}
            >
                <input
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
                <i
                    className={`fas fa-search ${styles.search_icon}`}
                >
                </i>
            </div>
            <div
                className={styles.search_results_container}
            >
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
        </>
    );
};

export default SearchBarDropdown;