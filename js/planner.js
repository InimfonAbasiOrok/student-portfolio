let tasks = [];

// =============================
// Load saved tasks
// =============================

document.addEventListener("DOMContentLoaded", () => {
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
  }

  document.getElementById("add-task").addEventListener("click", addTask);

  renderTasks();
});

// =============================
// Save Tasks
// =============================

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// =============================
// Add Task
// =============================

function addTask() {
  const input = document.getElementById("task-input");

  const text = input.value.trim();

  if (text === "") return;

  tasks.push({
    text,
    completed: false,
  });

  input.value = "";

  saveTasks();

  renderTasks();
}
const input = document.getElementById("task-input");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
// =============================
// Toggle Complete
// =============================

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;

  saveTasks();

  renderTasks();
}

// =============================
// Delete Task
// =============================

function deleteTask(index) {
  tasks.splice(index, 1);

  saveTasks();

  renderTasks();
}

// =============================
// Render Tasks
// =============================

function renderTasks() {
  const taskList = document.getElementById("task-list");

  const completedList = document.getElementById("completed-list");

  taskList.innerHTML = "";

  completedList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span class="task-text">
        ${task.text}
      </span>

      <button class="delete-btn">
        ✕
      </button>
    `;

    // Toggle task
    li.querySelector(".task-text").onclick = () => toggleTask(index);

    // Delete task
    li.querySelector(".delete-btn").onclick = (event) => {
      event.stopPropagation();

      deleteTask(index);
    };

    if (task.completed) {
      li.classList.add("completed");

      completedList.appendChild(li);
    } else {
      taskList.appendChild(li);
    }
  });

  updateStats();

  updateProgress();
}

// =============================
// Statistics
// =============================

function updateStats() {
  const total = tasks.length;

  const completed = tasks.filter((task) => task.completed).length;

  const pending = total - completed;

  document.getElementById("total-tasks").textContent = total;

  document.getElementById("completed-tasks").textContent = completed;

  document.getElementById("pending-tasks").textContent = pending;
}

// =============================
// Progress Ring
// =============================

function updateProgress() {
  const total = tasks.length;

  const completed = tasks.filter((task) => task.completed).length;

  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  document.getElementById("progress-percent").textContent = percent + "%";

  const circle = document.querySelector(".progress-circle");

  const circumference = 440;

  circle.style.strokeDashoffset =
    circumference - (percent / 100) * circumference;
}
