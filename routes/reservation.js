const express = require('express');
const router = express.Router();
const { Reservation } = require('../db.js');

/* GET */
router.get('/', async (req, res, next) => {
  try {
      const reservations = await Reservation.findAll();
      res.json({ reservations });
  } catch (error) {
      next(error);
  }
});

/* POST */
router.post('/', async (req, res, next) => {
  const reservation = await Reservation.create({
    date: Date.now(),
    name: 'mahdia',
    note: 'isnote',
    status: 1,
    userId: 1,
    spotId: 1,
    roomId: 1
  });
  res.json({reservation });
});


/* PUT */
router.put('/', async function (req, res, next) {
  const id = 1;
  const reservation = await Reservation.findByPk(id);
  reservation.note = 'newnote'
  await reservation.save();

  res.json({reservation });
  // res.json({message: "hello, update"});
});


/* DELETE */
router.delete('/', async function(req, res, next) {
  const id = 4;
  const reservation = await Reservation.findByPk(id);
  await reservation.destroy();
  res.json({ reservation });
});



module.exports = router;