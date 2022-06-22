import React, { Component } from 'react'
import SingleTask from '../SingleTask/SingleTask'
import { Input, Tag } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import './Tasks.css'
export default class Tasks extends Component {
    state = {
        length: 0,
        map: Array.prototype.map,
        filter: Array.prototype.filter,
        selectIndex: -1,
        inputVal: '',
    }
    push = (obj) => {
        let { length } = this.state;
        this.setState({
            [length]: obj,
            length: length + 1,
        })
    }
    TaskItem(title, type, key) {
        return {
            title,
            type,
            isFinished: false,
            isImportant: false,
            key
        }
    }
    changeSelect = (key) => {
        this.setState({
            selectIndex: key,
        })
    }
    render() {
        return (
            <div className='Tasks' >
                {
                    this.state.filter((val) => { return !val.isFinished && val.isImportant }).map((val, i) => {
                        return <SingleTask selectIndex={this.state.selectIndex} changeSelect={this.changeSelect} taskKey={val.key} {...val} key={val.key} onPropChange={(prop, isSelected) => {
                            let obj = this.state[val.key];
                            this.setState({
                                [val.key]: Object.assign(obj, { [prop]: isSelected })
                            })
                        }} />
                    })
                }
                {
                    this.state.filter((val) => { return !val.isFinished && !val.isImportant }).map((val, i) => {
                        return <SingleTask selectIndex={this.state.selectIndex} changeSelect={this.changeSelect} taskKey={val.key} {...val} key={val.key} onPropChange={(prop, isSelected) => {
                            let obj = this.state[val.key];
                            this.setState({
                                [val.key]: Object.assign(obj, { [prop]: isSelected })
                            })
                        }} />
                    })
                }
                {this.state.filter((val) => { return val.isFinished }).length ? <p><Tag size='small' style={{ backgroundColor: 'rgba(38,38,38,.6)', color: 'white' }}>已完成</Tag></p> : ''}
                {
                    this.state.filter((val) => { return val.isFinished }).map((val, i) => {
                        return <SingleTask selectIndex={this.state.selectIndex} changeSelect={this.changeSelect} taskKey={val.key} {...val} key={val.key} onPropChange={(prop, isSelected) => {
                            let obj = this.state[val.key];
                            this.setState({
                                [val.key]: Object.assign(obj, { [prop]: isSelected })
                            })
                        }} />
                    })
                }
                {!this.props.hideInput ? <div className="pos_bottom" style={{ width: "97%", }} >
                    <Input value={this.state.inputVal} onChange={(e) => {
                        this.setState({
                            inputVal: e.target.value,
                        })
                    }} onPressEnter={() => {
                        if (!this.state.inputVal) {
                            return;
                        }
                        this.push(this.TaskItem(this.state.inputVal, '任务', this.state.length));
                        setTimeout(() => {
                            this.setState({
                                inputVal: '',
                            })
                        }, 0);
                    }} prefix={<PlusOutlined onClick={() => {
                        if (!this.state.inputVal) {
                            return;
                        }
                        this.push(this.TaskItem(this.state.inputVal, '任务', this.state.length));
                        setTimeout(() => {
                            this.setState({
                                inputVal: '',
                            })
                        }, 0);
                    }} id='plusIcon' />} size='large' placeholder='添加任务' id={'addTask'} style={{ backgroundColor: '#4b4645' }} />
                </div> : ''}
            </div>
        )
    }
}
