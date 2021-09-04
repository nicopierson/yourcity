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

    

    useEffect(() => {
        async function searchOnChange() {
            const searchResults = await dispatch(search(searchString));
            if ('results' in searchResults) {
                setResults(searchResults.results.slice(0,10));
            } else {
                setResults([]);
            }
        }

        if (searchString.length !== 0) {
            searchOnChange();
        } else {
            setResults([]);
        }
    }, [dispatch, searchString]);

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
                    className={styles.navbar_search_input}
                    value={searchString}
                    type='text'
                    placeholder='Search City'
                    name='search'
                    id='search'
                    onChange={(e) => setSearchString(e.target.value)}
                    autoComplete='off'
                    autoFocus
                />
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