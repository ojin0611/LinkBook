function successHandler(data) {
//  $("#reply").append(JSON.stringify(data.category));
  alert("json의 key: "+Object.keys(data));
}

function testfnc(){
  getJsonData(successHandler);
  // 나중에 getJsonData(myfunction)에서
  // myfunction에 원하는 처리를 넣기만 하면 됨!
}

var url="https://raw.githubusercontent.com/ojin0611/linkbook/master/json/init.json";

function getJsonData(handler) {
  $.getJSON(url, function (data) {
      handler(data);
    }
  );
}

// function: Add button
function addLink(){
  $("section").children('ol').append("<li>New link</li>");
}

function addCategory(){
  $("header").children('ul').append("<li>New category</li>");
}

function setLink(data){
  $("section").append("<ol></ol>")
  for(var i=0; i<data.links.length; i++){
    $("section ol").append(
      $('<li>').append(
        $('<a>').attr('href',data.links[i].link).append(
          data.links[i].title
        )
      )
    );

  }
}

function setCategory(data){
  $("header").append("<ul></ul>")
  for(var i=0; i<data.category.length; i++){
    $("header ul").append(
      $('<li>').append(
        data.category[i]
      )
    );
  }
}


/******************* 처음 시작 시 링크 설정 *******************/
function initSettingFnc(){
  // Category Setting
  var title_category = document.createElement('h3');
  title_category.textContent = "Category List";
  $("header").append(title_category);

  // Links Setting
  var title_link = document.createElement('h3');
  title_link.textContent = "Link List";
  $("section").append(title_link);


  getJsonData(setCategory);
  getJsonData(setLink);
}
