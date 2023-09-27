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

/* PUT */
router.put('/', async function (req, res, next) {
  const id = 1;
  const room = await Room.findByPk(id);
  room.name = 'newname'
  await room.save();
  res.json({room });
  // res.json({message: "hello, update"});
});

/* DELETE */
router.delete('/', async function (req, res, next)  {
  const id = 3;
  const room = await Room.findByPk(id);
  await room.destroy();
  res.json({room });
});
module.exports = router;