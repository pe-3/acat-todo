import React, { Component } from 'react'
import './Learn.css'
import LeftMenuList from './LeftMenuList/LeftMenuList'
import MyRouter from '../MyRouter/MyRouter';
import { HashRouter } from 'react-router-dom'
import TaskDetial from './TaskDetial/TaskDetial';
export default class Learn extends Component {
  state = {
    showDetail: false,
  }
  componentDidMount() {
    let { showDetail } = this.state;
    this.$bus.show_task_detail = (isSelected) => {
      if (isSelected) {
        if (showDetail) {
          showDetail = !showDetail;
          this.setState({
            showDetail,
          })
        } else {
          console.log('真的拴q');
        }
      } else {
        if (showDetail) {
          console.log('真的拴q');
        } else {
          showDetail = !showDetail;
          this.setState({
            showDetail,
          })
        }
      }
    }
  }
  render() {
    let { showDetail } = this.state;
    return (
      <div className='Learn '>
        <HashRouter>
          <div className="learn_left">
            <LeftMenuList />
          </div>
          <div className="learn_right">
            <MyRouter />
          </div>
          <div className={`learn_hide ${showDetail ? 'task_detail' : ''}`}>
            <TaskDetial />
          </div>
        </HashRouter>
      </div>
    )
  }
}
