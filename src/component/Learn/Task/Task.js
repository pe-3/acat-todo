import React, { Component } from 'react'
import { getBack, setback } from '../../setback/setback';
import TaskHead from '../TaskHead/TaskHead';
import Tasks from '../Tasks/Tasks';
export default class Task extends Component {
  state = {
    backImage: getBack('task'),
  }
  changeBack = (url) => {
    this.setState({
      backImage: url,
    })
    setback('task',url);
  }
  componentDidMount() {
    this.$bus.changeBack = this.changeBack;
  }
  render() {
    return (
      <div className='Task_back all_Task' style={{ backgroundImage: this.state.backImage ? `url(${this.state.backImage})` : '' }}>
        <div>
          <TaskHead title='任务' style={{ color: '#fff', fontSize: '24px' }} />
        </div>
        <div>
          <Tasks />
        </div>
      </div>
    )
  }
}
