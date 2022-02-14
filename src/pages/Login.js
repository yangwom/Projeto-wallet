/* eslint-disable indent */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FaCommentDollar } from 'react-icons/fa';
import { login } from '../actions';
import './App.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,

    };
    this.handleChange = this.handleChange.bind(this);
    this.ativarButton = this.ativarButton.bind(this);
    this.click = this.click.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, this.ativarButton);
  }

  ativarButton() {
    const MIN_CHAR = 6;
    const { email, password } = this.state;

    const VALIDATE_BUTTON = email.includes('@')
    && email.includes('.com')
    && password.length >= (MIN_CHAR);

    if (VALIDATE_BUTTON) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  click() {
    const { actionLogin, history } = this.props;
    const { email } = this.state;
    actionLogin(email);
    history.push('/carteira');
  }

  render() {
    const { email, disabled, password } = this.state;
    return (
      <form className="form">
        <div className="title-login">
          <div style={ { display: 'flex' } }>
            <h1 style={ { fontSize: '50px' } }> Trybe wallet  </h1>
            <FaCommentDollar style={ { fontSize: '30px' } } />
          </div>
          <h1 style={ { fontSize: '54px', marginRight: '10px', marginTop: '100px' } }>
            Faça seu login
            <br />
            na carteira
          </h1>
        </div>
        <div className="login-inputs">
          <div className="login-content">
            <FaCommentDollar className="svg" />
            <input
              className="input-name"
              name="email"
              data-testid="email-input"
              onChange={ this.handleChange }
              type="email"
              placeholder="Email"
              value={ email }
            />

            <input
              className="input-name"
              name="password"
              data-testid="password-input"
              type="password"
              value={ password }
              placeholder="Senha "
              onChange={ this.handleChange }
            />
            <button
              className="bnt"
              disabled={ disabled }
              type="button"
              onClick={ this.click }
            >
              Entrar

            </button>
          </div>
        </div>
      </form>);
  }
}
Login.propTypes = {
  actionLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  actionLogin: (email) => dispatch(login(email)),
});

export default connect(null, mapDispatchToProps)(Login);
