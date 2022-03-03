import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { HiOutlineTrash } from 'react-icons/hi';
import { removeExpense } from '../actions';

class Table extends Component {
removeToList = (id) => {
  const { descriptionExpenses: listExpenses, deleteDispatch } = this.props;
  const NEW_ARRAY_EXPENSES = listExpenses.filter((newExpenses) => newExpenses.id
  !== id);
  console.log(NEW_ARRAY_EXPENSES);
  deleteDispatch(NEW_ARRAY_EXPENSES);
}

render() {
  const TABELA = ['Descrição', 'Tag', 'Moeda', 'Método de pagamento',
    'Valor', 'Câmbio utilizado',
    'Valor convertido', 'Moeda de conversão', 'Excluir'];
  const { descriptionExpenses } = this.props;
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
        { descriptionExpenses.map((expenses) => (
          <tr className="expenses" key={ expenses.id } id={ expenses.id }>
            <td>{expenses.description}</td>
            <td>{expenses.tag}</td>
            <td>{expenses.currency}</td>
            <td>{expenses.method}</td>
            <td>{Number(expenses.value).toFixed(2)}</td>
            <td>{(expenses.exchangeRates[expenses.currency].name.split('/')[0])}</td>
            <td>{Number(expenses.exchangeRates[expenses.currency].ask).toFixed(2)}</td>
            <td>
              {Number(expenses.exchangeRates[expenses.currency].ask
                  * expenses.value).toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <button
                style={ { backgroundColor: 'red', color: 'white', border: 'none' } }
                type="button"
                data-testid="delete-btn"
                onClick={ () => this.removeToList(expenses.id) }
              >
                <HiOutlineTrash />
              </button>

            </td>
          </tr>
        )) }
      </tbody>
    </table>);
}
}

const mapStateToProps = (state) => {
  const { wallet: { expenses } } = state;
  return {
    descriptionExpenses: expenses,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteDispatch: (delet) => dispatch(removeExpense(delet)),
});

Table.propTypes = {
  descriptionExpenses: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  deleteDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);