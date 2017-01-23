document.addEventListener("DOMContentLoaded", function(event) {
  console.log("Dom Loading Completed!!");

  excuteEvent();
});

function excuteEvent() {
  var position_div = document.querySelector("#position");
  var friend_div = document.querySelector("#friend");
  var theme_div = document.querySelector("#theme");
  var news_div = document.querySelector("#news");
  //console.log("kk");
  position_div.addEventListener("click", showEventType);
  friend_div.addEventListener("click", showEventType);
  theme_div.addEventListener("click", showEventType);
  news_div.addEventListener("click", showEventType);
}

function showEventType(evt) {

console.log(evt.toElement.parentNode.id);

var div_name = evt.toElement.innerText;
// var id_name = evt.toElement.parentNode.id;
// debugger;
if(div_name=="aboutMe"){

  var sendURL = "http://jsonplaceholder.typicode.com/posts/1";
  if(evt.type === "click") {
  ajaxtest(sendURL,this);
  }

  //console.log(div_name);
}else if(div_name=="friend"){

  var sendURL = "http://jsonplaceholder.typicode.com/posts/2";
  if(evt.type === "click") {
  ajaxtest(sendURL ,this);
  }

  //console.log(div_name);
}else if(div_name=="lorem"){

  var sendURL = "http://jsonplaceholder.typicode.com/posts/3";
  if(evt.type === "click") {
  ajaxtest(sendURL,this);
  }
  //console.log(div_name);
}else{

  var sendURL = "http://jsonplaceholder.typicode.com/posts/4";
  if(evt.type === "click") {
  ajaxtest(sendURL,this);
  }
  //console.log(div_name);
}

  //console.log("event type is " + evt.type);
}

function ajaxtest(url, div) {
  function reqListener () {
    // debugger;
    // console.log(this.responseText);
    var json = JSON.parse(this.responseText);
    debugger;
    insertContent(json.title,json.body, div);
  }
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", url);
  oReq.send();
}

function insertContent(title,body,div) {

  // var temp = "#" + id_name;

  var currentTab = document.querySelector(".selectedTab");
  currentTab.classList.remove("selectedTab");
  //var tabColorReset2 = document.querySelector("#news");
  div.classList.add("selectedTab");

  //console.log(temp);
  // tabColorReset1.style.backgroundColor = "blue";
  //tabColorReset2.style.backgroundColor = "white";
//console.log("test");
  var showTitle = document.querySelector(".myName");// 제목 바꾸기
  showTitle.innerHTML = title;

  var showContent = document.querySelector(".myDesc");//내용 바꾸기
  showContent.innerHTML = body;

}
