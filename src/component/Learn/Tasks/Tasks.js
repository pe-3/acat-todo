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
    }
    push = (obj) => {
        let { length } = this.state;
        this.setState({
            [length]: obj,
            length: length + 1,
        })
    }
    componentDidMount() {
        // 初始化列表
        // let list = [{}, {}, {}, {}, {}];
        // for (let i in list) {
        //     this.setState({
        //         [i]: list[i],
        //         length: i + 1,
        //     })
        // }
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
    render() {
        return (
            <div className='Tasks'>
                {
                    this.state.filter((val) => { return !val.isFinished && val.isImportant }).map((val, i) => {
                        return <SingleTask {...val} key={val.key} onPropChange={(prop, isSelected) => {
                            let obj = this.state[val.key];
                            this.setState({
                                [val.key]: Object.assign(obj, { [prop]: isSelected })
                            })
                        }} />
                    })
                }
                {
                    this.state.filter((val) => { return !val.isFinished && !val.isImportant }).map((val, i) => {
                        return <SingleTask {...val} key={val.key} onPropChange={(prop, isSelected) => {
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
                        return <SingleTask {...val} key={val.key} onPropChange={(prop, isSelected) => {
                            let obj = this.state[val.key];
                            this.setState({
                                [val.key]: Object.assign(obj, { [prop]: isSelected })
                            })
                        }} />
                    })
                }
                {!this.props.hideInput ? <div className="pos_bottom" style={{ width: "97%", }} >
                    <Input onPressEnter={(e) => {
                        this.push(this.TaskItem(e.target.value, '任务', this.state.length));
                        setTimeout(() => {
                            e.target.value = null;
                        }, 0);
                    }} prefix={<PlusOutlined style={{ color:'white' }} />} size='large' placeholder='添加任务' id={'addTask'} style={{ backgroundColor:'#4b4645' }} />
                </div> : ''}
            </div>

        )
    }
}
