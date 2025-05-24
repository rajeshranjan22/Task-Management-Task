import { throttle } from './utils.js';

const STORAGE_KEY = 'my_daily_tasks';

export function getTasks() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
        return [];
    }
}

export const saveTasksThrottled = throttle(tasks => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}, 1000);

export function clearTasks() {
    localStorage.removeItem(STORAGE_KEY);
}
