function SuggestBooksModal()
{
  Library.call(this); //resets context
};

//Creates new library object
SuggestBooksModal.prototype = Object.create(Library.prototype);

SuggestBooksModal.prototype.init = function()
{
};
