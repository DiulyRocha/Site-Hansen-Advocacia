import React from 'react';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#000', color: '#fff', padding: '10px 20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="/logo.PNG" alt="Logo do Escritório" style={{ height: '50px', marginBottom: '10px' }} />
        <nav>
          <a href="#quem-somos" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>Quem Somos</a>
          <a href="#equipe" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>Equipe</a>
          <a href="#contato" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>Contato</a>
          <a href="#horarios" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>Horários</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
