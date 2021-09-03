import { useState } from 'react';

import { ModalSearchBar } from '../../context/Modal';
import SearchBarDropdown from './SearchBarDropdown';

import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <div className={styles.search_outer_container}>
        {showModal &&
            <ModalSearchBar
                onClose={handleClose}
                >
                <SearchBarDropdown
                    setShowModal={setShowModal} 
                />
            </ModalSearchBar>
        }
        {!showModal &&
          <>
            <input
                className={styles.navbar_search_input}
                key="search-bar"
                placeholder="Search City"
                onFocus={handleOpen}
            />
            <i
                className={`fas fa-search ${styles.search_icon}`}
                onClick={handleOpen}
            >
            </i>
          </>
        }
    </div>
  );
};

export default SearchBar;