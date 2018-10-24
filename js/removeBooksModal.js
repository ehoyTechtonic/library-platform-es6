function RemoveBooksModal()
{
  Library.call(this); //resets context
};

//Creates new library object
RemoveBooksModal.prototype = Object.create(Library.prototype);

RemoveBooksModal.prototype.init = function()
{

};
