const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');
const taskCategory = document.getElementById('task-category');

export function getFormData() {
    return {
        text: taskInput.value.trim(),
        category: taskCategory.value
    };
}

export function renderTasks(tasks, filter = '') {
    taskList.innerHTML = '';

    tasks
        .filter(task => task.text.toLowerCase().includes(filter.toLowerCase()))
        .forEach((task, index) => {
            const li = document.createElement('li');
            li.dataset.index = index;

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'task-checkbox';
            checkbox.checked = task.completed;

            const span = document.createElement('span');
            span.textContent = task.text;
            span.className = 'task-text' + (task.completed ? ' completed' : '');

            const category = document.createElement('span');
            category.className = 'task-category';
            category.textContent = `[${task.category}]`;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '🗑️';
            deleteBtn.className = 'delete-btn';

            const wrapper = document.createElement('div');
            wrapper.className = 'task-actions';
            wrapper.appendChild(checkbox);
            wrapper.appendChild(deleteBtn);

            li.appendChild(span);
            li.appendChild(category);
            li.appendChild(wrapper);

            taskList.appendChild(li);
        });
}

export function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
