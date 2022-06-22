import React, { Component } from 'react'
import './TDMenus.css'
import {
    BellOutlined,
    ScheduleOutlined,
    RetweetOutlined,
} from '@ant-design/icons'
export default class TDMenus extends Component {
    menus = [
        {
            icon: <BellOutlined />,
            text: '提醒我',
        },
        {
            icon: <ScheduleOutlined />,
            text: '添加截止日期',
        },
        {
            icon: <RetweetOutlined />,
            text: '重复',
        },
    ]
    render() {
        return (
            <div className='TDMenus'>
                {
                    this.menus.map((val, i) => {
                        return <TDMenuItem {...val} key={i} />
                    })
                }
            </div>
        )
    }
}


function TDMenuItem(props) {
    let { icon, text } = props;
    return (
        <div className="TDMenuItem">
            {icon}
            <span className='menuText'>{text}</span>
        </div>
    )
}