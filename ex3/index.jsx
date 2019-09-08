import React from 'react'
import ReactDOM from 'react-dom'
import { Primeiro, Segundo } from './componentes'

//Retornando mais de um componente de um mesmo jsx
ReactDOM.render(
<div>
    <Primeiro  />
    <Segundo  />
</div>
, document.getElementById('app'))