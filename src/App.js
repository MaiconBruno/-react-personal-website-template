import React from 'react';
import Heade from './components/header/heade.js';
import Inicio from './components/inicio/inicio';
import Bio from './components/bio/bio';
import Services from './components/servicos/servicos';
import Footer from './components/footer/footer'
import Contato from './components/contato/contato';
import Galeria from './components/galeria/galeria';
import { MainSection } from './components/main/styled_main';

function App() {
  return (
    <>
      <MainSection>
        <Heade />
        <Inicio />
      </MainSection>
      <Bio />
      <Services />
      <Galeria />
      {/* <Contato/> */}
      <Footer />
    </>
  );
}

export default App;
