import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
    valorTotal = () => {
      const { walletData } = this.props;
      let total = 0;
      walletData.forEach((expense) => {
        total += Number(expense.exchangeRates[expense.currency].ask)
      * Number(expense.value);
      });
      return total;
    }

    render() {
      const { user } = this.props;
      return (
        <header>
          <h1> Trybe wallet </h1>
          <h2 data-testid="email-field">
            {`Olá, ${user}`}
          </h2>
          <h3 data-testid="total-field">{this.valorTotal().toFixed(2)}</h3>
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
