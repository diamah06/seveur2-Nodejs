const express = require('express');
const router = express.Router();

const { User } = require('../db.js');

/* GET */
router.get('/', async (req, res, next) => {
  try {
      const users = await User.findAll();
      res.json({ users });
  } catch (error) {
      next(error);
  }
});

/* POST */
router.post('/', async (req, res, next) => {
  const user = await User.create({
    role: "isrole",
    firstName: "isfirstname",
    lastName: "islastname",
    email: "email@myrest.com",
    phoneNumber: "09099090",
    password: "ispassword"
  });
  res.json({ user });
  
})

module.exports = router;