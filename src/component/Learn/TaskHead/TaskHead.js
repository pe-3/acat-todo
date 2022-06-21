import React, { Component, useState } from 'react'
import { Button, Popover } from 'antd'
import { EllipsisOutlined, RightOutlined, LeftOutlined } from '@ant-design/icons'
import { Avatar } from 'antd';
import './taskmenu.css'
export default class TaskHead extends Component {
  render() {
    return (
      <div className="Today_top">
        <div>
          <h1 style={{ fontSize: '28px', color: 'white', marginBottom: '-2px', ...this.props.style }}>{this.props.title}</h1>
        </div>
        <div>
          <ButtonPopoer />
        </div>
      </div>
    )
  }
}

export function ButtonPopoer() {
  return (
    <Popover content={MoreMenuList} placement="bottomRight" trigger="click" >
      <Button size='small' id='darkBtn'>
        <EllipsisOutlined />
      </Button>
    </Popover>
  )
}


function MoreMenuList(props) {
  let [theme, setTheme] = useState();
  if (theme) {
    return (
      <div className='theme-wrapper'>
        <BackList />
        <div className="menuitem" onClick={() => { setTheme(false) }}>
          <LeftOutlined style={{ fontSize: '10px' }} />&nbsp;&nbsp;返回菜单
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className='menuitem' onClick={() => { setTheme(true) }}>更换主题&nbsp;&nbsp;<RightOutlined style={{ fontSize: '10px' }} /> </div>
      <div className='menuitem'>打印列表&nbsp;&nbsp;<RightOutlined style={{ fontSize: '10px' }} /> </div>
    </div>
  )
}

function BackList() {
  let backList = [
    require('../../../assets/img/backlist/back_1.png'),
    require('../../../assets/img/backlist/back_2.png'),
    require('../../../assets/img/backlist/back_3.png'),
    require('../../../assets/img/backlist/back_4.png'),
    require('../../../assets/img/backlist/back_5.png'),
    require('../../../assets/img/backlist/back_6.png'),
    require('../../../assets/img/backlist/back_7.png'),
    require('../../../assets/img/backlist/back_8.png'),
  ]
  return (
    <div>
      {
        backList.map((val, i) => {
          return (
            <Avatar src={val} key={i} style={{ margin: '5px ', cursor: 'pointer' }} onClick={() => {
              console.log(val);
              Component.prototype.$bus.changeBack(val);
            }} />
          )
        })
      }
    </div>
  )
}