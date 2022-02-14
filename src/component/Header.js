import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FaCommentDollar } from 'react-icons/fa';

class Header extends Component {
  render() {
    const { user, walletData } = this.props;
    const expenseAmount = walletData.reduce((cotacao, expense) => cotacao
      + (expense.exchangeRates[expense.currency].ask * expense.value), 0);

    return (
      <header className="component-header">
        <div className="title">
          <h1> Trybe wallet </h1>
          <FaCommentDollar className="svg-header" />
        </div>

        <h2 className="email" data-testid="email-field">
          {`Olá, ${user}`}
        </h2>
        <div className="total-field">
          <h3 data-testid="total-field">
            {` Dispesa Total : ${expenseAmount.toFixed(2)}`}
          </h3>

          <h3 data-testid="header-currency-field">BRL</h3>
        </div>
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
