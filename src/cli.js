import readline from 'readline';
import commandHandler from './todo.js';
import { filePath, updateJSON } from './fileManager.js';
import { workData } from './todo.js';

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function startCli() {
  const welcomeMessage = 'Добро пожаловать в менеджер задач HexPet!\n';
  const commandsMessage = `Доступные команды:

  add <название задачи> — добавить задачу в список
  remove <числовой индекс задачи> — удалить задачу по индексу
  list — вывести список задач
  clear — очистить список задач
  exit — завершить работу\n`;

  console.log(welcomeMessage);
  console.log(commandsMessage);

  rl.setPrompt('Введите команду: ');
  rl.prompt();

  rl.on('line', (input) => {
    commandHandler(input.trim());
    rl.prompt();
  });

  rl.on('close', () => {
    console.log('\n\nДо свидания!');
    updateJSON(filePath, workData);
    process.exit(0);
  });
}
