import MUtil from 'util/mm.jsx'

const _mm=new MUtil()
class User{
  login(loginInfo){
   return _mm.request({          //想要用login.then链式操作，需要返回一个Promise
        type:'post',
        url:"/manage/user/login.do",
        data:loginInfo
      })
  }

  //退出登录
  logout(){
    return _mm.request({          //想要用login.then链式操作，需要返回一个Promise
        type:'post',
        url:"/user/logout.do",
      })  
  }

  //检查登录接口数据的合法性
  checkLoginInfo(loginInfo){
      let username=$.trim(loginInfo.username)
      let password=$.trim(loginInfo.password)
  if(typeof username!=='string'||username.length===0){
      return {
          status:false,
          msg   :"用户名为空！"
      }
  }
  if(typeof password!=='string'||password.length===0){
    return {
        status:false,
        msg   :"密码为空！"
    }
}  
    return {
        status:true,
        msg:"验证通过"
    }
  }


}
export default User;