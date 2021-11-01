import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import authOperations from '../../redux/auth/auth-operations';

import styles from './RegisterView.module.css';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div className={styles.Register}>
        <h1>Registration</h1>
        <form onSubmit={this.handleSubmit} autoComplete="off" className={styles.form}>
          <label className={styles.label}>
            Name
            <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
          <label className={styles.label}>
            Email
            <input type="email" name="email" value={email} onChange={this.handleChange} />
          </label>
          <label className={styles.label}>
            Password
            <input type="password" name="password" value={password} onChange={this.handleChange} />
          </label>
          <button type="submit" className={styles.button}>
            Register
          </button>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onSubmit: authOperations.register,
};

export default connect(null, mapDispatchToProps)(Register);
