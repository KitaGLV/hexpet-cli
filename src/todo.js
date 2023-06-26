import fs from 'fs';
import { rl } from './cli.js';
import { filePath, createJSON, readJSON, updateJSON } from './fileManager.js';

if (!fs.existsSync(filePath)) {
  createJSON(filePath, { tasks: [] });
}

export const workData = readJSON(filePath);

function addTask(task) {
  workData.tasks.push(task);
  console.log(`Задача "${task}" добавлена в список.\n`);
}

function removeTask(index) {
  if (index >= 0 && index < workData.tasks.length) {
    const removedTask = workData.tasks.splice(index, 1);
    console.log(`Задача "${removedTask}" удалена из списка.\n`);
  } else {
    console.log('Недопустимый индекс задачи.\n');
  }
}

function showTasks() {
  console.log('Список задач:\n');
  if (workData.tasks.lenth === 0) {
    console.log('Список задач пуст.\n');
  } else {
    for (let i = 0; i < workData.tasks.length; i += 1) {
      console.log(`${i}. ${workData.tasks[i]}`);
      if (i === workData.tasks.length - 1) {
        console.log();
      }
    }
  }
}

function clearTasks() {
  workData.tasks.splice(0, workData.tasks.length);
  console.log('Список задач очищен.\n');
}

export default function commandHandler(command) {
  const parts = command.split(' ');
  const action = parts[0];
  const task = parts.slice(1).join(' ');
  const index = parseInt(parts[1], 10);

  switch (action) {
    case 'add':
      addTask(task);
      break;
    case 'remove':
      removeTask(index);
      break;
    case 'list':
      showTasks();
      break;
    case 'clear':
      clearTasks();
      break;
    case 'exit':
      updateJSON(filePath, workData);
      rl.close();
      break;
    default:
      console.log('Недопустимая команда. Доступные команды:\n add, remove, list, clear, exit.\n');
  }
}
