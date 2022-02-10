import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <header>
        <h1> Trybe wallet </h1>
        <h2 data-testid="email-field">
          { `Olá, ${user}` }
        </h2>
        <h3 data-testid="total-field">0</h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </header>);
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  const { user: { email } } = state;
  return {
    user: email,
  };
};

Wallet.propTypes = {
  user: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
