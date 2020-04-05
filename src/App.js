import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFFFFF;
  margin-top: 2.5rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .3s ease;

  &:hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  const [frase, setFrase] = useState({});
  
  const consultarApi = async () => {
    const resultado = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await resultado.json();
    setFrase(frase[0]);
  };

  useEffect (() => {
    consultarApi();
  }, []);

  return (
    <Contenedor>
      <Frase
        frase={frase}
      />

      <Boton
        onClick={consultarApi}
      >
        Obtener frase
      </Boton>
    </Contenedor>
  );
}

export default App;
