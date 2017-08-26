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
	
// createPost
const createPost = (req, res) => {
  const { title, content } = req.body;
  const newPost = new Post({ text, title });
    newPost.save()
      .then((newPost) => {
	res.json(newPost);
      })
      .catch((err) => {
        res.status(STATUS_USER_ERROR);
        res.json({ stack: err.stack, message: err.message });
      });
};
// listPosts
const listPosts = (req, res) => {
  Post.find({})
    .populate('comments', 'text');
    .exec()
      .then((posts) => {
        res.json(posts);
      })
      .catch((err) => {
        res.status(STATUS_USER_ERROR);
        res.json({ stack: err.stack, message: err.message });
      });
};
// findPost
const findPosts = (req, res) => {
  const { id } = req.body;
  Post.findById(id)
    .populate('comments', 'content')
    .exec()
    .then((posts) => {
      res.json(post);
    });
    .catch((err) => {
      res.status(STATUS_USER_ERROR);
      res.json(err);
    });
}
// updatePost

module.exports = {
  createUser,
  findUser,
  createPost,
  listPosts,
  findPosts,
};
