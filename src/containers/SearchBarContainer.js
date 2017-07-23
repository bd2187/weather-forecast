import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestWeather } from '../actions/';

class SearchBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({value: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.requestWeather(this.state.value);
    this.setState({value: ''});
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({requestWeather}, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBarContainer);
