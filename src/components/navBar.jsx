import React, { Component } from 'react';

class NavBar extends Component {
  inputRef = React.createRef();

  handleSearch = (evt) => {
    evt.preventDefault();
    this.props.handleSearch(this.inputRef.current.value);
  }

  render() {
    return (
      <form>
        <span>LOGO</span>
        <input ref={this.inputRef} />
        <button onClick={this.handleSearch}>Search</button>
      </form>
    );
  }
}

export default NavBar;
