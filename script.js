// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            deleteTask(e.target.parentElement);
        } else if (e.target.tagName === 'LI') {
            toggleTask(e.target);
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.classList.add('delete-btn');
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }

    function toggleTask(taskItem) {
        taskItem.classList.toggle('completed');
    }
});
