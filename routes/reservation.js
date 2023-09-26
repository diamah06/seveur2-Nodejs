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
    name: 'Dina',
    note: 'rooftop',
    status: 1,
    userId: 1,
    spotId: 1,
    roomId: 1
  });
  res.json({reservation });
});


/* PUT */
router.put('/', function(req, res, next) {
  res.json({ message: "Hello, Update!" });
});


/* DELETE */
router.delete('/', function(req, res, next) {
  res.json({ message: "Hello, Delete!" });
});



module.exports = router;