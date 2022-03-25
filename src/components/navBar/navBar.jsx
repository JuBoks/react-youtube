import React, { memo, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './navBar.module.css';

const NavBar = memo(({handleSearch, onClickLogo}) => {
  const inputRef = useRef();

  const onKeyUp = (evt) => {
    if (evt.key === 'Enter') {
      handleSearch(inputRef.current.value);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        {/* <Link to={'/'}> */}
            <span className={styles.logo} onClick={() => {onClickLogo()}}>YouTube</span>
        {/* </Link> */}
      </div>
      <input ref={inputRef} type="search" onKeyUp={onKeyUp} placeholder="Search..."/>
      <button onClick={() => handleSearch(inputRef.current.value)}></button>
    </header>
  );
});

export default NavBar;
