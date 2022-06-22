import React, { Component } from 'react'
import './TDFile.css'
import { PaperClipOutlined } from '@ant-design/icons'
export default class TDFile extends Component {
    render() {
        return (
            <div className='TDFile TDMenuItem'>
                <PaperClipOutlined />
                <span className='menuText'>添加文件</span>
            </div>
        )
    }
}
