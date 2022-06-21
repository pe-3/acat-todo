import React, { Component } from 'react'
import { getBack, setback } from '../../setback/setback';
import TaskHead from '../TaskHead/TaskHead';
import Tasks from '../Tasks/Tasks';
import './Plan.css'
export default class Plan extends Component {
  state = {
    backImage: getBack('plan')
  }
  changeBack = (url) => {
    this.setState({
      backImage: url,
    })
    setback('plan',url);
  }
  componentDidMount() {
    this.$bus.changeBack = this.changeBack;
  }
  render() {
    return (
      <div className='Task_back Plan back_center' style={{ backgroundImage: this.state.backImage ? `url(${this.state.backImage})` : '' }}>
        <div>
          <TaskHead title='计划内'  />
        </div>
        <div>
          <Tasks inputcolor='#d3f1ef' inputid='plan' inputiconColor='#35837f' />
        </div>˝
      </div>
    )
  }
}
