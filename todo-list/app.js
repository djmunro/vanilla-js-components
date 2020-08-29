var ul = document.getElementById("list");

document.getElementById("add").onclick = function() {
  addTask(ul);
};

function addTask(targetUi) {
  var item = document.getElementById("todoInput").value;
  var text = document.createTextNode(item + " ");
  var newTodo = document.createElement("li");
  var removeButton = document.createElement("button");
  document.getElementById("todoInput").value = "";

  if (item.length === 0) {
    return false;
  }

  removeButton.id = "remove-task";
  removeButton.innerHTML = "DONE!";
  removeButton.setAttribute("onclick", "removeMe(this);");

  newTodo.appendChild(text);
  newTodo.appendChild(removeButton);

  targetUi.appendChild(newTodo);
}

document.getElementById("removeAll").onclick = function() {
  ul.innerHTML = "";
};

function removeMe(item) {
  var parent = item.parentElement;
  parent.parentElement.removeChild(parent);
}
