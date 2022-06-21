import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import routes from './routes';
export default class MyRouter extends Component {
    render() {
        return (
            <Routes>
                {routes.map((val, i) => {
                    let { children } = val;
                    if (children) {
                        delete val.children;
                        return <Route {...val} key={i} >
                            {children.map((val,i)=>{
                                return <Route {...val} key={i}/>
                            })}
                        </Route>
                    }
                    return <Route {...val} key={i}/>
                })}
            </Routes>
        )
    }
}

