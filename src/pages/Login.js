import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions';

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
      <section>
        <input
          name="email"
          data-testid="email-input"
          onChange={ this.handleChange }
          type="email"
          placeholder="email"
          value={ email }
        />

        <input
          name="password"
          data-testid="password-input"
          type="password"
          value={ password }
          placeholder="senha "
          onChange={ this.handleChange }
        />
        <button
          disabled={ disabled }
          type="button"
          onClick={ this.click }
        >
          Entrar

        </button>
      </section>);
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
