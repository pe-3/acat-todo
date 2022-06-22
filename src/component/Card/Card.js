import React, { Component } from 'react'
import './Card.css'

export default class Card extends Component {
    render() {
        return (
            <div className='Card'>{this.props.children}</div>
        )
    }
}
