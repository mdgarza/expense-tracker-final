A full-stack personal finance tracker application built with **Node.js**, **Express**, **Sequelize**, and **MySQL**. Users can register for an account, log in, create expense/income categories, track transactions, and view their balance.

what i have done:

**User registration** with hashed passwords (`bcrypt`)
**Sequelize ORM** setup with a MySQL database
**User**, **Transaction**, and **Category** models with associations
**Session management** using `express-session`
**API route** to register a new user (`/api/users`)
**Tested user registration in Postman**

what i still need to do:

Login & Logout routes
Category management (CRUD)
Transaction management (CRUD)
Dashboard view using Handlebars templating
Route protection (session authentication)
Optional: Chart.js financial visualizations
Optional: CSV export or report generation
