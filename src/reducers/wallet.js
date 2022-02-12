// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { TYPE_WALLET_CORRENCIES, TYPE_WALLET_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: ['USD', 'CAD', 'EUR', 'GBP',
    'ARS', 'BTC', 'LTC', 'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH', 'XRP'],
  expenses: [],
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
  default:
    return state;
  }
};

export default wallet;
