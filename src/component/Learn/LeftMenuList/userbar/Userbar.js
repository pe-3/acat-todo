import { Avatar, Tooltip } from 'antd'
import React, { Component } from 'react'
import './userbar.css'
export default class Userbar extends Component {
    render() {
        return (
            <div className='Userbar'>
                <Avatar size='large' src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202103%2F30%2F20210330141929_161cb.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652842290&t=527c7920901fdf8db3af9cc4edc5b273' />
                <div className='userinfo'>
                    <div className='username'>username</div>
                    <Tooltip title='guoxiaodong167@gmail.com' placement='right'>
                        <span className='user-email'>guoxiaodong167@gmail.com</span>
                    </Tooltip>
                </div>
            </div>
        )
    }
}
