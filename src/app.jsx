import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css"
import "./index.scss"
import "../node_modules/font-awesome/css/font-awesome.min.css"
import {Component} from React.Component

// ReactDOM.render(
//     <div>
//     <h1>Hello,world</h1>
//     <i className="fa fa-bicycle" aria-hidden="true"></i>
//     </div>,
//     document.getElementById('app'),
// );
let style={
    // color:'aqua',
    // fontSize:"30px"
}
let jsx=<div className="jsx" style={style}>jsx...</div>

ReactDOM.render(
    jsx,
    document.getElementById('app')
)