let filterInput = document.getElementById("filterInput");
filterInput.addEventListener("keyup", filterNames);

function filterNames() {
  let filterValue = document.getElementById("filterInput").value.toUpperCase();
  let ul = document.getElementById("names");
  let li = ul.querySelectorAll("li.collection-item");

  li.forEach(function(li) {
    var a = li.getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li.style.display = "";
    } else {
      li.style.display = "none";
    }
  });
}
