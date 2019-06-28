import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import "./index.css"
import "./index.scss"
import "../node_modules/font-awesome/css/font-awesome.min.css"


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
class Component extends Component{
    constructor(){
        super();
        state:({
            name:"Amber",
            age:0
        })
    }

    handleClick=()=>{
        this.setState({
            name:this.state.name+1
        })
    }
    render(){
        return(
            <div>
                <p>I am {this.state.name}</p>
                <p>I am {this.state.age} years old!</p>
                <button onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}
ReactDOM.render(
    <Component/>,
    document.getElementById('app')
)