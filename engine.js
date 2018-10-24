function Library() {};

Library.prototype.handleEventTrigger = function (sEvent,oData)
{
  var oData = oData || {};
  if(sEvent) {
    var event = new CustomEvent(sEvent, {'detail':oData});
    document.dispatchEvent(event);
  }
};

Library.prototype.addBook = function(book)
{
  for(var i = 0; i < window.bookShelf.length; i++) {
    if(book.title.toLowerCase().trim() === window.bookShelf[i].title.toLowerCase().trim()){
      console.log("Sorry " + book.title + " already exists.");
      return false;
    }
  }
  console.log("added " + book.title + " to book shelf");
  window.bookShelf.push(book);
  this.setStorage();
  console.log(book);
  return true;
};

Library.prototype.removeBookByTitle = function(title)
{
  for (var i = 0; i < window.bookShelf.length; i++) {
    if(window.bookShelf[i].title.toLowerCase() === title.toLowerCase()) {
      console.log("removed " + window.bookShelf[i].title + " from book shelf");
      window.bookShelf.splice(i,1);
      this.setStorage();
      return true;
    }
  }
  return false;

};

Library.prototype.removeBookByAuthor = function(author)
{
  var booksRemoved = false;
  for (var i = window.bookShelf.length - 1; i >= 0; i--) {
    if (window.bookShelf[i].author.toLowerCase() === author.toLowerCase()) {
      window.bookShelf.splice(i, 1);
      booksRemoved = true;
      this.setStorage();
    }
  }

  return booksRemoved;
};

Library.prototype.getRandomBook = function()
{
  if(window.bookShelf.length){
    return window.bookShelf[Math.floor(Math.random() * Math.floor(window.bookShelf.length))];
  }

  return null;
};

Library.prototype.getBookByTitle = function(title)
{
  var matchedArr = [];
  for (var i = 0; i < window.bookShelf.length; i++) {
    if(window.bookShelf[i].title.toLowerCase().search(title.toLowerCase()) >= 0){
      matchedArr.push(window.bookShelf[i]);
    }
  }
  return matchedArr;
};

Library.prototype.getBooksByAuthor = function(authorName)
{
  var matchedArr = [];
  for (var i = 0; i < window.bookShelf.length; i++) {
    if(window.bookShelf[i].author.toLowerCase().search(authorName.toLowerCase()) >= 0){
      matchedArr.push(window.bookShelf[i]);
    }
  }
  return matchedArr;
};

Library.prototype.addBooks = function(books)
{
  var counter = 0;
  for (var i = 0; i < books.length; i++) {
    console.log(books[i]);
    if (this.addBook(books[i])) {
      counter++;
    }
  }
  this.setStorage();
  return counter;
};

Library.prototype.getAuthors = function()
{
  if (window.bookShelf.length) {
    return window.bookShelf.unique("author");
  }
  return [];
};

Library.prototype.getRandomAuthorName = function()
{
  if (!window.bookShelf.length) {
    return null;
  } else {
    return window.bookShelf[Math.floor(Math.random() * Math.floor(window.bookShelf.length))].author;
  }
};

Library.prototype.search = function(searchParams)
{
  var bookArray = [];
  function getBookArray(book) {
    $.each(searchParams,function(index,value){
      if (book.title.indexOf(value) > -1) {
        bookArray.push(book);
      }
      if (book.author.indexOf(value) > -1) {
        bookArray.push(book);
      }
    });
  }
  var authorArray = window.bookShelf.filter(getBookArray);
  return bookArray.filter(this.checkDuplicates);
};

Library.prototype.checkDuplicates = function(book,index,self) {
  return self.indexOf(book) === index;
}

Library.prototype.getStorage = function()
{
  var arr = [];
  var parsedObj = JSON.parse(localStorage.getItem("myLibrary"));
  for (var i = 0; i < parsedObj.length; i++) {
    arr.push(new Book(parsedObj[i]));
  }
  return arr;
};

Library.prototype.setStorage = function()
{
  localStorage.setItem('myLibrary', JSON.stringify(window.bookShelf));
  return console.log("STORAGE HAS BEEN SET");
};
