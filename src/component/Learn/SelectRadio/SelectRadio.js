import React, { Component } from 'react'
import './SelectRadio.css'
import { CheckOutlined } from '@ant-design/icons'
export default class SelectRadio extends Component {
    state = {
        isSelected: false,
    }
    componentDidMount() {
        let { isSelected } = this.props;
    
        this.setState({
            isSelected
        })
    }
    render() {
        let { isSelected } = this.state;
        let { onSelectChange } = this.props;
        return (
            <div className='SelectRadio' style={{ backgroundColor: isSelected ? 'grey' : '', ...this.props.style }} onClick={() => {
                let { isSelected } = this.state;
                isSelected = !isSelected;
                this.setState({
                    isSelected,
                })
                if (onSelectChange) {
                    onSelectChange(isSelected);
                }
            }}>
                {this.state.isSelected ? <CheckOutlined style={{ fontSize: '8px' }} /> : ''}
            </div>
        )
    }
}
