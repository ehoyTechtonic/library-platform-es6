function Book()
{
  Library.call(this); //resets context
  // this.$container = $('#add-books-modal');
};

Book.prototype.init = function () {
  this._bindEvents();
}
/*Constructor for Book class - no methods yet*/
var Book = function (oArgs)
{
  this.cover = oArgs.cover;
  this.title = oArgs.title; //Required
  this.author = oArgs.author; //Required
  this.synopsis = oArgs.synopsis;
  this.numberOfPages = oArgs.numberOfPages; //Required
  this.publishDate = new Date(String(oArgs.publishDate)).getUTCFullYear(); //Required
  this.rating = oArgs.rating;
  return false;
};

Book.prototype.editBook = function(oBook) {
  if (oBook.title) {
    console.log(this.title);
    this.title = oBook.title;
  }
  if (oBook.author) {
    this.author = oBook.author;
  }
  if (oBook.numberOfPages) {
    console.log(this.numPages);
    this.numberOfPages = oBook.numberOfPages;
  }
  return this;
}

// Book.prototype._bindEvents = function () {
//   this.$editBook = $(".edit-book");
//   this.$editBook.on('click',$.proxy(this._handleEditBook,this));
//
// }

// Book.prototype._handleEditBook = function () {
//   // for(var key in book){
//   //   var td = $('<td>');
//   //   if (key === 'cover') {
//   //     var img = $('<img>').addClass('tableImg').attr('src', book[key]);
//   //     $(td).html(img);
//   //   } else if(key === 'rating'){
//   //     $(td).html(this._stars(book[key]));
//   //   } else if(key === 'editBook') {
//   //     $(td).html('<button class="edit-book">Edit</button>');
//   //   } else {
//   //     $(td).html(key === 'synopsis' ? book[key].substring(0,85) + "..." : "<input type='text' value='book[key]'");
//   //   }
//   //   tr.append(td);
//   // }
//   for (var key in book) {
//     alert(book[key]);
//   };
// }
$(function()
{
  window.gBook = new Book({});
  window.gBook.init();
});
