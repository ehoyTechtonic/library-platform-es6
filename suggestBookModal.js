function SuggestBooksModal()
{
  Library.call(this); //resets context
};

//Creates new library object
SuggestBooksModal.prototype = Object.create(Library.prototype);

SuggestBooksModal.prototype.init = function()
{
  this._bindEvents();
};

SuggestBooksModal.prototype._bindEvents = function () {
  this.$randomBookButton = $("#random-book-button");
  this.$randomBookButton.on('click',$.proxy(this._handleRandomBook,this));
}

SuggestBooksModal.prototype._handleRandomBook = function () {
  this._displayRandomBook(this.getRandomBook());
}

SuggestBooksModal.prototype._displayRandomBook = function (book) {
  var cover = book.cover;
  var img = "<img class='tableImg' src='"+cover+"'>";
  $(".book-cover").html(img);
  var info = "<p>"+book.title+"</p>";
  info += "<p>"+book.author+"</p>";
  info += "<p>"+book.rating+"</p>";
  info += "<p>"+book.numberOfPages+"</p>";
  info += "<p>"+book.publishDate+"</p>";
  info += "<p>"+book.synopsis+"</p>";
  $(".modal-sidebar").html(info);
}

$(function()
{
  window.gSuggestBooksModal = new SuggestBooksModal();
  window.gSuggestBooksModal.init();
});
