import React, { Component } from 'react'
import { Menu, Input, Button } from 'antd'
import './LeftMenuList.css'
import MyGap from '../../MyGap/MyGap'
import { PlusOutlined, BarsOutlined, SmileOutlined, StarOutlined, ScheduleOutlined, TeamOutlined, CheckOutlined } from '@ant-design/icons'
import { useNavigate, useLocation } from 'react-router-dom'
import Userbar from './userbar/Userbar'
const { Search } = Input
class MenuList extends Component {
    items = [
        {
            label: '我的一天',
            key: 'Today',
            icon: <SmileOutlined />,

        },
        {
            label: '重要',
            key: 'Important',
            icon: <StarOutlined />,
        },
        {
            label: '计划内',
            key: 'Plan',
            icon: <ScheduleOutlined />,
        },
        {
            label: '已分配给我',
            key: 'Distributed',
            icon: <TeamOutlined />,
        },
        {
            label: '任务',
            key: 'Task',
            icon: <CheckOutlined />,
        },
    ]
    render() {
        let selectKey = this.props.pathname.split('/')[1];
        return (
            <div className='LeftMenuList menu_back'>
                <Userbar />
                <Search placeholder='搜索计划' />
                <MyGap isVertical />
                <Menu items={this.items} defaultSelectedKeys={selectKey ? selectKey : 'Today'} style={{ borderRight: 'none', background: 'transparent', }} onSelect={(arg) => {
                    this.props.jump('/' + arg.key);
                }} />
            </div>
        )
    }
}

export class NewList extends Component {
    state = {
        items: [
            {
                label: '未命名列表',
                key: '1',
                icon: <BarsOutlined />,
            },
        ],
    }

    addItem = () => {
        let { items } = this.state;
        console.log(items)
        let itemObj = {
            label: '未命名列表',
            key: items.length + 1,
            icon: <BarsOutlined />,
        };
        this.setState({
            items: [...items, itemObj]
        })
    }
    render() {
        let { items } = this.state;
        return (
            <div className="NewList">
                <Menu items={items} style={{ borderRight: 'none' }} />
                <Button onClick={this.addItem} style={{ width: '92%', position: 'absolute', bottom: '10px' }}> <PlusOutlined style={{ position: 'absolute', left: '10px', top: '52%', transform: 'translate(0,-50%)' }} /> 新建列表</Button>
            </div>
        )
    }
}

export default function LeftMenuList() {
    let history = useNavigate();
    let jump = (path) => {
        history(path);
    }
    let location = useLocation();
    return (
        <MenuList jump={jump} pathname={location.pathname} />
    )
}