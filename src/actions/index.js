// Coloque aqui suas actions
export const TYPE_LOGIN = 'TYPE_LOGIN';
export const TYPE_WALLET_CORRENCIES = 'TYPE_WALLET_CORRENCIES';
export const TYPE_WALLET_EXPENSES = 'TTYPE_WALLET_EXPENSES';

export const login = (email) => ({ type: TYPE_LOGIN, payload: email });

export const walletCurrencies = (currencies) => ({
  type: TYPE_WALLET_CORRENCIES,
  payload: currencies,
});

export const walletExpenses = (expenses) => ({
  type: TYPE_WALLET_EXPENSES,
  payload: expenses,
});
