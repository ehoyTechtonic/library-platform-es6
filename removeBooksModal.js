function RemoveBooksModal()
{
  Library.call(this); //resets context
  this.$container = $('#remove-books-modal');
};

//Creates new library object
RemoveBooksModal.prototype = Object.create(Library.prototype);

RemoveBooksModal.prototype.init = function()
{
  this._bindEvents();
};

RemoveBooksModal.prototype._bindEvents = function () {
  this.$removeBooksButton = $("#remove-books-button");
  this.$removeBookButton = $("#remove-book-button");

  this.$removeBooksButton.on('click',$.proxy(this._handleRemoveBooks,this));
  this.$removeBookButton.on('click',$.proxy(this._handleRemoveBook,this));
}

RemoveBooksModal.prototype._handleRemoveBooks = function () {
  var formElement = $("#remove-book")[0];
  formElement.reset();
}

RemoveBooksModal.prototype._handleRemoveBook = function () {
  title = $("#title-remove-input").val();
  author = $("#author-remove-input").val();
  if (title) {
    this.removeBookByTitle(title);
  }
  if (author) {
    this.removeBookByAuthor(author);
  }
  this.handleEventTrigger('objUpdate', window.bookShelf);
}

$(function()
{
  window.gRemoveBooksModal = new RemoveBooksModal();
  window.gRemoveBooksModal.init();
});
