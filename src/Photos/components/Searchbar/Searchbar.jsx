import React from 'react';
import styles from './Searchbar.module.css'
import SearchForm from '../SearchForm ';

const Searchbar = ({onSubmit}) => {
    return (
      <header className={styles.Searchbar}>
        <SearchForm onSubmit={onSubmit}/>
      </header>
    )
};

export default Searchbar;
