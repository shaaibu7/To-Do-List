import './style.css';

const container = document.querySelector('.todo-listing');

const todoList = [
  {
    description: 'Read my books',
    completed: true,
    index: 3,
  },
  {
    description: 'Study data structures',
    completed: true,
    index: 1,
  },
  {
    description: 'Learn new coding concepts',
    completed: false,
    index: 2,
  },

];

const renderTask = () => {
  const sortedList = todoList.sort((item1, item2) => item1.index - item2.index);

  for (let i = 0; i < sortedList.length; i += 1) {
    container.innerHTML += `
    <div class="task-container">
      <form class="task-form">
        <input type="checkbox" class="checkbox">
      </form>
    <p class="task-description">${sortedList[i].description}</p>
  </div>
  <hr>
    `;
  }
};

document.addEventListener('DOMContentLoaded', renderTask);