document.getElementById('name').value = "";

function myFunction(){
  var personName = document.getElementById('name').value;
  document.getElementById('js').innerHTML = "Hello " + personName +
  ", welcome to the webpage";
}
