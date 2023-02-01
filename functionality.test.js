/** * @jest-environment jsdom */

import Features, { taskList } from './src/module/functionality.js';

const newFeatures = new Features();

describe('check addition and removal of tasks', () => {
  test('testing for adding task', () => {
    newFeatures.addTaskList('task');
    expect(taskList).toHaveLength(1);
  });

  test('delete task from task list', () => {
    newFeatures.removeTask('index');
    expect(taskList).not.toHaveLength(1)
  })
});
