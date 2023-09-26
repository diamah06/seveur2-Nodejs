const express = require('express');
const router = express.Router();

const { Room } = require('../db.js');

/* GET */
router.get('/', async (req, res, next) => {
  try {
      const rooms = await Room.findAll();
      res.json({ rooms });
  } catch (error) {
      next(error);
  }
});

/* POST */
router.post('/', async (req, res, next) => {
  const room = await Room.create({
    name: 'isname'
  });
  res.json({room });
});

module.exports = router;