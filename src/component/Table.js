import React, { Component } from 'react';

class Table extends Component {
  render() {
    const TABELA = ['Descrição', 'Tag', 'Moeda', 'Método de pagamento',
      'Valor', 'Câmbio utilizado',
      'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    return (
      <table>
        <thead>
          <tr>
            {
              TABELA.map((description, index) => <th key={ index }>{description}</th>)
            }
          </tr>
        </thead>
      </table>);
  }
}

export default Table;
