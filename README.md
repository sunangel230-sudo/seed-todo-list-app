# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).


# ✅ TodoList App

A modern and responsive **Todo List** application built with **Vue 3**, **Vite**, and a RESTful API. This project provides a clean interface for managing daily tasks, allowing users to create, edit, complete, and delete tasks efficiently.

---

## 📖 Overview

The TodoList App is designed to help users organize their daily activities through a simple and intuitive interface. It demonstrates modern frontend development practices using Vue 3's Composition API while communicating with a backend through REST APIs.

---

## ✨ Features

* 🔐 User Authentication (Login & Logout)
* ➕ Create new tasks
* 📝 Edit existing tasks
* ✅ Mark tasks as completed
* 🗑️ Delete tasks
* 📋 Display all tasks
* 🔍 Filter tasks (All, Completed, Pending)
* 📊 Task statistics dashboard
* 📱 Responsive design for desktop and mobile

---

## 🛠️ Built With

* Vue 3
* Vite
* Vue Router
* Composition API
* JavaScript (ES6+)
* CSS3
* REST API

---

## 📂 Project Structure

```text
src/
├── assets/
├── components/
│   ├── layout/
│   └── tasks/
├── composables/
├── router/
├── services/
├── views/
├── App.vue
└── main.js
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/todolist-app.git
```

### Navigate into the project

```bash
cd todolist-app
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

---

## 🌐 REST API Endpoints

The application communicates with a REST API for task management.

| Method | Endpoint               | Description              |
| ------ | ---------------------- | ------------------------ |
| POST   | `/tasks`               | Create a new task        |
| GET    | `/tasks`               | Retrieve all tasks       |
| GET    | `/tasks/{id}`          | Retrieve a specific task |
| PUT    | `/tasks/{id}`          | Update an existing task  |
| PATCH  | `/tasks/{id}/complete` | Mark a task as completed |
| DELETE | `/tasks/{id}`          | Delete a task            |

---

## 📷 Application Workflow

1. User logs into the application.
2. Tasks are loaded from the API.
3. Users can:

   * Add new tasks
   * Edit task details
   * Mark tasks as completed
   * Delete unwanted tasks
4. Statistics update automatically as tasks change.

---

## 💡 Learning Objectives

This project demonstrates:

* Vue 3 Composition API
* Component-based architecture
* State management using composables
* REST API integration
* CRUD operations
* Responsive UI design
* Clean and reusable code organization

---

## 📈 Future Improvements

* Search functionality
* Task categories
* Due date reminders
* Priority levels
* Drag-and-drop task ordering
* User profiles
* Dark mode
* Unit and integration testing

---

## 👨‍💻 Author

Developed as a frontend project using **Vue 3** and **Vite** to demonstrate modern web development practices and REST API integration.

---

## 📄 License

This project is available for educational purposes. Feel free to fork, modify, and extend it for your own learning or personal projects.
