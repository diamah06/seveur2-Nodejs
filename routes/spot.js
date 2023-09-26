const express = require('express');
const router = express.Router();

const { Spot } = require('../db.js');

/* GET */
router.get('/', async (req, res, next) => {
  try {
      const spots = await Spot.findAll();
      res.json({ spots });
  } catch (error) {
      next(error);
  }
});

/* POST */
router.post('/', async (req, res, next) => {
  const spot = await Spot.create({
    name: 'isspot'
  });
  res.json({ spot });
});

module.exports = router;