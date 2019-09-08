import React from 'react'
import ReactDOM from 'react-dom'
import ComponentParam from './componentParam.jsx'

// A primcipal preocupação do react é a geração de componentes
// Os componentes podem ser criados por meio de uma função ou por meio de uma classe
ReactDOM.render(
    <ComponentParam value='Componente com parâmetro!' />,
    document.getElementById('app')
)