// Coloque aqui suas actions
import fetchApi from '../services';

export const TYPE_LOGIN = 'TYPE_LOGIN';
export const TYPE_WALLET_CORRENCIES = 'TYPE_WALLET_CORRENCIES';
export const TYPE_WALLET_EXPENSES = 'TTYPE_WALLET_EXPENSES';
export const TYPE_ERROR = 'ERROR';

export const login = (email) => ({ type: TYPE_LOGIN, payload: email });

const deuRuim = () => ({ type: TYPE_ERROR });

export const walletCurrencies = (currencies) => ({
  type: TYPE_WALLET_CORRENCIES,
  payload: currencies,
});

const walletExpenses = (expenses) => ({
  type: TYPE_WALLET_EXPENSES,
  payload: expenses,
});

export const fetchCota = (expenses) => async (dispatch) => {
  try {
    const data = await fetchApi();
    return dispatch(walletExpenses({
      ...expenses, exchangeRates: data,
    }));
  } catch (error) {
    dispatch(deuRuim());
  }
};
