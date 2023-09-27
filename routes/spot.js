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

/* PUT */
router.put('/', async function (req, res, next) {
  const id = 1;
  const spot = await Spot.findByPk(id);

  spot.note = 'newnamespot'
  await spot.save();
  
  res.json({spot });
  // res.json({message: "hello, update"});
});


/* DELETE */
router.delete('/', async function (req, res, next)  {
  const id = 1;
  const spot = await Spot.findByPk(id);
  await spot.destroy();
  res.json({spot });
});


module.exports = router;