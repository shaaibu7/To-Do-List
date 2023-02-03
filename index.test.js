/** * @jest-environment jsdom */
import Features from './src/module/functionality.js';

const newFeatures = new Features();

document.body.innerHTML = `
<input type="text" id="task-input" value="hello wolrd" />
<ul class="list-content" id="ul-element">

</ul>
`;

test('testing addition of list items', () => {
  const taskInput = document.getElementById('task-input');
  const ulContainer = document.getElementById('ul-element');

  const listItem = document.createElement('li');
  listItem.textContent = `${taskInput.value}`;
  ulContainer.appendChild(listItem);
  const list = document.querySelectorAll('li');

  // const taskInput = document.getElementById('task-input');
  newFeatures.addTaskList(taskInput.value);

  expect(list).toHaveLength(1);
});