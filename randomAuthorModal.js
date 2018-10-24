function RandomAuthorModal()
{
  Library.call(this); //resets context
  this.$container = $('#author-display-modal');
};

//Creates new library object
RandomAuthorModal.prototype = Object.create(Library.prototype);

RandomAuthorModal.prototype.init = function()
{
  this._bindEvents();
};

RandomAuthorModal.prototype._bindEvents = function () {
  this.$randomAuthorButton = $("#random-author-button");
  this.$randomAuthorButton.on('click',$.proxy(this._handleRandomAuthor,this));
}

RandomAuthorModal.prototype._handleRandomAuthor = function () {
  this._displayRandomAuthor(this.getRandomAuthorName());
}

RandomAuthorModal.prototype._displayRandomAuthor = function (author) {
  var content = "";
  $("#author-list").html("<li>"+author+"</li>");
}

$(function()
{
  window.gRandomAuthorModal = new RandomAuthorModal();
  window.gRandomAuthorModal.init();
});
