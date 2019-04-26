import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserForm from '../components/UserForm';
import Users from '../components/Users';
import actionUsers from '../actions/actionUsers';

class UsersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'Odessa',
    };
    this.locationHandler = this.locationHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    const { receiveUsers, requestUsers } = this.props;
    const { location } = this.state;
    requestUsers();
    receiveUsers(location.toLocaleLowerCase());
  }

  locationHandler({ currentTarget }) {
    this.setState({
      location: currentTarget.value,
    });
  }

  submitHandler(event) {
    event.preventDefault();
    const { receiveUsers, requestUsers, failedRequest } = this.props;
    const { location } = this.state;

    if (location === '') {
      failedRequest('Query string must contain location');
    } else {
      requestUsers();
      receiveUsers(location.toLocaleLowerCase());
      this.setState({
        location: '',
      });
    }
  }

  render() {
    const { users, isLoading, error } = this.props;
    const { location } = this.state;

    return (
      <Fragment>
        <UserForm
          fromValue={location}
          inputHandler={this.locationHandler}
          submitHandler={this.submitHandler}
        />
        <Users users={users} isLoading={isLoading} error={error} />
      </Fragment>
    );
  }
}

UsersContainer.propTypes = {
  requestUsers: PropTypes.func.isRequired,
  receiveUsers: PropTypes.func.isRequired,
  failedRequest: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(PropTypes.any).isRequired,
  error: PropTypes.string.isRequired,
};

export default connect(
  state => ({
    users: state.users.items,
    isLoading: state.users.isLoading,
    error: state.users.error,
  }),
  actionUsers,
)(UsersContainer);
