import React, { Component } from 'react'

class Field extends Component {
    constructor(props) {
        super(props)
        // forma controlada do componente
        this.state = { value: props.initialValue }
        /* 
            Fazendo bind do field
            Diferente do Angular
            Não é feito da DOM para o componente
            Esse componente é controlado pelo React
        */
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <div>
                <label>{this.state.value}</label><br />
                <input onChange={this.handleChange} 
                       value={this.state.value} />
            </div>
        )
    }

}

export default Field