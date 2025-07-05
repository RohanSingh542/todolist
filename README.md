# 📝 To-Do List Web App

A simple and elegant To-Do List application built with HTML, CSS, and JavaScript. This app allows users to add, complete, and delete tasks — with persistent storage using the browser's `localStorage`.

---

## 🚀 Features

- ✅ Add new tasks
- 🔁 Mark tasks as complete or incomplete
- ❌ Delete tasks
- 💾 Tasks persist across page reloads using `localStorage`
- 🎨 Clean and responsive UI

---

## 📁 Project Structure
  ├── index.html         # Main HTML structure 
  ├── style.css          # Styling for the app 
  ├── script.js          # JavaScript logic 
└── images/ 
  ├── pending.png    # Icon for pending tasks 
  └── done.png       # Icon for completed tasks

---

## 🛠️ How It Works

- Tasks are stored as objects in an array:
  ```js
  { text: "Buy groceries", completed: false }
  
- The array is saved to localStorage as a JSON string.
- On page load, tasks are loaded from localStorage and rendered.
- Clicking the icon toggles the task's completion status.
- Clicking the ❌ removes the task from the list and storage.

🧪 How to Run
- Clone or download this repository.
- Make sure the images folder contains pending.png and done.png.
- Open index.html in your browser.
- Start adding tasks!

📌 Future Enhancements
- Separate sections for pending and completed tasks
- Add due dates or priority levels
- Filter/search tasks
- Dark mode toggle
