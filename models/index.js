const User = require('./User');
const Transaction = require('./Transaction');
const Category = require('./Category');

// User has many Transactions and Categories
User.hasMany(Transaction, { foreignKey: 'user_id' });
User.hasMany(Category, { foreignKey: 'user_id' });

// Transaction belongs to User and (optionally) Category
Transaction.belongsTo(User, { foreignKey: 'user_id' });
Transaction.belongsTo(Category, { foreignKey: 'category_id' });

// Category belongs to User and has many Transactions
Category.belongsTo(User, { foreignKey: 'user_id' });
Category.hasMany(Transaction, { foreignKey: 'category_id' });

module.exports = {
  User,
  Transaction,
  Category
};
