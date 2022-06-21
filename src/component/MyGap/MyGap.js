import React, { Component } from 'react'

export default class MyGap extends Component {
    static defaultProps = {
        gap: 5,
        isVertical: false,
    }
    render() {
        return (
            <div className="my_gap" style={!this.props.isVertical ? {
                margin: `0 ${this.props.gap}px`,
            } : { margin: `${this.props.gap}px 0`, display: 'block' }}></div>
        )
    }
}

export class Dot extends Component {
    render() {
        return (
            <span className="css-1kr0d8-Dot"></span>
        )
    }
}