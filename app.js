const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

//Event listener for add button + creating elements

const crud = function () {
  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  let checkButton = document.createElement("button");

  checkButton.innerHTML = `<i class="fa-solid fa-check">`;
  checkButton.classList.add("checkTask");
  task.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can">`;
  deleteButton.classList.add("deleteTask");
  task.appendChild(deleteButton);

  //making sure it works in a browser

  if (inputTask.value === "") {
    alert("Please enter a task");
  } else {
    taskContainer.appendChild(task);
  }

  inputTask.value = "";

  checkButton.addEventListener("click", function (e) {
    checkButton.parentElement.style.textDecoration =
      checkButton.parentElement.style.textDecoration === "line-through"
        ? ""
        : "line-through";
  });

  deleteButton.addEventListener("click", function (e) {
    let target = e.target;
    target.parentElement.parentElement.remove();
  });
};

addTask.addEventListener("click", function () {
  crud();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    crud();
  }
});
