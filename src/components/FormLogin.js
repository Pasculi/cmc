import React from 'react'
import user from '../images/user.png'
import { Link } from 'react-router-dom';

const FormLogin = () => {
  
  return (
    <form className="form form__login">
      <div className="form__titulo">
        <h3>ACCESO ADMINISTRADOR</h3>
        <img src={user} alt="Logo user" />
      </div>
      <div className="form__group-input">
        <input
          type="text"
          className="form__input"
          placeholder="Usuario"
          autofocus
        />
      </div>
      <div className="form__group-input">
        <input type="text" className="form__input" placeholder="Clave" />
      </div>
      <div className="form__button-footer">
        <p>
          <Link className="form__link" to="/">
            Ir a inicio
          </Link>
        </p>
        <button className="form__button" type="submit">
          INGRESAR
        </button>
      </div>
    </form>
  );
};

export default FormLogin;