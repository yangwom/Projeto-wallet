import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCota } from '../actions';
import Header from '../component/Header';
import fetchApi from '../services';
import Table from '../component/Table';

function Wallet() {
  const [id, setId] = useState(0);
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [method, setMethod] = useState('cartão de credito');
  const [tag, setTag] = useState('Alimentação');

  const getApi = async () => {
    const data = await fetchApi();
    return data;
  };

  useEffect(() => {
    getApi();
  }, []);

  const dispatch = useDispatch();

  const dados = {
    id,
    value,
    description,
    currency,
    method,
    tag,
  };

  const click = () => {
    dispatch(fetchCota(dados));

    setId((prevState) => prevState + 1);

    if (description) return setDescription('');

    if (value) return setValue('');
  };

  const currencyes = useSelector((state) => state.wallet.currencies);
  return (
    <>
      <Header />
      <form>
        <label htmlFor="value">
          valor
          <input
            name="value"
            className="inputs"
            id="value"
            data-testid="value-input"
            value={ value }
            onChange={ (e) => setValue(e.target.value) }
          />
        </label>

        <label htmlFor="description">
          descrição
          <input
            name="description"
            className="inputs"
            type="text"
            id="description"
            data-testid="description-input"
            value={ description }
            onChange={ (e) => setDescription(e.target.value) }
          />
        </label>

        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            className="inputs"
            id="currency"
            data-testid="currency-input"
            value={ currency }
            onChange={ (e) => setCurrency(e.target.value) }
          >
            {currencyes.map((moeda) => (
              <option key={ moeda }>{moeda}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Metodo de pagamento
          <select
            className="inputs"
            id="method"
            data-testid="method-input"
            name="method"
            value={ method }
            onChange={ (e) => setMethod(e.target.value) }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          tag
          <select
            className="inputs"
            name="tag"
            id="tag"
            data-testid="tag-input"
            value={ tag }
            onChange={ (e) => setTag(e.target.value) }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button className="bnt-wallet" onClick={ click } type="button">
          Adicionar despesa
        </button>
      </form>
      <Table />
    </>
  );
}

export default Wallet;
