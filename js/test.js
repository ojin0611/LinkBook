function testfnc(){
  var myjson = getJsonData();
  //  return json;
  alert(Object.keys(myjson));
}

var url="https://raw.githubusercontent.com/ojin0611/linkbook/master/json/init.json";

function getJsonData(){
  $.getJSON(
    url, function (data) {
      data.category.push('New Category')
      $("#reply").append(JSON.stringify(data.category));
//      alert(Object.keys(data))
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


  $.getJSON(
    url, function (data) {
      for(var i=0; i<data.category.length; i++){
        $("header").after("<li>"+data.category[i]+"</li>");
      }
    }
  );

  $.getJSON(
    url, function (data) {
      for(var i=0; i<data.links.length; i++){
        $("section").after("<li><a href="+data.links[i]+
        ">"+data.links[i]+"</a></li>");
      }
    }
  );
}
