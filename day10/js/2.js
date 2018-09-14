var isUser=false;//验证用户名是否符合条件
var isPwd=false;//验证密码是否符合条件

// 验证字符长度
function regLength(content) {
  if (content.length >= 4 && content.length <= 16) {
    return true;
  }
  return false;
}

// 1.定义一个验证user的函数
function regUser(user) {
  var rs = regLength(user.value);
  console.log(rs);
  // 找到下一个兄弟节点
  var span = user.nextElementSibling;
  if (rs) {
    span.innerHTML = '<img width=20px heigth=20px src="./image/1.jpg">';
    isUser=true;
  } else {
    span.innerText = "用户名必须是4-16位";
    span.style.color = "red";
    isUser=false;
  }
}

// 2.验证密码
function regPwd(pwd) {
  var rs = regLength(pwd.value);
  // 找到下一个兄弟节点
  var span = pwd.nextElementSibling;
  if (rs) {
    span.innerHTML = '<img width=20px heigth=20px src="./image/1.jpg">';
  } else {
    span.innerText = "密码必须是4-16位";
    span.style.color = "red";
  }
}

// 3.确认密码
function regRpwd(rpwd) {
  var pwd = document.getElementsByName("pwd")[0];
  // 找到下一个兄弟节点
  var span = rpwd.nextElementSibling;
  if (regLength(rpwd.value)) {
    if (pwd.value === rpwd.value) {
      span.innerHTML = '<img width=20px heigth=20px src="./image/1.jpg">';
      isPwd=true;
    } else {
      span.innerText = "两次密码不一致";
      span.style.color = "red";
      isPwd=false;
    }
  }else{
    span.innerText = "确认密码不符合";
    span.style.color = "red";
    isPwd=false;
  }
}

// 提交函数
function onRegister(){
    // 获取对象
    // var user=document.getElementsByName("user")[0];
    // var pwd=document.getElementsByName("pwd")[0];
    // var rpwd=document.getElementsByName("rpwd")[0];
    // regLength(user.value);
    // regLength(pwd.value);
    // regLength(rpwd.value);
    if(isUser&&isPwd){
        return true;
    }else{
        return false;
    }
}
