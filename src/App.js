import React, { useState, useEffect } from 'react';
import Frase from './Components/Frase'

import styled from '@emotion/styled'

const Contenedor = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Boton = styled.button`
    background: #093009;
    padding: 10px;
    width: 100px;
    color: #fff;
`;

function App() {

  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    setfrase(frase[0]);
  }

  const [frase, setfrase] = useState({})

  useEffect(() => {
    consultarAPI()
  }, [])

  return (
    <Contenedor>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/369px-Breaking_Bad_logo.svg.png" />
      <Frase
        frase={frase}
      />
      <Boton
        onClick={consultarAPI}
      >
        Buscar frase
      </Boton>
    </Contenedor>
  );
}

export default App;
