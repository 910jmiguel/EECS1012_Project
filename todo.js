// Add a new task to the list
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');

    // Create task list item
    const taskItem = document.createElement('li');
    taskItem.className = 'task';

    // Task description
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.addEventListener('click', () => {
        taskSpan.classList.toggle('completed');
    });

    // Remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    // Add elements to the task item
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(removeButton);

    // Add task to the list
    taskList.appendChild(taskItem);

    // Clear input
    taskInput.value = '';
}
