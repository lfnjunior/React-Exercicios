import React from 'react'

// componente com parâmetro
// em uma arrow function o retorno é implicito
export default (props) => (
    <h1>{props.value}</h1>
)