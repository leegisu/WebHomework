document.addEventListener("DOMContentLoaded", function(event) {
  console.log("Dom Loading Completed!!");

  excuteEvent();
});

function excuteEvent() {
  var position_div = document.querySelector("#position");
  var friend_div = document.querySelector("#friend");
  var theme_div = document.querySelector("#theme");
  var news_div = document.querySelector("#news");
  
  position_div.addEventListener("click", showEventType);
  friend_div.addEventListener("click", showEventType);
  theme_div.addEventListener("click", showEventType);
  news_div.addEventListener("click", showEventType);
}

function showEventType(evt) {

console.log(evt.toElement.parentNode.id);

var div_name = evt.toElement.innerText;

if(div_name=="aboutMe"){

  var sendURL = "http://jsonplaceholder.typicode.com/posts/1";
  if(evt.type === "click") {
  ajaxtest(sendURL,this);
  }

  
}else if(div_name=="friend"){

  var sendURL = "http://jsonplaceholder.typicode.com/posts/2";
  if(evt.type === "click") {
  ajaxtest(sendURL ,this);
  }

  
}else if(div_name=="lorem"){

  var sendURL = "http://jsonplaceholder.typicode.com/posts/3";
  if(evt.type === "click") {
  ajaxtest(sendURL,this);
  }
  
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

  var currentTab = document.querySelector(".selectedTab");
  currentTab.classList.remove("selectedTab");
 
  div.classList.add("selectedTab");

  
  var showTitle = document.querySelector(".myName");// 제목 바꾸기
  showTitle.innerHTML = title;

  var showContent = document.querySelector(".myDesc");//내용 바꾸기
  showContent.innerHTML = body;

}
