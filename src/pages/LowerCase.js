import React, { Component } from 'react'
import TextTransformer from '../containers/TextTransformer'

export default class LowerCase extends Component {
    render() {
        return (
            <div className="LowerCase-container">
                <h2 className="mt-5">Let's lowercase some stuff</h2>
                <TextTransformer mode="lower"/>
            </div>
        )
    }
}
