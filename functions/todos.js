function addTask(todos, description) {
    let index = todos[0].index
    let newTask = {
        id: index + 1,
        description: description,
        status: "todo",
        createdAt: Date.now(),
        updatedAt: null,
    }
    todos[0].index++;
    console.log(`Task added successfully! (ID: ${newTask.id})\n`);
    return newTask;
}

function updateTask(todoList, id, newDescription) {
    const task = todoList.find(task => task.id == id);
    if (task) {
        task.description = newDescription;
        task.updatedAt = Date.now();
        console.log(`Task updated successfully! (ID: ${id})\n`);
    } else throw new Error(`Task with id ${id} not found.`);
}

function deleteTask(todoList, id) {
    const index = todoList.findIndex(task => task.id == id);
    if (index !== -1) {
        const deletedTask = todoList.splice(index, 1)[0];
        console.log(`Task deleted successfully! (ID: ${id})\n`);
    } else throw new Error(`Task with id ${id} not found.`);
}

function updateStatus(todoList, id, newStatus) {
    const task = todoList.find(task => task.id == id);
    if (task) {
        task.status = newStatus;
        task.updatedAt = Date.now();
        console.log(`Task status set to ${newStatus} successfully! (ID: ${id})\n`);
    } else throw new Error(`Task with id ${id} not found.`);
}

function listTasks(todoList, status) {
    let tasks = "";
    let shiftedList = todoList.slice(1);
    if (status == "all") {
        shiftedList.forEach(task => {
            tasks += `(ID: ${task.id}) - ${task.description}\n`;
        });
    } else {
        let filteredList = shiftedList.filter(task => task.status === status);
        filteredList.forEach(task => {
            tasks += `(ID: ${task.id}) - ${task.description}\n`;
        });
    }
    console.log(tasks);
}

module.exports = { addTask, deleteTask, updateTask, updateStatus, listTasks }