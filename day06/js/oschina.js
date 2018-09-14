// 判断输入信息
var isPhone = false;
var isEmil = false;

var div = document.getElementsByClassName("form-tips");
// 验证手机号
function regUserPhone(phone) {
  if (phone.value.length != 11) {
    div[0].innerText = "请输入手机号！";
    console.log(div[0].textContent);
    phone.style.border = "red";
    isPhone = false;
  } else {
    // 手机号匹配规则
    var reg = /1[3578][0-9]{9}$/;
    console.log(phone.value);
    var rs = reg.test(phone.value);
    if (rs) {
      div[0].innerHTML = '<img width=20px heigth=20px src="ok.jpg">';
      isPhone = true;
    } else {
      div[0].innerText = "手机号不合法！";
      console.log(div[0].textContent);
      div[0].style.color = "red";
      phone.style.boder = "red";
      isPhone = false;
    }
  }
}

//
