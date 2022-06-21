import React, { Component } from 'react'
import MyGap from '../../MyGap/MyGap'
import SelectImportant from '../SelectImportant/SelectImportant'
import SelectRadio from '../SelectRadio/SelectRadio'
import './SingleTask.css'
export default class SingleTask extends Component {
    state = {
        isFinished: false,
        isImportant: false,
    }
    selectChangeHandler = (prop) => {
        return (isSelected) => {
            this.setState({
                [prop]: isSelected,
            })
            if (this.props.onPropChange) {
                this.props.onPropChange(prop, isSelected);
            }
        }
    }
    componentDidMount() {
        let { isFinished, isImportant } = this.props;
        this.setState({
            isFinished,
            isImportant
        })
    }
    static defaultProps = {
        title: '好好睡觉',
        type: '任务',
    }
    render() {
        let { title, type } = this.props;
        return (
            <div className='SingleTask'>
                <SelectRadio onSelectChange={this.selectChangeHandler('isFinished')} isSelected={this.props.isFinished} />
                <MyGap gap={10} />
                <div className='task_info' >
                    <div className='task_title' style={this.state.isFinished ? {
                        color: 'grey',
                        textDecoration: 'line-through'
                    } : {}}>{title}</div>
                    <div className='task_type'>{type}</div>
                </div>
                <SelectImportant onSelectChange={this.selectChangeHandler('isImportant')} isSelected={this.props.isImportant} style={{
                    position: 'absolute',
                    right: '20px',
                    borderRadius: '5px',
                }} />
            </div>
        )
    }
}
