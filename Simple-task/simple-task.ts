// Simple Task Manager Assignment

interface Task {
    name: string;
}

function addTask(tasks: string) {
   let toDoList: Array <String>= []
   console.log(toDoList);
   function addTask(task: string) {
 }
    
    function displayTasks(): void {
    ((_task: string, index: number) =>{
        console.log(`${index +1}. ${tasks}`);
    });
    }
   
    addTask('clean the bathroom');
    addTask('wash the dishes');
    addTask('mop the floor');
    displayTasks();

    return () => {
        addTask('buy milk');
        displayTasks();
        };
        };
