

class MUtil{
   request(param){
       return new Promise((resolve,reject)=>{
        $.ajax({
            type    : param.type||'get',
            url     : param.url||'',
            dataType: param.dataType||'json',
            data    :param.data||null,
            success(res){
            //    console.log(res)
            //数据请求成功
            if(res.status===0){
                typeof resolve==="function" && resolve(res.data,res.msg)
            }
            //没有登录状态，强制登录
            else if(res.status===10){
                this.doLogin();
            }else{
                typeof reject==="function"  && reject(res.msg || res.data)
            }
            },
            error(err){
                typeof reject==="function"  && reject(err.statusText)
            }
        })
       })
   }
   doLogin(){
       //encodeURIComponent转义除了字母、数字、(、)、.、!、~、*、'、-和_之外的所有字符。
       window.location.href="/login?redirect="+encodeURIComponent(window.location.pathname)
   }
   //获取URL参数
   getUrlParam(name){
       //param=123&param1=456
   let queryString=window.location.search.split('?')[1]||''
   let reg =new RegExp("(^|&)"+name+"=([^&]*)(&|$)")
   let result=queryString.match(reg)
   return result ? decodeURIComponent(result[2]) : null;
   }

   errorTips(errMsg){
       alert(errMsg||'未知错误')
   }

   //存储
   setStorage(name,data){
       let dataType=typeof data
       //JSON类型
       if(dataType==="object"){
           window.localStorage.setItem(name,JSON.stringify(data))
       }
       //基础类型
       else if(['number','string','boolean'].indexOf(dataType)>=0){
        window.localStorage.setItem(name,JSON.data)
       }else{
           alert('该类型不支持本地存储')
       }
   }

   //取出
   getStorage(name){
       let data=window.localStorage.getItem(name)
       if(data){
           return JSON.parse(data)
       }else{
           return ""
       }
   }

   //删除本地数据
   removeStorage(name){
      window.localStorage.removeItem(name) 
   }
}
export default MUtil