// Simple Task Manager Assignment
function addTask(tasks) {
    var toDoList = [];
    console.log(toDoList);
    function addTask(task) {
    }
    function displayTasks() {
        (function (_task, index) {
            console.log("".concat(index + 1, ". ").concat(tasks));
        });
    }
    addTask('clean the bathroom');
    addTask('wash the dishes');
    addTask('mop the floor');
    displayTasks();
    return function () {
        addTask('buy milk');
        displayTasks();
    };
}
;
