// src/components/NavBar.js
import React from 'react';

const NavBar = () => {
  return (
    <nav style={{ textAlign: 'center', margin: '20px 0' }}>
      <a href="#quem-somos" style={linkStyle}>Quem Somos</a>
      <a href="#equipe" style={linkStyle}>Equipe</a>
      <a href="#contatos" style={linkStyle}>Contatos</a>
      <a href="#horarios" style={linkStyle}>Horarios</a>
      <a href="#footer" style={linkStyle}> Footer</a>
     
    </nav>
  );
};

const linkStyle = {
  margin: '0 15px',
  color: '#000',
  textDecoration: 'none',
  fontWeight: 'bold'
};

export default NavBar;
