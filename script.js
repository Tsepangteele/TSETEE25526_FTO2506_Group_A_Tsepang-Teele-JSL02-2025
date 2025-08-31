// Ask repeatedly until. status is. valid //

function promptForValidStatus (message) {
const allowed =["todo", "doing", "done"];

//gonna ask until valid task is entered//

while (true) {
    const input = prompt (message);
    if(input=== null) {
    alert("Please enter a valid status: 'todo','doing','done'.");
continue;
 }
const normalized= input.trim() .toLowerCase();
if (allowed.includes (normalized)) return normalized;

alert("Invalid status. Please enter 'todo','doing', or 'done'.");
    }
}

// Generic prompt that trims and handles null//

function promptForText (message){
    while (true) {
        const input = prompt (message);
        if (input === null) {
            alert ("Please provide a task");
            continue;
        }
        const value = input.trim ();
        if (value.length) return value;

        alert ("Input can't be empty. Please try again.");
    }    
}

// Collecting one task //

function collectTask(taskNumber){
    const title = promptForText (`Enter the title for task ${taskNumber}:`);
    const description = promptForText (`Enter the description for task ${taskNumber}:`);
    const status = promptForValidStatus (`Enter the status for task ${taskNumber} ('todo', 'doing', or 'done'):`
    );

    return {title, description, status};
}

// Collecting two tasks,then report completed ones//

const task1 = collectTask(1);
const task2 = collectTask(2);

//Displayed in console//

const tasks = [task1, task2];
const completed = tasks.filter(t => t.status === "done");

if (completed.length > 0 ) {

    completed. forEach ( t => {
        console.log (`Title: ${t.title}, status: ${t.status}`);
    });
 } else {
console.log ("No tasks completed, let's get started");  
 }