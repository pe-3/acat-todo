import React, { Component } from 'react'
import { Input } from 'antd'
const { TextArea } = Input;
export default class TDComment extends Component {
    render() {
        return (
            <div className='TDComment' style={{borderBottom:'1px solid #eee'}}>
                <TextArea placeholder='添加备注' autoSize={{ minRows: 4, maxRows: 4 }} bordered={false} />
            </div>
        )
    }
}
