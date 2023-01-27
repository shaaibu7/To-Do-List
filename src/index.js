import './style.css';
import Features from './module/functionality.js';
import Storage from './module/localstorage.js';

const ulContainer = document.querySelector('.list-content');

const renderTasks = () => {
  let taskList;

  if (Storage.getLocalStorage() === null) {
    taskList = [];
  } else {
    taskList = Storage.getLocalStorage();
  }

  let checking = '';
  let content = '';

  taskList.forEach((task, id) => {
    if (task.completed === false) {
      checking = '';
    } else {
      checking = 'checked';
    }

    content += `
    <li class="list-items">
    <div class="render-div">
      <input ${checking} class="check" type="checkbox" id="check${id}">
      <input class="task-description active" id="task${id}" value=${task.description} />
    </div>
    <div class="icon-content">
      <i id="removeTask${id}" class="sective fa-solid fa-trash-can"></i>
    </div>
  </li>`;
  });

  ulContainer.innerHTML = content;

  taskList.forEach((task, index) => {
    const removeTask = document.getElementById(`removeTask${index}`);
    if (removeTask) {
      removeTask.addEventListener('click', () => {
        Features.removeTask(index);
        renderTasks();
      });
    }
  });

  taskList.forEach((tasking, index) => {
    const updatedInput = document.getElementById(`task${tasking.index}`);
    if (updatedInput) {
      updatedInput.addEventListener(('keydown'), (e) => {
        if (e.code === 'Enter') {
          e.preventDefault();
          Features.updateTask(updatedInput.value, index);
          renderTasks();

          updatedInput.value = '';
        }
      });
    }
  });

  taskList.forEach((item, index) => {
    const checkElement = document.getElementById(`check${index}`);
    checkElement.addEventListener('change', () => {
      if (!(checkElement.checked)) {
        Features.uncompletedTask(index);
      } else {
        Features.completedTask(index);
      }
      renderTasks();
    });
  });
};

renderTasks();

const task = document.getElementById('task');
task.addEventListener(('keydown'), (event) => {
  if (event.code === 'Enter') {
    event.preventDefault();
    Features.addTaskList(task.value);
    renderTasks();

    task.value = '';
  }
});

const ClearCompletedTasks = document.getElementById('clearall');

ClearCompletedTasks.addEventListener('click', () => {
  Features.removeCompletedTask();
  renderTasks();
});
