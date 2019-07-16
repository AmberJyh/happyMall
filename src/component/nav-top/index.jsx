import React,{Component} from 'react'
import {Link,withRouter} from 'react-router-dom'
import MUtil from 'util/mm.jsx'
import User from 'service/userservice.jsx'

const _mm=new MUtil()
const _user=new User()
class NavTop extends Component{
    constructor(props){
        super(props)
        this.state={
            username:_mm.getStorage("userInfo").username||''
        }
    }
    onLogout(){
      _user.logout().then(res=>{
          _mm.removeStorage("userInfo")
        //   this.props.history.push('/login')
        // window.location.href='/login'
      },errMsg=>{
          _mm.errorTips(errMsg)
      })  
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
                    {
                       this.state.username?  <span>欢迎{this.state.username}</span>
                       :
                       <span>欢迎您</span>
                    }
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