import React, { Component } from 'react';
import styles from './navBar.module.css'

class NavBar extends Component {
  inputRef = React.createRef();

  handleSearch = (evt) => {
    evt.preventDefault();
    this.props.handleSearch(this.inputRef.current.value);
  }

  render() {
    return (
      <form>
        <span className={styles.logo}>YouTube</span>
        <input ref={this.inputRef} />
        <button onClick={this.handleSearch}></button>
      </form>
    );
  }
}

export default NavBar;
