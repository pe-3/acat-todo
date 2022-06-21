import React, { Component } from 'react';
import { getBack, setback } from '../../setback/setback';
import TaskHead from '../TaskHead/TaskHead';
import Tasks from '../Tasks/Tasks';
import './Important.css'
class Important extends Component {
    state = {
        backImage: getBack('important')
    }
    changeBack = (url) => {
        this.setState({
            backImage: url,
        })
        setback('important',url);
    }
    componentDidMount() {
        this.$bus.changeBack = this.changeBack;
    }
    render() {
        return (
            <div className='Important Task_back back_center' style={{ backgroundImage: this.state.backImage ? `url(${this.state.backImage})` : '' }}>
                <div>
                    <TaskHead title='重要'  />
                </div>
                <div>
                    <Tasks inputcolor='#fdd4d8' inputid='pink' inputiconColor='#b34869' />
                </div>
            </div>
        );
    }
}

export default Important;
