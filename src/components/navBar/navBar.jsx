import React, { memo, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './navBar.module.css';

const NavBar = memo(({handleSearch}) => {
  const inputRef = useRef();

  const onClick = useCallback((evt) => {
    handleSearch(inputRef.current.value);
  });

  const onKeyUp = useCallback((evt) => {
    if (evt.key === 'Enter') {
      handleSearch(inputRef.current.value);
    }
  });

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to={'/'}>
            <span className={styles.logo}>YouTube</span>
        </Link>
      </div>
      <input ref={inputRef} type="search" onKeyUp={onKeyUp} placeholder="Search..."/>
      <button onClick={onClick}></button>
    </header>
  );
});

export default NavBar;