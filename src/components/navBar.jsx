import React, { Component } from 'react';
import styles from './navBar.module.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  inputRef = React.createRef();

  handleSearch = (evt) => {
    evt.preventDefault();
    this.props.handleSearch(this.inputRef.current.value);
  }

  render() {
    return (
      <form>
        <Link to={'/'}>
          <span className={styles.logo}>YouTube</span>
        </Link>
        <input ref={this.inputRef} />
        <button onClick={this.handleSearch}></button>
      </form>
    );
  }
}

export default NavBar;
