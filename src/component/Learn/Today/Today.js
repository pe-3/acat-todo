import React, { Component } from 'react'
import './Today.css'
import Tasks from '../Tasks/Tasks';
import { ButtonPopoer } from '../TaskHead/TaskHead';
import { getBack, setback } from '../../setback/setback';
export default class Today extends Component {
  date = new Date();
  getDay = () => {
    let day = this.date.getDay();
    switch (day) {
      case 1:
        day = '一'
        break;
      case 2:
        day = '二'
        break;
      case 3:
        day = '三'
        break;
      case 4:
        day = '四'
        break;
      case 5:
        day = '五'
        break;
      case 6:
        day = '六'
        break;
      case 0:
        day = '日'
        break;
      default:
        break;
    }
    return day;
  }
  state = {
    backImage: getBack('Today'),
  }
  changeBack = (url) => {
    this.setState({
      backImage: url,
    })
    setback('Today', url);
  }
  componentDidMount() {
    this.$bus.changeBack = this.changeBack;
  }
  render() {
    return (
      <div className='Today back_center' style={{ backgroundImage: this.state.backImage ? `url(${this.state.backImage})` : '' }}>
        <div className="Today_top">
          <div>
            <h1 style={{ fontSize: '28px', color: 'white', marginBottom: '-2px' }}>我的一天</h1>
            <span>{this.date.getMonth() + 1}月{this.date.getDate()}日&nbsp;星期{this.getDay()}</span>
          </div>
          <div>
            <ButtonPopoer />
          </div>
        </div>
        <div className='Today_list'>
          <Tasks />
        </div>
      </div>
    )
  }
}
