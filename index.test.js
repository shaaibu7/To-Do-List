/** * @jest-environment jsdom */
import Features from './src/module/functionality.js';

const newFeatures = new Features();

describe('test dom manipulation', () => {
  test('testing addition of list items', () => {
    document.body.innerHTML = `
    <input type="text" id="task-input" />
    <ul class="list-content" id="ul-element">
  
    </ul>
  `;

    const taskInput = document.getElementById('task-input');
    const ulContainer = document.getElementById('ul-element');

    const listItem = document.createElement('li');
    listItem.textContent = `${taskInput.value}`;
    ulContainer.appendChild(listItem);
    const list = document.querySelectorAll('li');

    function taskValue(task) {
      taskInput.value = task;
    }
    // const taskInput = document.getElementById('task-input');
    newFeatures.addTaskList(taskValue('testing'));

    expect(list).toHaveLength(1);
  });

  test('testing removal of task', () => {
    document.body.innerHTML = `
    <input type="text" id="task-input" value="software" />
    <ul class="list-content" id="ul-element">
  
    </ul>
  `;

    const taskInput = document.getElementById('task-input');

    // const listItem = document.createElement('li');
    // listItem.textContent = `${taskInput.value}`;
    // ulContainer.appendChild(listItem);
    const list = document.querySelectorAll('li');
    newFeatures.addTaskList(taskInput.value);
    newFeatures.removeTask('index');

    expect(list).toHaveLength(0);
  });
});
