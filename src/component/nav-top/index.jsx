import React,{Component} from 'react'
import {Link} from 'react-router-dom'


class NavTop extends Component{
    constructor(props){
        super(props)
    }
    onLogout(){
        
    }
   render(){
       return(
        <div className="navbar navbar-default top-navbar" role="navigation">
        <div className="navbar-header">
           
            <Link  className="navbar-brand" to="/"><b>NET</b>SDL</Link>
        </div>

        <ul className="nav navbar-top-links navbar-right">
            <li className="dropdown">
                <a className="dropdown-toggle"  href="javascript:;" >
                    <i className="fa fa-user fa-fw"></i>
                    <span>欢迎,adminXXX</span>
                     <i className="fa fa-caret-down"></i>
                </a>
                <ul className="dropdown-menu dropdown-user">
                    {/* <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
                    </li>
                    <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
                    </li>
                    <li className="divider"></li> */}
                    <li>
                        <a href="javascript:;" onClick={this.onLogout}>
                        <i className="fa fa-user-circle" aria-hidden="true" style={{paddingRight:"10px"}}></i>
                            Logout</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>  
       )
   }
}

export default NavTop