// 搜索框函数
function changeColor() {
  // var search = document.getElementsByClassName("search");
  // for (var i = 0; i < search.length; i++) {
  //     search[i].style.borderColor = "white";
  // }
  var box = document.getElementsByClassName("vox-3");
  for (var i = 0; i < box.length; i++) {
    box[i].style.borderColor = "red";
  }
}

// 关闭图片
function toClose() {
  var img = document.getElementsByClassName("head-bottom");
  //   console.log(img);
  for (var i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
}

// 综合资讯和软件
// 改变内容
var diamod = document.getElementsByClassName("diamond");
// var news=document.getElementsByClassName("news");
var select;
console.log(diamod);
// console.log(news);
for (var i = 0; i < diamod.length; i++) {
  var num = diamod[i];
  // var newNews=news[i];
  // num.index=i;
  // 鼠标移入事件
  console.log(num);
  num.onmouseover = function() {
    console.log(i);
    // var tmp=news[this.index];
    // 恢复
    // news[select].style.display="none";
    if (select == undefined) {
      select = 0;
    }
    diamod[select].style.backgroundColor = "c6c9c7";
    // 改变
    // tmp.style.display="block";
    this.style.backgroundColor = "21b351";
    select = i;
  }
}
