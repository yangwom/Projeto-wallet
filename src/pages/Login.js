import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FaCommentDollar } from 'react-icons/fa';
import { login } from '../actions';
import Validate from '../hook/useValidate';

function Login() {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const { disabled, useValidate } = Validate();

  const dispatch = useDispatch();

  const history = useHistory();

  useValidate(email, password);

  const click = () => {
    dispatch(login(email));
    history.push('/carteira');
  };

  return (
    <form className="form">
      <div className="title-login">
        <div style={ { display: 'flex' } }>
          <h1 style={ { fontSize: '50px' } }> Trybe wallet  </h1>
          <FaCommentDollar style={ { fontSize: '30px' } } />
        </div>
        <h1 style={ { fontSize: '54px', marginRight: '30px', marginTop: '100px' } }>
          Faça seu login
          <br />
          na carteira
        </h1>
      </div>
      <div className="login-inputs">
        <div className="login-content">
          <FaCommentDollar className="svg" />
          <input
            className="input-name"
            name="email"
            data-testid="email-input"
            onChange={ (e) => setEmail(e.target.value) }
            type="email"
            placeholder="Email"
            value={ email }
          />

          <input
            className="input-name"
            name="password"
            data-testid="password-input"
            type="password"
            value={ password }
            placeholder="Senha "
            onChange={ (e) => setPassword(e.target.value) }
          />
          <button
            className="bnt"
            disabled={ disabled }
            type="button"
            onClick={ click }
          >
            Entrar

          </button>
        </div>
      </div>
    </form>);
}

export default Login;
