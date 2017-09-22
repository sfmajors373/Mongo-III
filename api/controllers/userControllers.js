const mongoose = require('mongoose');

const Post = mongoose.model('Post');
const User = mongoose.model('Comment');

const STATUS_USER_ERROR = 422;
const STATUS_SERVER_ERROR = 500;

// controller methods here

const createUser = (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password });
    newUser.save()
      .then((newUser) => {
        res.json(newUser);
      })
      .catch((err) => {
	res.status(STATUS_USER_ERROR);
	res.json({ stack: err.stack, message: err.message });
      });
};

// login - same as create but instead of save, finduser in DB and send it back
const findUser = (req, res) => {
  const { username, password } = req.body;
    User.findOne({ username })
      .exec()
      .then((user) => {
        res.json(user);
      });
      .catch((err) => {
        res.status(STATUS_USER_ERROR);
        res.json({ stack: err.stack, message: err.message });
      });
};

module.exports = {
  createUser,
  findUser,
};
