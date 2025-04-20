const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
require('dotenv').config();

const routes = require('./routes');
const sequelize = require('./config/connection');
const { User, Transaction, Category } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: true
};
app.use(session(sess));

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(routes);

sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('❌ Unable to connect to the database:', err);
  });

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
