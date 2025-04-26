Deployed URL: https://expense-tracker-final-tdol.onrender.com

GitHub Repository: https://github.com/mdgarza/expense-tracker-final

Summary:
This project is a full-stack Expense Tracker application built using Node.js, Express.js, Sequelize ORM, MySQL2, Handlebars, and express-session for authentication. The app is deployed live using Render for the backend server and Railway for the MySQL database hosting.

Features:

User signup, login, logout, and session handling (with authentication middleware).

Create, read, update, and delete (CRUD) operations for transactions and categories.

Handlebars templates for dynamic frontend rendering.

Responsive design with basic CSS styling.

Separation of concerns: clean API routes, HTML routes, and database models.

Environment variables (.env) are properly hidden using .gitignore.

No sensitive credentials committed to GitHub.

Notes:

All functionality was tested locally and after deployment.

Sequelize models dynamically create tables if they do not exist on initial server startup.

All session-related pages (dashboard, new transaction, etc.) are protected by authentication.

Thank you for reviewing my work!

You can copy-paste that exactly (just double-check that your GitHub URL and live URL are correct — but they should be!).
