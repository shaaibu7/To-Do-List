/** * @jest-environment jsdom */

import Features from './src/module/functionality.js';

const newFeatures = new Features();

describe('check addition and removal of tasks', () => {
  test('testing for adding task', () => {
    newFeatures.addTaskList('task');
    expect(newFeatures.tskListArr()).toHaveLength(1);
  });

  test('delete task from task list', () => {
    newFeatures.removeTask('index');
    expect(newFeatures.tskListArr()).not.toHaveLength(1)
  })
});
