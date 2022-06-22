import { Input } from 'antd';
import React, { Component, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons'
import SelectRadio from '../../SelectRadio/SelectRadio'
import { CloseOutlined } from '@ant-design/icons'
import { Popconfirm } from 'antd'
import './TDSteps.css'
const InputStyle = {
    padding: 'unset'
}
class TDSteps extends Component {
    state = {
        length: 0,
        map: Array.prototype.map,
        inputVal: '',
    }
    StepObj(title, finished) {
        return {
            title,
            finished,
        }
    }
    addStep(title, finished) {
        let { length } = this.state;
        this.setState({
            [length]: this.StepObj(title, finished),
            length: length + 1,
        })
    }
    delStep = (index) => {
        this.setState({
            [index]: null,
        })
    }
    changeFinish(index) {
        return (finished) => {
            this.setState({
                [index]: Object.assign(this.state[index], { finished }),
            })
        }
    }
    changeTitle(index) {
        return (title) => {
            this.setState({
                [index]: Object.assign(this.state[index], { title }),
            })
        }
    }
    setInputVal = (e) => {
        this.setState({
            inputVal: e.target.value
        })
    }

    setStep = () => {
        if (!this.state.inputVal) {
            return;
        }
        this.addStep(this.state.inputVal, false);
        this.setState({ inputVal: '' })
    }
    render() {
        return (
            <div className='TDSteps'>
                {
                    this.state.map((val, i) => {
                        if (!val) {
                            return;
                        }
                        return (
                            <Step key={i} {...val} delStep={this.delStep} delKey={i} />
                        )
                    })
                }
                <div style={{ height: '40px', lineHeight: '40px' }}>
                    <Input maxLength={11} onPressEnter={this.setStep} value={this.state.inputVal} onChange={this.setInputVal} placeholder='添加步骤' bordered={false} prefix={<PlusOutlined onClick={this.setStep} />} style={InputStyle} id='stepInput' />
                </div>
            </div>
        );
    }
}

export default TDSteps;

function Step(props) {
    let { finished, title, delStep, delKey } = props;
    let [isFinished, setFinish] = useState(finished);

    return (
        <div className='TDSingleStep'>
            <SelectRadio isSelected={isFinished} onSelectChange={setFinish} />
            <span className="TDTitle StepTitle">{title}</span>
            <Popconfirm title="确定删除这一步？" okText="是" cancelText="否" placement="bottomRight" onConfirm={() => { delStep(delKey) }}>
                <CloseOutlined style={{ fontSize: '10px' }} />
            </Popconfirm>
        </div>
    )
}