function ShowAuthorsModal()
{
  Library.call(this); //resets context
};

//Creates new library object
ShowAuthorsModal.prototype = Object.create(Library.prototype);

ShowAuthorsModal.prototype.init = function()
{
};
