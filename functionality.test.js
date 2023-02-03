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
    expect(newFeatures.tskListArr()).not.toHaveLength(1);
  });
});

describe('remove completed, update and edit', () => {
  test('check if task description is updated', () => {
    newFeatures.addTaskList('Wash car');
    newFeatures.updateTask('Eat', 0);
    expect(newFeatures.tskListArr()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          description: 'Eat',
        }),
      ]),
    );
  });

  test('check if task is marked as completed', () => {
    newFeatures.completedTask(0);
    expect(newFeatures.tskListArr()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          completed: true,
        }),
      ]),
    );
  });

  test('tests removing completed functions', () => {
    newFeatures.completedTask(0);
    newFeatures.removeCompletedTask();
    expect(newFeatures.tskListArr()).toHaveLength(0);
  });
});