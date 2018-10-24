function ShowAuthorsModal()
{
  Library.call(this); //resets context
};

//Creates new library object
ShowAuthorsModal.prototype = Object.create(Library.prototype);

ShowAuthorsModal.prototype.init = function()
{
  this._bindEvents();
};

ShowAuthorsModal.prototype._bindEvents = function () {
  this.$showAuthorsButton = $("#show-authors-button");
  this.$showAuthorsButton.on('click',$.proxy(this._handleShowAuthors,this));
}

ShowAuthorsModal.prototype._handleShowAuthors = function () {
  this._displayAuthors(this.getAuthors());
}

ShowAuthorsModal.prototype._displayAuthors = function (authors) {
  var content = "";
  $.each(authors, function (index,value) {
    content += "<li>"+value.author+"</li>";
  });
  $("#author-list").html(content);
}

$(function()
{
  window.gShowAuthorsModal = new ShowAuthorsModal();
  window.gShowAuthorsModal.init();
});
