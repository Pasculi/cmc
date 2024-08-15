import React, { useState } from 'react'
import logo from '../images/layout_set_logo_GTD.png'
import { Link } from 'react-router-dom';

const Header = () => {
  const [btnAdmin, setBtnAdmin] = useState(false)

  const handleBtnAdmin = () => {
    setBtnAdmin(!btnAdmin)
  }
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="" />
      <h1 className="header__titulo">CMC</h1>
      {btnAdmin ? (
        <Link to="/admin" className="header__admin" onClick={handleBtnAdmin}>
          admin
        </Link>
      ) : (
        <Link to="/" className="header__admin" onClick={handleBtnAdmin}>
          salir
        </Link>
      )}
    </div>
  );
}

export default Header
