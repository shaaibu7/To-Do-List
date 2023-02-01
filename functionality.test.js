/** * @jest-environment jsdom */ 

import Features from "./src/module/functionality";
import { taskList } from "./src/module/functionality";

const newFeatures = new Features();

describe('check addition and removal of tasks', () => {
  test('testing for adding task', () => {
    newFeatures.addTaskList('task');
    expect(taskList).toHaveLength(1);
  })
})


