import React, { Component } from 'react';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  render() {
    return (
      <form>
        <input type="text" value={this.state.value}/>
      </form>
    )
  }

}

export default Nav;
