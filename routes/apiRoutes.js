const router = require('express').Router();

const userRoutes = require('./api/userRoutes');
const transactionRoutes = require('./api/transactionRoutes');
const categoryRoutes = require('./api/categoryRoutes');

router.use('/users', userRoutes);
router.use('/transactions', transactionRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;
