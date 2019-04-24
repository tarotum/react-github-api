import React, { Component } from 'react';
import User from '../components/User';
import { connect } from 'react-redux';
import usersAction from '../actions/actionUsers';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }
  componentWillMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }
  render() {
    const { users } = this.props;
    const handleQuery = ({ target: { value } }) => {
      this.setState({
        query: value
      });
    };
    const handleSubmit = e => {
      e.preventDefault();
      console.log(`GET_USERS BY ${this.state.query}`);
      this.setState({
        query: ''
      });
    };
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="search" value={this.state.query} onChange={handleQuery} placeholder="town" />

          <button>Search</button>
        </form>
        {users.map(item => (
          <User key={item.id} login={item.login} />
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({ users: state.users }),
  usersAction
)(Users);
