import React, { Component } from 'react'
import SelectImportant from '../../SelectImportant/SelectImportant'
import SelectRadio from '../../SelectRadio/SelectRadio'
import './TDhead.css'
export default class TDHead extends Component {
    render() {
        return (
            <div className='TDHead'>
                <SelectRadio />
                <span className="TDTitle">任务标题</span>
                <SelectImportant />
            </div>
        )
    }
}
