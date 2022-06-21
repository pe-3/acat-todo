import React, { Component } from 'react'
import './Learn.css'
import LeftMenuList from './LeftMenuList/LeftMenuList'
import MyRouter from '../MyRouter/MyRouter';
import { HashRouter } from 'react-router-dom'
export default class Learn extends Component {
  render() {
    return (
      <div className='Learn '>
        <HashRouter>
          <div className="learn_left">
            <LeftMenuList />
          </div>
          <div className="learn_right">
            <MyRouter />
          </div>
        </HashRouter>
      </div>
    )
  }
}
