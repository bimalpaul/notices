import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TextTransformer extends Component {
    state = {
        currentValue: ''
    }

    static propTypes = {
        mode: PropTypes.oneOf(['lower', 'upper']),
        transformToLowerCase: PropTypes.func.isRequired,
        transformToUpperCase: PropTypes.func.isRequired,
        transformedValue: PropTypes.string
    }

    handleChange = e => this.setState({ currentValue: e.target.value })

    handleSubmit = e => {
        const { transformToLowerCase, transformToUpperCase, mode } = this.props
        const { currentValue } = this.state
        const action = mode === 'upper' ? transformToUpperCase : transformToLowerCase
        e.preventDefault()
        action(currentValue)
    }

    render() {
        const { currentValue } = this.state
        const { transformedValue } = this.props
        return (
            <div className="TextTransformer-container mt-4">
                <form onSubmit={this.handleSubmit}>
                    <input value={currentValue} type="text" placeholder="Enter text to transform" onChange={this.handleChange} />
                    <button type="submit">Transform Text</button>
                </form>
                <p className="mt-4">Transformed Text: {transformedValue}</p>
            </div>
        )
    }
}
