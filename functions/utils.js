const fs = require('fs');
const { default: stringArgv } = require('string-argv');

function checkTodoStorage() {
    if (!fs.existsSync('todos.json')) fs.writeFileSync('todos.json', '[{"index": 0}]')
}

function readData() {
    let readData = fs.readFileSync('todos.json', 'utf8');
    return JSON.parse(readData);
}

function saveData(todos) {
    let dataToSave = JSON.stringify(todos);
    fs.writeFileSync('todos.json', dataToSave);
}

function checkInput(input) {
    let trimmed = input.trim();
    return stringArgv(trimmed);
}

module.exports = { checkTodoStorage, readData, saveData, checkInput };