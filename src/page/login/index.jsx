import React, { Component } from 'react'
import "./index.scss"
import User from 'service/userservice.jsx'
import MUtil from 'util/mm.jsx'

const _mm=new MUtil()
const _user=new User()
class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      username:"",
      password:"",
      redirect:_mm.getUrlParam('redirect')||'/'
    }
  }
  componentWillMount(){
    document.title="登录--NETSDL"
  }

  onInputChange(e){
     let inputValue=e.target.value,
         inputName =e.target.name;
        //  console.log(inputValue,inputName)
     this.setState({
       [inputName]:inputValue,
     })
  }
  onSubmit(e){
    console.log(this.state.redirect)
    let loginInfo={
      username:this.state.username,
      password:this.state.password
    }
    let checkResult=_user.checkLoginInfo(loginInfo)
    if(checkResult.status){
      _user.login(loginInfo).then((res)=>{
        _mm.setStorage("userInfo",res)
        this.props.history.push(this.state.redirect)
        },(errMsg)=>{
         _mm.errorTips(errMsg)
        })
    }
    else{
      _mm.errorTips(checkResult.msg)
    }
  }

  onInputKeyUp(e){
    if(e.keyCode===13){
      this.onSubmit()
    }
  }
  render() {
    return (

      <div className="col-md-4 col-md-offset-4 ">
        <div className="panel panel-default login-panel">
          <div className="panel-heading">欢迎登陆--NETSDL管理系统</div>
          <div className="panel-body">
            <div>
              <div className="form-group">
                {/* <label htmlFor="exampleInputEmail1">用户名</label> */}
                <input type="text"
                       name="username"
                       className="form-control"
                       placeholder="请输入用户名"
                       onKeyUp={e=>{this.onInputKeyUp(e)}}
                       onChange={e=>this.onInputChange(e)}/>
              </div>
                <div className="form-group">
                  {/* <label htmlFor="exampleInputPassword1">密码</label> */}
                  <input type="password"
                         name="password" 
                         className="form-control" 
                         placeholder="请输入密码"
                         onKeyUp={e=>{this.onInputKeyUp(e)}}
                         onChange={e=>this.onInputChange(e)}/>
              </div>
                  <button             //type="submit"在form标签里提交会默认form表单提交 
                  className="btn but-lg btn-primary btn-block"
                  onClick={e=>{this.onSubmit(e)}}>登录</button>
            </div>
              </div>
             
          </div>
        </div>

        );
    }
}
 
export default Login;