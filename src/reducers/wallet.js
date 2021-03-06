// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  TYPE_DELETE_EXPENSE, TYPE_ERROR,
  TYPE_WALLET_CORRENCIES, TYPE_WALLET_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: ['USD', 'CAD', 'EUR', 'GBP',
    'ARS', 'BTC', 'LTC', 'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH', 'XRP'],
  expenses: [],
  vixiDeuRuim: '',
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case TYPE_WALLET_CORRENCIES:
    return {
      ...state, currencies: payload,
    };
  case TYPE_WALLET_EXPENSES:
    return {
      ...state, expenses: [...state.expenses, payload],
    };

  case TYPE_DELETE_EXPENSE:
    return {
      ...state, expenses: payload,
    };

  case TYPE_ERROR:
    return {
      ...state, vixiDeuRuim: 'Deu ruim na api',
    };
  default:
    return state;
  }
};

export default wallet;
