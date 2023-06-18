import fs from 'fs';

const filePath = 'hexpet.json';

function createDefaultJSON(path) {
  const defaultJson = JSON.stringify({ tasks: [] });
  fs.writeFileSync(path, defaultJson);
}

function getParseJSON(path) {
  const data = fs.readFileSync(path, 'utf8');
  return JSON.parse(data);
}

// Test

createDefaultJSON(filePath);
console.log(getParseJSON(filePath));
