document.addEventListener("DOMContentLoaded", function () {
    const inputValue = document.getElementById("input-value");
    const taskBtn = document.getElementById("task-btn");
    const contentContainer = document.getElementById("content-container");
    const clearBtn = document.getElementById("clear-btn");
    let taskCount = 0;
  
    // Function to add a new task
    function addTask() {
      const taskText = inputValue.value.trim();
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }
      taskCount++;
  
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <th>${taskCount}</th>
        <td>${taskText}</td>
        <td>
          <button class="btn btn-xs btn-error delete-btn">Delete</button>
        </td>
      `;
  
      contentContainer.appendChild(tr);
      inputValue.value = "";
      inputValue.focus();
  
      // Attach delete event to the new button
      tr.querySelector(".delete-btn").addEventListener("click", function () {
        tr.remove();
        taskCount--;
        updateTaskNumbers();
      });
    }
  
    // Function to update task numbers after deletion
    function updateTaskNumbers() {
      const rows = contentContainer.querySelectorAll("tr");
      taskCount = 0;
      rows.forEach((row, index) => {
        row.querySelector("th").textContent = index + 1;
        taskCount++;
      });
    }
  
    // Function to clear all tasks
    function clearAllTasks() {
      contentContainer.innerHTML = "";
      taskCount = 0;
    }
  
    // Event listeners
    taskBtn.addEventListener("click", addTask);
    clearBtn.addEventListener("click", clearAllTasks);
  
    // Allow Enter key to add task
    inputValue.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        addTask();
      }
    });
  });
  