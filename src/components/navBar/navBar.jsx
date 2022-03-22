import React, { memo, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './navBar.module.css';

const NavBar = memo( props => {
  const inputRef = useRef();

  const handleSearch = useCallback((evt) => {
    evt.preventDefault();
    props.handleSearch(inputRef.current.value);
  });

  return (
    <form>
      <Link to={'/'}>
        <span className={styles.logo}>YouTube</span>
      </Link>
      <input ref={inputRef} />
      <button onClick={handleSearch}></button>
    </form>
  );
});

export default NavBar;
