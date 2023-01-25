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

  let content = '';

  taskList.forEach((task, id) => {
    content += `
    <li class="list-items">
    <div class="render-div">
      <input class="check" type="checkbox">
      <input class="task-description" id="task${id}" value=${task.description} />
    </div>
    <div class="icon-content">
      <i id="removeTask${id}" class="sective fa-solid fa-trash-can"></i>
    </div>
  </li>`;
  });

  ulContainer.innerHTML = content;

  taskList.forEach((task, index) => {
    const removeTask = document.getElementById(`removeTask${task.index}`);
    if (removeTask) {
      removeTask.addEventListener('click', () => {
        Features.removeTask(index);
        removeTask.remove();
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
