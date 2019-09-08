import React, { Component } from 'react'

export default class ClassComponent extends Component {
    //nesse contexto a propriedade 'props' é default, vindo de Component
    constructor(props) {
        //contrutor da classe Pai Component
        super(props)
        this.state = { value: props.initialValue }
    }

    sum(delta) {
        //Evolui o Objeto e não altera ele diretamente 
        this.setState({ value: this.state.value + delta })
    }

    render() {
        return (
            <div>
                <h2>{this.props.label} {this.state.value}</h2>
                <button onClick={() => this.sum(-1)}>- 1</button>
                <button onClick={() => this.sum(1)}>+ 1</button>
            </div>
        )
    }
}