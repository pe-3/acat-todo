import React, { Component } from 'react'
import { getBack, setback } from '../../setback/setback';
import TaskHead from '../TaskHead/TaskHead';
import Tasks from '../Tasks/Tasks';
export default class Distributed extends Component {
  state = {
    backImage: getBack('distributed')
  }
  changeBack = (url) => {
    this.setState({
      backImage: url,
    })
    setback('distributed',url);
  }
  componentDidMount() {
    this.$bus.changeBack = this.changeBack;
  }
  render() {
    return (
      <div className='Task_back back_center' style={{ backgroundImage: this.state.backImage ? `url(${this.state.backImage})` : '' }}>
        <div>
          <TaskHead title='分配给我的'  />
        </div>
        <div>
          <Tasks hideInput />
        </div>
      </div>
    )
  }
}
