import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const TABELA = ['Descrição', 'Tag', 'Moeda', 'Método de pagamento',
      'Valor', 'Câmbio utilizado',
      'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    const { descriptionExpenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {
              TABELA.map((description, index) => <th key={ index }>{description}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {console.log(descriptionExpenses)}
          { descriptionExpenses.map((expenses) => (
            <tr key={ expenses.id } id={ expenses.id }>
              <td>{expenses.description}</td>
              <td>{expenses.tag}</td>
              <td>{expenses.currency}</td>
              <td>{expenses.method}</td>
              <td>{Number(expenses.value).toFixed(2)}</td>
              <td>{expenses.exchangeRates[expenses.currency].name.split('/')[0]}</td>
              <td>{Number(expenses.exchangeRates[expenses.currency].ask).toFixed(2)}</td>
              <td>
                {Number(expenses.exchangeRates[expenses.currency].ask
                  * expenses.value).toFixed(2)}

              </td>
              <td>Real</td>
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

Table.propTypes = {
  descriptionExpenses: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect(mapStateToProps)(Table);
