export default class Storage {
  static getLocalStorage() {
    return JSON.parse(localStorage.getItem('todoList'));
  }

  static saveLocalStorage(todoList) {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }
}