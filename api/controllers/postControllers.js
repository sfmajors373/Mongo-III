const mongoose = require('mongoose');

const Post = mongoose.mode('Post');
const User = mongoose.model('Comment');

const STATUS_USER_ERROR = 422;
const STATUS_SERVER_ERROR = 500;

// controller mthods here
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
  createPost,
  listPosts,
  findPost,
};
