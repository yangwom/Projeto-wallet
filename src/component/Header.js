import React from 'react';
import { useSelector } from 'react-redux';
import { FaCommentDollar } from 'react-icons/fa';

function Header() {
  const user = useSelector(({ user: { email } }) => email);

  const walletData = useSelector(({ wallet: { expenses } }) => expenses);

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

export default Header;
