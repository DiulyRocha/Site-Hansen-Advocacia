import React from 'react';
import Header from './components/Header';
import QuemSomos from './components/QuemSomos';
import Equipe from './components/Equipe';
import Contatos from './components/Contatos';
import Horarios from './components/Horarios';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />

      <main>
        <section id="quem-somos"> <QuemSomos /> </section>  {/* Aqui o componente Quem somos */}

        <section id="equipe"><Equipe /> </section>  {/* Aqui o componente Equipe */}

        <section id="contato"> <Contatos /> </section>  {/* Aqui o componente contatos */}

        <section id="horarios"> <Horarios /> </section>  {/* Aqui o componente Horários */}

      </main>
      <Footer />
    </div>
  );
}

export default App;
