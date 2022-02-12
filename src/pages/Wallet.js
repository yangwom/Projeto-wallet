import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCota } from '../actions';
import Header from '../component/Header';
import fetchApi from '../services';
import Table from '../component/Table';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.click = this.click.bind(this);
  }

  componentDidMount() {
    fetchApi();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  click(event) {
    event.preventDefault();
    const { informationExpenses } = this.props;
    const information = this.state;
    informationExpenses(information);
    this.setState((state) => ({
      id: state.id + 1,
      value: 0,
      description: '',
    }));
  }

  render() {
    const { moedas } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    return (
      <>
        <Header />
        <main>
          <label htmlFor="value">
            valor:
            <input
              name="value"
              id="value"
              data-testid="value-input"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="description">
            descrição:
            <input
              name="description"
              type="text"
              id="description"
              data-testid="description-input"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="currency">
            Moeda:
            <select
              name="currency"
              id="currency"
              data-testid="currency-input"
              value={ currency }
              onChange={ this.handleChange }
            >
              {moedas.map((moeda) => (
                <option key={ moeda }>{moeda}</option>
              ))}
            </select>
          </label>
          <label htmlFor="method">
            Metodo de pagamento:
            <select
              id="method"
              data-testid="method-input"
              name="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            tag:
            <select
              name="tag"
              id="tag"
              data-testid="tag-input"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button onClick={ this.click } type="button">Adicionar despesa</button>
          <p>{id}</p>
          <Table />
        </main>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  const { wallet: { currencies } } = state;
  return {
    moedas: currencies,
  };
};

const mapDispatchToProps = (dispatch) => ({
  informationExpenses: (expenses) => dispatch(fetchCota(expenses)),
});

Wallet.propTypes = {
  informationExpenses: PropTypes.func.isRequired,
  moedas: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
