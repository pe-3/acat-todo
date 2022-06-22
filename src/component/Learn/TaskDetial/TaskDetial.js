import React, { Component } from 'react'
import './TaskDetial.css'
import TDComment from './TDComent/TDComment'
import TDFile from './TDFile/TDFile'
import TDHead from './TDHead/TDHead'
import TDMenus from './TDMenus/TDMenus'
import TDSteps from './TDSteps/TDSteps'
export default class TaskDetial extends Component {
    render() {
        return (
            <div className='TaskDetial'>
                <TDHead />
                <TDSteps />
                <TDMenus />
                <TDFile />
                <TDComment />
            </div>
        )
    }
}
