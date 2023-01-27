import Task from './task.js';
import Storage from './localstorage.js';

let taskList;

if (Storage.getLocalStorage() === null) {
  taskList = [];
} else {
  taskList = Storage.getLocalStorage();
}

export default class Features {
  static addTaskList = (task) => {
    if (task) {
      const newTask = new Task(task);
      taskList.push(newTask);
      taskList.forEach((element, number) => {
        element.index = number + 1;
      });
      Storage.saveLocalStorage(taskList);
    }
  }

  static removeTask = (index) => {
    taskList = Storage.getLocalStorage();
    taskList.splice(index, 1);
    taskList.forEach((task, index) => {
      task.index = index + 1;
    });
    Storage.saveLocalStorage(taskList);
  }

  static updateTask = (newDescribe, index) => {
    taskList = Storage.getLocalStorage();
    taskList[index].description = newDescribe;
    Storage.saveLocalStorage(taskList);
  }
}