# 📝 My Daily Planner

A clean, simple, and user-friendly daily task planner web app built using **HTML**, **CSS**, and **JavaScript (ES6 modules)**. It allows users to manage their daily tasks effectively by adding, completing, deleting, and searching tasks with a responsive and persistent interface.

---

## 🚀 Features

- ✅ **Add Tasks** — Users can enter tasks and categorize them (e.g., Personal, Work, Study).
- ✅ **Complete Tasks** — Mark tasks as completed using checkboxes (with strikethrough effect).
- 🗑️ **Delete Tasks** — Easily remove individual tasks.
- 🔍 **Search Tasks** — Real-time task filtering using a **debounced search input** for better performance.
- 📦 **Persistent Storage** — All tasks are saved in the browser’s `localStorage`, so they persist after page reload.
- 🧹 **Clear All Tasks** — Optional button to delete all saved tasks.
- 🔝 **Back to Top Button** — A button appears after scrolling down, implemented using **throttled scroll events** for performance.
- 📱 **Responsive UI** — Optimized for desktop and mobile with modern layout techniques.
- 💡 **Modular JavaScript** — Clean and maintainable codebase using **ES6 modules** (split into files like `taskManager.js`, `storage.js`, `utils.js`, etc.)

---


---

## 📦 Technologies Used

- **HTML5** — Semantic structure and accessibility
- **CSS3** — Flexbox, box shadows, transitions, and responsive design
- **JavaScript (ES6)** — ES modules, DOM manipulation, `localStorage`, debounce & throttle
- **localStorage API** — For saving and retrieving task data

---

## 🔧 How to Use

1. Clone or download this repository.
2. Open the `index.html` file in any modern web browser.
3. Start adding your tasks!
4. You can:
   - Mark tasks as completed
   - Delete them individually
   - Filter/search tasks via the search bar
   - Use the “Clear All” button to wipe the list

No server or installation needed.

---

## 🧠 localStorage Data Format

Tasks are saved in localStorage like this:

```json
[
  {
    "id": "uuid-123",
    "text": "Read JavaScript book",
    "category": "Study",
    "completed": false
  }
]

