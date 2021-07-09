var seedUsers = require('./user-seeds');
var seedPosts = require('./post-seeds');
var seedComments = require('./comment-seeds');

var sequelize = require('../config/connection');

var seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedPosts();
  console.log('--------------');

  await seedComments();
  console.log('--------------');

  process.exit(0);
};

seedAll(); 

