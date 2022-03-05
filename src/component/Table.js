import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HiOutlineTrash } from 'react-icons/hi';
import { removeExpense } from '../actions';

function Table() {
  const dispatch = useDispatch();
  const allExpenses = useSelector(({ wallet: { expenses } }) => expenses);

  const removeToList = (id) => {
    const NEW_ARRAY_EXPENSES = allExpenses.filter((newExpenses) => newExpenses.id
  !== id);
    dispatch(removeExpense(NEW_ARRAY_EXPENSES));
  };

  const TABELA = ['Descrição', 'Tag', 'Moeda', 'Método de pagamento',
    'Valor', 'Câmbio utilizado',
    'Valor convertido', 'Moeda de conversão', 'Excluir'];

  console.log(allExpenses);
  return (
    <table>
      <thead>
        <tr className="table-descripition">
          {
            TABELA.map((description, index) => (

              <th key={ index }>{description}</th>

            ))
          }
        </tr>
      </thead>
      <tbody>
        { allExpenses.map((expense) => (
          <tr className="expenses" key={ expense.id } id={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.currency}</td>
            <td>{expense.method}</td>
            <td>{Number(expense.value).toFixed(2)}</td>
            <td>{(expense.exchangeRates[expense.currency].name.split('/')[0])}</td>
            <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
            <td>
              {`${Number(expense.exchangeRates[expense.currency].ask
                  * expense.value).toFixed(2)} Real`}
            </td>
            <td>
              <button
                style={ { backgroundColor: 'red', color: 'white', border: 'none' } }
                type="button"
                data-testid="delete-btn"
                onClick={ () => removeToList(expense.id) }
              >
                <HiOutlineTrash />
              </button>

            </td>
          </tr>
        )) }
      </tbody>
    </table>);
}

export default Table;
