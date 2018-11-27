/******************* 처음 시작 시 링크 설정 *******************/
function initSettingFnc(){
  var header = document.querySelector('header');
  var section = document.querySelector('section');

  // 내 github에 있는 json 파일 url 받아서 업로드
  var requestURL = 'https://raw.githubusercontent.com/ojin0611/linkbook/master/init.json';

  var request = new XMLHttpRequest();
  request.open('GET', requestURL);

  // json 타입의 파일을 받을 것입니다.
  request.responseType = 'json';
  request.send();

  // waiting for the response to return from the server, then dealing with it
  request.onload = function() {
    // initjson에서 jsonObj 얻는다.
    var initlinkjson = request.response;
    setCategoryLink(initlinkjson,header,section);
  }
}
//  fill the <header> with the correct data
function setCategoryLink(jsonObj,header,section) {
  // Category Setting
  var title_category = document.createElement('h3');
  title_category.textContent = "Category List";
  header.appendChild(title_category);

  // 요소 추가
  var categories = jsonObj['category'];
  var init_category = document.createElement('ul');
  for(var j = 0; j < categories.length; j++) {
    var listItem = document.createElement('li');
    listItem.textContent = categories[j];
    init_category.appendChild(listItem);
  }
  header.appendChild(init_category);

  // Links Setting
  var title_link = document.createElement('h3');
  title_link.textContent = "Link List";
  section.appendChild(title_link);


  // 요소 추가
  var links = jsonObj['links'];
  var init_links = document.createElement('ol');

  for(var j = 0; j < links.length; j++) {
    var listItem = document.createElement('li');
        init_links.appendChild(listItem);

    var listhref = document.createElement('a');
    // textContent는 title
    listhref.textContent = links[j];
    listhref.setAttribute('href',links[j]);
    listItem.appendChild(listhref);


  }
  section.appendChild(init_links);
}
