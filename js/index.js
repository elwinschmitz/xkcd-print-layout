var xmlhttp = new XMLHttpRequest();
var url = 'info.0.json';

xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var responseArray = JSON.parse(xmlhttp.responseText);
    parseJSON(responseArray);
  }
};

xmlhttp.open('GET', url);
xmlhttp.send(null);

function parseJSON(arr) {
  document.getElementsByTagName('title')[0].innerHTML = arr['title'];
  document.getElementsByTagName('h1')[0].innerHTML = arr['title'];
  document.getElementsByTagName('img')[0].setAttribute('src', arr['img']);
  document.getElementById('alt').innerHTML = arr['alt'];
  document.getElementById('num').innerHTML = arr['num'];
}
