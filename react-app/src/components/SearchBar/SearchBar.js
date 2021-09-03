import { useState } from 'react';

import { Modal } from '../../context/Modal';
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
    <div>
        {showModal &&
            <Modal
                onClose={handleClose}
                >
                <SearchBarDropdown
                    setShowModal={setShowModal} 
                />
            </Modal>
        }
        <input
            className="navbar-search-input"
            key="search-bar"
            placeholder="Search City"
        />
        <i
            className={`fas fa-search nav_bar_right_link ${styles.search_icon}`}
            onClick={handleOpen}
        >
        </i>
    </div>
  );
};

export default SearchBar;