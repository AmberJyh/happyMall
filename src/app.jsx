import React, { Component } from 'react'
import ReactDOM             from 'react-dom'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import Home                 from "page/home/index.jsx"
import Layout               from "component/layout/index.jsx"
import Login                from "page/login/index.jsx"

//页面

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/" render={props => (
                        <Layout>
                            <Switch>
                                <Route exact path="/" component={Home}></Route>
                                <Route path="/product" component={Home}></Route>
                                <Route path="/product_category" component={Home}></Route>
                                <Route path="/order" component={Home}></Route>
                                <Route path="/user" component={Home}></Route>
                            </Switch>
                        </Layout>
                     )}></Route> 

                </Switch>
            </Router>
        )
    }
}


ReactDOM.render(

    <App></App>,
    document.getElementById('app')
)