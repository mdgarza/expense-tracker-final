const router = require('express').Router();
const { Transaction } = require('../../models');
const withAuth = require('../../utils/withAuth');

router.get('/', withAuth, async (req, res) => {
  try {
    const transactions = await Transaction.findAll({
      where: {
        user_id: req.session.user_id
      }
    });
    res.json(transactions);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
    try {
      const transaction = await Transaction.create({
        ...req.body,
        user_id: req.session.user_id
      });
      res.status(201).json(transaction);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updated = await Transaction.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      }
    });

    if (!updated[0]) {
      return res.status(404).json({ message: 'No transaction found with this id for the user' });
    }

    res.json({ message: 'Transaction updated successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deleted = await Transaction.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      }
    });

    if (!deleted) {
      return res.status(404).json({ message: 'No transaction found with this id for the user' });
    }

    res.json({ message: 'Transaction deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
