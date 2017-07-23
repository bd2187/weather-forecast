import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props.searchLocation)
    this.props.searchLocation(this.state.value);
    this.setState({value: ''});
    // invoke apiSearch here
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search Location"
          value={this.state.value}
          onChange={this.handleChange}/>
        <button>Search</button>
      </form>
    )
  }

}

Nav.propTypes = {
  searchLocation: PropTypes.func.isRequired
}

export default Nav;
