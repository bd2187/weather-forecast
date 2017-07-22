import React, { Component } from 'react';

class SearchBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({value: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault()
  }
  render() {
    return (
      <form className="searchBar" onSubmit={this.handleSubmit}>
        <input
          className="searchInput"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search Location"/>
        <button
          className="searchButton"
          disabled={!this.state.value}>
          Search
        </button>
      </form>
    )
  }
}

export default SearchBarContainer;
