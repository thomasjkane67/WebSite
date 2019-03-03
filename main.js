var url = 'https://thomasjkane67.github.io/json/Books.json'
var NetMap = new XMLHttpRequest();
NetMap.open('GET', url);
NetMap.onload = function() {
  var NetMapData = JSON.parse(NetMap.responseText);
  console.log(NetMapData[0]);
};
NetMap.send();

