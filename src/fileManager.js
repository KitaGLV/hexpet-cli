import fs from 'fs';

export const filePath = 'hexpet.json';

export function createJSON(path, data) {
  const JsonData = JSON.stringify(data);
  fs.writeFileSync(path, JsonData);
}

export function readJSON(path) {
  const data = fs.readFileSync(path, 'utf-8');
  return JSON.parse(data);
}

export function updateJSON(path, data) {
  const JsonData = JSON.stringify(data);
  fs.writeFileSync(path, JsonData);
}
