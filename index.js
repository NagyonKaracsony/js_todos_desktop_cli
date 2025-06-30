const Utils = require('./functions/utils');
const Todos = require('./functions/todos');
const prompt = require('prompt-sync')();

var running = true
Utils.checkTodoStorage();
var todoList = Utils.readData();

while (running) {
    let input = prompt('task-cli ');
    let arguments = Utils.checkInput(input);

    if (arguments[0] == "exit") running = false
    else {
        switch (arguments[0]) {
            case "add":
                todoList.push(Todos.addTask(todoList, arguments[1]));
                break;
            case "update":
                Todos.updateTask(todoList, arguments[1], arguments[2]);
                break;
            case "delete":
                Todos.deleteTask(todoList, arguments[1]);
                break;
            case "mark-in-progress":
                Todos.updateStatus(todoList, arguments[1], "in-progress");
                break;
            case "mark-done":
                Todos.updateStatus(todoList, arguments[1], "done");
                break;
            case "list":
                switch (arguments[1]) {
                    case "todo":
                        Todos.listTasks(todoList, "todo");
                        break;
                    case "in-progress":
                        Todos.listTasks(todoList, "in-progress");
                        break;
                    case "done":
                        Todos.listTasks(todoList, "done");
                        break;
                    case "all":
                        Todos.listTasks(todoList, "all");
                        break;
                }
                break;
        }
        Utils.saveData(todoList);
    }
}