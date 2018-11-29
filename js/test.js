function testfnc2(){
alert('hi');
}

function testfnc(){
  // 내 github에 있는 json 파일 url 받아서 업로드
  var requestURL = 'https://raw.githubusercontent.com/ojin0611/linkbook/master/json/init.json';

  var request = new XMLHttpRequest();
  request.open('GET', requestURL);

  // json 타입의 파일을 받을 것입니다.
  request.responseType = 'json';
  request.send();

  // waiting for the response to return from the server, then dealing with it
  request.onload = function() {

    // initjson에서 jsonObj 얻는다.
    var myjson = request.response;
    myjson.category[myjson.category.length]='Added!';
    alert(    myjson.category[myjson.category.length]);
  }

}
