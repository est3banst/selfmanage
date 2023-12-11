const taskContainer = document.getElementById('task-cont');
const inputTask = document.getElementById('task-input');
const btn = document.getElementById('up-task');


const addTask = () => {
    const taskText = inputTask.value.trim();
    if (taskText !== "") {
        const taskItem = createTask(taskText);
        taskContainer.appendChild(taskItem);
        inputTask.value = "";
    }
}

const createTask = (taskText) => {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
  
    const taskTextSpan = document.createElement("span");
    taskTextSpan.classList.add("span-text");
    taskTextSpan.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-button");
    deleteBtn.addEventListener("click", deleteTask);

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(deleteBtn);

    return taskItem;
    };
const deleteTask = (event) => {
    const taskItem = event.target.parentNode;
    taskContainer.removeChild(taskItem)
}

const toggleTask = (event) => {
    const taskItem = event.target.parentNode;
    taskItem.classList.toggle("completed");
}

taskContainer.addEventListener("change", toggleTask);

btn.addEventListener("click", addTask);
inputTask.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
})

const everyDay = ["Write 50 Lines Of Code", "Push A Commit On Git","Study 1 Hour"];

everyDay.forEach(every => { 
    const taskItem = createTask(every);
    taskContainer.append(taskItem);
});