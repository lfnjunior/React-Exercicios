import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Nunes'>
    <Member name='Leonaldo' />
    </Family>
, document.getElementById('app'))