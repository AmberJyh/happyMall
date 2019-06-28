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
class Age extends Component{
    constructor(){
        super();
        this.state={
            name:"Amber",
            age:0
        }
    }

    handleClick(){
      
        this.setState({
            age:this.state.age+1
        })
    }
    render(){
        return(
            <div>
                <p>I am {this.state.name}</p>
                <p>I am {this.state.age} years old!</p>
                <button onClick={(e)=>{this.handleClick(e)}}>Add</button>
            </div>
        )
    }
}
ReactDOM.render(
    <Age></Age>,
    document.getElementById('app')
)