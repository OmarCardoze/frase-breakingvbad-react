import React from 'react';
import styled from '@emotion/styled'

const ContenedoFrase =styled.div`
    background: linear-gradient(to right, #093009 0%, #1F6032 100%);
    color: #fff;
    width: 60vw;
    height: 300px
    padding: 5px 10px;
    text-align: center;
    border-radius: 10px;
    margin: 20px 0;
    

    p {
        text-align: end;
        margin-right: 30px;
    }
`;

const Frase = ({frase}) => {
    return ( 
        <ContenedoFrase>
            <h2>{frase.quote}</h2>
            <p>{frase.author}</p>
        </ContenedoFrase>
        
     );
}
 
export default Frase;