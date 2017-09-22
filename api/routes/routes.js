module.exports = (app) => {
  //add your new routes here
  const PostControllers = require('../controllers/postControllers');
  const UserControllers = require('../controllers/userControllers');

  app.route('/new-user')
    .post(UserControllers.createUser);
  app.route('/login')
    .post(UserControllers.findUser);
  app.route('/new-post')
    .post
  app.route('/posts')
    .get
  app.route('/posts/:id')
    .get(PostControllers.findPosts);
  app.route('/posts/:id')
    .put
};
