import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

// import BannedUser from '../banned-user';

import './style.css';

class Search extends Component {
  state = {
    searchTerm: ''
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.getBannedUserByName(this.state.searchTerm);
  };
  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };
  render() {
    return (
      <div className="search">
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            placeholder="search by name"
            type="text"
            className="search-bar"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

// {this.props.bannedUserByName.length >= 0
//   ? this.props.bannedUserByName.map(user => (
//       <BannedUser key={user._id} bannedUser={user} />
//     ))
//   : null}

const mapStateToProps = state => ({
  bannedUserByName: state.bannedUserByName
});

export default connect(
  mapStateToProps,
  actions
)(Search);