const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveToLocalStorage();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveToLocalStorage();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveToLocalStorage();
    }
  },
  false
);

inputBox.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function saveToLocalStorage() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function displayList() {
  listContainer.innerHTML = localStorage.getItem("data");
}

displayList();
