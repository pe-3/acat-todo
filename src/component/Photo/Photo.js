import React, { Component } from 'react'

export default class Photo extends Component {
  render() {
    return (
      <div>
          <img src={require("../../assets/img/check.png")} alt="213" style={{width:'50%'}}/>
      </div>
    )
  }
}
