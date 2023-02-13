const todo1 = "Todo 1";
const todo1Completed = false;

const todo2 = "Todo 2";
const todo2Completed = true;

const todo3 = "Todo 3";
const todo3Completed = false;

const todo4 = "Todo 4";
const todo4Completed = true;

function setTodosList() {
  var embebedHtml = "";
  var incompleteCount = 0;
  var completeCount = 0;
  if (todo1Completed) {
    completeCount++;
    embebedHtml += "<p class='completed todo-task'>" + todo1 + "</p>";
  } else {
    incompleteCount++;
    embebedHtml +=
      "<p class='not-completed todo-task'>" +
      incompleteCount +
      ". " +
      todo1 +
      "</p>";
  }

  if (todo2Completed) {
    completeCount++;
    embebedHtml += "<p class='completed todo-task'>" + todo2 + "</p>";
  } else {
    incompleteCount++;
    embebedHtml +=
      "<p class='not-completed todo-task'>" +
      incompleteCount +
      ". " +
      todo2 +
      "</p>";
  }

  if (todo3Completed) {
    completeCount++;
    embebedHtml += "<p class='completed todo-task'>" + todo3 + "</p>";
  } else {
    incompleteCount++;
    embebedHtml +=
      "<p class='not-completed todo-task'>" +
      incompleteCount +
      ". " +
      todo3 +
      "</p>";
  }

  if (todo4Completed) {
    completeCount++;
    embebedHtml += "<p class='completed todo-task'>" + todo4 + "</p>";
  } else {
    incompleteCount++;
    embebedHtml +=
      "<p class='not-completed todo-task'>" +
      incompleteCount +
      ". " +
      todo4 +
      "</p>";
  }

  embebedHtml += `<p><b>Tareas pendientes:</b> ${incompleteCount}/${
    completeCount + incompleteCount
  } </p>`;

  document.getElementById("todos-container").innerHTML = embebedHtml;
}

setTodosList();
