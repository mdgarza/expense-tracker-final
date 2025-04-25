const router = require('express').Router();
const { Category } = require('../../models');
const withAuth = require('../../utils/withAuth');

router.get('/', withAuth, async (req, res) => {
  try {
    const categories = await Category.findAll({
      where: {
        user_id: req.session.user_id
      }
    });
    res.json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newCategory = await Category.create({
      name: req.body.name,
      user_id: req.session.user_id
    });
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});


  router.put('/:id', withAuth, async (req, res) => {
    try {
      const updated = await Category.update(
        { name: req.body.name },
        {
          where: {
            id: req.params.id,
            user_id: req.session.user_id
          }
        }
      );
  
      if (!updated[0]) {
        return res.status(404).json({ message: 'No category found with this id' });
      }
  
      res.json({ message: 'Category updated successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const deleted = await Category.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id
        }
      });
  
      if (!deleted) {
        return res.status(404).json({ message: 'No category found with this id' });
      }
  
      res.json({ message: 'Category deleted successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;
