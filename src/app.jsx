import React,{Component} from 'react'
import ReactDOM from 'react-dom'

// import "../node_modules/font-awesome/css/font-awesome.min.css"
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom' 
import Home from "page/home/index.jsx"
import Layout from "component/layout/index.jsx"

//页面

class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Router>
                <Layout>
                <Switch>
                   <Route path="/" component={Home}></Route>
                   <Redirect  from="*" to="/"></Redirect>
                </Switch>
                </Layout>
            </Router>
        )
    }
}


ReactDOM.render(
  
<App></App>,
    document.getElementById('app')
)