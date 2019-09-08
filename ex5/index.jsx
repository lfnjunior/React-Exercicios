import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

//Passando Propriedades para Componentes Filhos
ReactDOM.render(
    <Family lastName='Nunes'>
        <Member name='Leonaldo' />
        <Member name='Maysla' />
    </Family>
, document.getElementById('app'))