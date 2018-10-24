function AddBooksModal()
{
  Library.call(this); //resets context
};

//Creates new library object
AddBooksModal.prototype = Object.create(Library.prototype);

AddBooksModal.prototype.init = function()
{

};

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
