import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Users from '../components/Users';
import actionUsers from '../actions/actionUsers';

class UsersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  render() {
    const { users } = this.props;
    const { query } = this.state;
    const handleQuery = ({ target: { value } }) => {
      this.setState({
        query: value,
      });
    };
    const handleSubmit = e => {
      e.preventDefault();
      console.log(`GET_USERS BY ${query}`);
      this.setState({
        query: '',
      });
    };
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="search" value={query} onChange={handleQuery} placeholder="town" />
          <button type="button">Search</button>
        </form>

        <Users users={users} />
      </div>
    );
  }
}

UsersContainer.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  state => ({ users: state.users }),
  actionUsers,
)(UsersContainer);
