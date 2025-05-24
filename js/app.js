import { getTasks, saveTasksThrottled, clearTasks } from './storage.js';
import { debounce, throttle } from './utils.js';
import { renderTasks, getFormData, scrollToTop } from './ui.js';

let tasks = getTasks();

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskCategory = document.getElementById('task-category');
const searchInput = document.getElementById('search-input');
const clearBtn = document.getElementById('clear-tasks');
const backToTopBtn = document.getElementById('back-to-top');

// Add task
taskForm.addEventListener('submit', e => {
    e.preventDefault();
    const { text, category } = getFormData();
    if (!text) return;

    tasks.push({ text, category, completed: false });
    saveTasksThrottled(tasks);
    renderTasks(tasks, searchInput.value);
    taskInput.value = '';
});

// Delete or toggle task
document.getElementById('task-list').addEventListener('click', e => {
    const index = e.target.closest('li')?.dataset?.index;
    if (e.target.classList.contains('delete-btn')) {
        tasks.splice(index, 1);
    } else if (e.target.classList.contains('task-checkbox')) {
        tasks[index].completed = !tasks[index].completed;
    }
    saveTasksThrottled(tasks);
    renderTasks(tasks, searchInput.value);
});

// Search input
searchInput.addEventListener('input', debounce(e => {
    renderTasks(tasks, e.target.value);
}, 300));

// Clear all
clearBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to delete all tasks?')) {
        tasks = [];
        clearTasks();
        renderTasks(tasks);
    }
});

// Scroll - Back to top
window.addEventListener('scroll', throttle(() => {
    const btn = document.getElementById('back-to-top');
    btn.style.display = window.scrollY > 200 ? 'block' : 'none';
}, 200));

document.getElementById('back-to-top').addEventListener('click', scrollToTop);

// Initial render
renderTasks(tasks);
