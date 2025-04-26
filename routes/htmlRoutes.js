const router = require('express').Router();
const { Transaction, Category } = require('../models');
const withAuth = require('../utils/withAuth');

// === HOMEPAGE ROUTE ===
router.get('/', (req, res) => {
  // Optional: redirect to dashboard if already logged in
  if (req.session.logged_in) {
    return res.redirect('/dashboard');
  }
  res.render('home');
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const transactionData = await Transaction.findAll({
      where: { user_id: req.session.user_id },
      include: [{ model: Category }]
    });

    const categoryData = await Category.findAll({
      where: { user_id: req.session.user_id }
    });

    const transactions = transactionData.map(tx => tx.get({ plain: true }));
    const categories = categoryData.map(cat => cat.get({ plain: true }));

    res.render('dashboard', {
      transactions,
      categories,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    return res.redirect('/dashboard');
  }

  const message = req.session.loginMessage;
  req.session.loginMessage = null;

  res.render('login', { message });
});

router.get('/new-transaction', withAuth, async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      where: { user_id: req.session.user_id }
    });

    const categories = categoryData.map(category => category.get({ plain: true }));

    res.render('new-transaction', {
      categories,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    return res.redirect('/dashboard');
  }
  res.render('signup');
});

module.exports = router;
