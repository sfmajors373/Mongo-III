module.exports = (app) => {
  //add your new routes here
  const PostControllers = require('../controllers/postControllers');
  const UserControllers = require('../controllers/userControllers');

  app.route('/new-user')
    .post(UserController.createUser);
  app.route('/login')
  app.route('/new-post')
  app.route('/posts')
  app.route('/posts/:id')
  app.route('/posts/:id')
};
