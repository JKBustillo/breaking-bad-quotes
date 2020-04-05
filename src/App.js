import React from 'react';
import styled from 'styled-components';

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
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

function App() {
  
  const consultarApi = () => {
    alert('Consultando');
  };

  return (
    <Contenedor>
      <Boton
        onClick={consultarApi}
      >
        Obtener frase
      </Boton>
    </Contenedor>
  );
}

export default App;
