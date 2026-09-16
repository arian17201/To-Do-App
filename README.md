# To-Do-App
This full-stack Todo application features a Node.js backend for API handling, a Node.js-served frontend for user interaction, and an SQL database for data persistence. Designed with a clear separation of concerns, it includes dedicated directories for frontend, backend, and database initialization, ensuring scalable development and easy setup.

## 📂 Project Structure

```text
Todo/
├── backend/
│   ├── package.json      # Backend dependencies
│   └── server.js         # Backend entry point (API server)
├── db/
│   └── init.sql          # Database schema and initialization script
└── frontend/
    ├── package.json      # Frontend dependencies
    ├── package-lock.json # Frontend exact dependency versions
    ├── server.js         # Frontend entry point (static file server or SSR)
    └── public/
        └── index.html    # Main HTML entry point
```

## 🛠️ Tech Stack

*   **Frontend:** Node.js, HTML/CSS/JS
*   **Backend:** Node.js
*   **Database:** SQL


## 📝 Features
*   **Create Tasks:** Add new to-do items to your list.
*   **Read Tasks:** View all pending and completed tasks.
*   **Update Tasks:** Edit task details or mark them as complete.
*   **Delete Tasks:** Remove items from the list.
