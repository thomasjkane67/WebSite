var url = 'https://thomasjkane67.github.io/json/Books.json'
var myBooks = new XMLHttpRequest();
myBooks.open('GET', url);
myBooks.onliad = function() {
  console.log(myBooks[0]);
};
myBooks.send();

