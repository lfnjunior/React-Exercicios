import React from 'react'

// npm i --save-dev babel-plugin-transform-object-rest-spread@6.22.0
// {...props} faz uma cópia de props e passa como parâmetro
// mas funciona para apenas um elemento
export default props => (
    <div>
        
        { React.cloneElement(props.children, {...props}) }
    </div>
)