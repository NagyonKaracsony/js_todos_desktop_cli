# js_todos_desktop_cli
#### A simple Offline CLI application for task tracking with long term JSON data storage

## Quick Start
To setup this project open a terminal and run this line by line:
```
git clone https://github.com/NagyonKaracsony/js_todos_desktop_cli.git
cd js_todos_desktop_cli
npm install
```

To start the program simply run either of theese in the terminal:
```
node .
```
**OR**
```
node index.js
```

## Usage

### Adding a new task
```
task-cli add "Buy groceries"
Task added successfully (ID: 1)
```

### Updating a task
```
task-cli update 1 "Buy groceries and cook dinner"
Task updated successfully! (ID: 1)
```

### Deleting a task
```
task-cli delete 1
Task deleted successfully! (ID: 1)
```

### Marking a task's progress as in-progress or done
```
task-cli mark-in-progress 1
Task status set to in-progress successfully! (ID: 1)
```
```
task-cli mark-done 1
Task status set to done successfully! (ID: 1)
```

### Listing tasks by status
```
task-cli list todo
(ID: 1) - Buy grocieries
```
```
task-cli list in-progress
(ID: 2) - do the dishes
```
```
task-cli list done
(ID: 3) - clean the bedroom
```

### Listing all tasks
```
task-cli list all
(ID: 1) - Buy grocieries
(ID: 2) - do the dishes
(ID: 3) - clean the bedroom
```