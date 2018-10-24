function AddBooksModal()
{
  Library.call(this); //resets context
  this.$container = $('#add-books-modal');
};

var queueArray = [];

//Creates new library object
AddBooksModal.prototype = Object.create(Library.prototype);

AddBooksModal.prototype.init = function()
{
  this._bindEvents();
  this._bindCustomListeners();
};

AddBooksModal.prototype._bindEvents = function ()
{
  this.$queueBookButton = $("#queue-book-button");
  this.$addBooksButton = $("#add-books-button");
  this.$addBooksModalButton = $("#add-books-modal-button");
  this.$closeButton = $("#close-button");

  this.$addBooksModalButton.on('click',$.proxy(this._handleAddBooksModal,this));
  this.$queueBookButton.on('click',$.proxy(this._handleQueueBooks,this));
  this.$addBooksButton.on('click',$.proxy(this._handleAddBooks,this));
  this.$closeButton.on('click',$.proxy(this._handleCloseModal,this));
}

AddBooksModal.prototype._bindCustomListeners = function () {
  $(document).on('change', this._handleImageUpload);
}

AddBooksModal.prototype._handleAddBooksModal = function () {
  var queueArray = [];
  $("#add-books-counter").text(queueArray.length);
  this._resetForms();
}

// AddBooksModal.prototype._handleCloseModal = function () {
//   queueArray = [];
//   $("#add-books-counter").text(queueArray.length);
// }

AddBooksModal.prototype._handleQueueBooks = function (e)
{
  e.preventDefault();
  var book = $("#add-book").serializeArray();
  var src = $("#addBookCoverImage").attr("src");
  var myObj = {};
  myObj.cover = src;
  $.each(book, function(i, object) {
    myObj[object.name] = object.value;
  });
  var newBook = new Book(myObj);
  queueArray.push(newBook);
  $("#add-books-counter").text(queueArray.length);
  this._resetForms();
};

AddBooksModal.prototype._handleAddBooks = function () {
  this.addBooks(queueArray);
  this.handleEventTrigger('objUpdate', window.bookShelf);
}

AddBooksModal.prototype._resetForms = function () {
  var addFormElement = $("#add-book")[0];
  var removeFormElement = $("#remove-book")[0];
  addFormElement.reset();
  removeFormElement.reset();
}
//Use the function below to add cover art as a base64 encoded string
//https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
//If you get stuck reference the documents in the link above
AddBooksModal.prototype._handleImageUpload = function ()
{
  var preview = document.querySelector('#addBookCoverImage');
  var file = document.querySelector('input[type=file]').files[0];
  var reader = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    return reader.readAsDataURL(file);
  }
};

$(function()
{
  window.gAddBooksModal = new AddBooksModal();
  window.gAddBooksModal.init();
});
