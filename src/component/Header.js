import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { user, walletData } = this.props;
    const expenseAmount = walletData.reduce((cotacao, expense) => cotacao
      + (expense.exchangeRates[expense.currency].ask * expense.value), 0);
    return (
      <header>
        <h1> Trybe wallet </h1>
        <h2 data-testid="email-field">
          {`Olá, ${user}`}
        </h2>
        <h3 data-testid="total-field">{expenseAmount.toFixed(2)}</h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  const { user: { email } } = state;
  const { wallet: { expenses } } = state;
  return {
    user: email,
    walletData: expenses,

  };
};

Header.propTypes = {
  user: PropTypes.string.isRequired,
  walletData: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

export default connect(mapStateToProps)(Header);
