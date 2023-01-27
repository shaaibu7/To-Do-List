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

  static completedTask = (index) => {
    taskList = Storage.getLocalStorage();
    taskList[index].completed = true;
    Storage.saveLocalStorage(taskList);
  }

  static uncompletedTask = (index) => {
    taskList = Storage.getLocalStorage();
    taskList[index].completed = false;
    Storage.saveLocalStorage(taskList);
  }

  static reconfigure = () => {
    taskList.forEach((element, position) => {
      element.index = position;
    });
  }

  static removeCompletedTask = () => {
    taskList = Storage.getLocalStorage();
    taskList = taskList.filter((item) => item.completed === false);
    this.reconfigure();
    Storage.saveLocalStorage(taskList);
  }
}