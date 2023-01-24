import './style.css';
import renderContent from './module/render.js';
import { getLocalStorage, setLocalStorage } from './module/localStorage.js';

// const ulContainer = document.querySelector('.list-content');
const inputData = document.querySelector('.todo-input');
// const btnElement = document.querySelector('.btn');
const mainContainer = document.querySelector('.wrapper');

const todoList = [];

const createTask = () => {
  const taskObject = {};
  taskObject.description = inputData.value;
  taskObject.completed = false;
  taskObject.index = todoList.length;
  inputData.value = '';
  return taskObject;
};

mainContainer.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (inputData.value !== '') {
      const taskObject = createTask();
      renderContent(taskObject);
      todoList.push(taskObject);
      todoList.sort((a, b) => a.index - b.index);
      setLocalStorage(todoList);
      getLocalStorage();
      e.preventDefault();
    }

    if (e.target.className === 'task-description') {
      const element = e.target.parentElement.parentElement.children[1].children[1].id;
      todoList.forEach((elem) => {
        if (elem.index === Number(element)) {
          elem.description = e.target.value;
        }
      });
      setLocalStorage(todoList);
    }
  }
});

const renderContentFromLs = () => {
  if (getLocalStorage() !== '') {
    getLocalStorage().forEach((element) => {
      renderContent(element);
    });
  }
};

renderContentFromLs();

// functionality for deleting task form LS

const retrieveLs = getLocalStorage();
localStorage.setItem('arrayList', JSON.stringify(retrieveLs));

mainContainer.addEventListener('click', (e) => {
  if (e.target.className === 'check') {
    const taskDescription = e.target.parentElement.children[1];
    const checkBox = e.target.parentElement.children[0];

    if (checkBox.checked) {
      taskDescription.classList.toggle('active');
    } else {
      taskDescription.classList.toggle('active');
    }
  }

  if (e.target.classList.contains('fa-ellipsis-vertical')) {
    const threeDots = e.target.parentElement.parentElement.children[1].children[0];

    threeDots.classList.toggle('invisible');

    const deleteItem = e.target.parentElement.parentElement.children[1].children[1];
    deleteItem.classList.toggle('remove');
  }

  if (e.target.classList.contains('fa-trash-can')) {
    const parentElem = e.target.parentElement.parentElement;
    const trash = e.target.id;
    if (todoList > 0) {
      todoList.forEach((elem, index) => {
        if (elem.index === Number(trash)) {
          parentElem.remove();
          todoList.splice(index, 1);
        }
      });

      setLocalStorage(todoList);
    } else {
      retrieveLs.forEach((elem, index) => {
        if (elem.index === Number(trash)) {
          parentElem.remove();
          retrieveLs.splice(index, 1);
        }
      });

      setLocalStorage(retrieveLs);
    }
  }
});
