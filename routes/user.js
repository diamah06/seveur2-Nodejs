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
/* GET currentuser */
router.get('/currentUser', async (req, res, next) => {
  try {
    // Get the user ID 
    const userId = req.user.id;

    // Find the user by ID
    const currentUser = await User.findByPk(userId);

    // If the user is not found, send a 404 error
    if (!currentUser) {
      return res.status(404).json({ error: 'user not found' });
    }

    // Return the user information
    res.status(200).json({ currentUser });
  } catch (error) {
    // If there is an error, send the error message to the client
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
  
});

/* PUT */
router.put('/', async function (req, res, next) {
  const id = 1;
  const user = await User.findByPk(id);

  user.role = 'newrole'
  await user.save();
  
  res.json({user });
  // res.json({message: "hello, update"});
});


/* DELETE */
router.delete('/', async function (req, res, next)  {
  const id = 1;
  const user = await User.findByPk(id);
  await user.destroy();
  res.json({user });
});

module.exports = router;