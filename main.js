var url = 'https://thomasjkane67.github.io/json/'
var myBooks = new XMLHttpRequest();
myBooks.open('GET', url);
myBooks.onliad = function() {
  console.log(myBooks.responseText);
};
myBooks.send();

