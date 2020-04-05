import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContenedorFrase = styled.div`
    padding: 2rem 3rem;
    border-radius: .5rem;
    background-color: #FFF;
    max-width: 800px;
    margin-top: 16rem;

    @media (min-width: 1600px) {
        margin-top: 0;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.6rem;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;

const Frase = ({ frase }) => {
    return (
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>- {frase.author} </p>
        </ContenedorFrase>
    );
}
 
Frase.propTypes = {
    frase: PropTypes.object.isRequired,
};

export default Frase;